import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // تحقق من شكل الإيميل
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // تحقق من اليوزر نيم (حروف فقط وطوله أكبر من أو يساوي 3)
  const validateUsername = (name) => /^[A-Za-z]{3,}$/.test(name);

  // تحقق من الباسوورد (حروف كبيرة وصغيرة + رقم + رمز)
  const validatePassword = (pass) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(pass);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateUsername(username)) {
      setError("Username must be at least 3 letters and contain only letters (no numbers or symbols).");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must contain uppercase, lowercase, a number, and a special character, and be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="form d-flex flex-column justify-content-center align-items-center">
      <h2 className="login">Signup</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Create an account</h1>

        {/* Username */}
        <div className="mt-3 mb-2">
          <input
            placeholder="User name"
            className="in"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            placeholder="Email"
            className="in"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            placeholder="Password"
            className="in"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setConfirmPassword(e.target.value); // تعبئة تلقائية
            }}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <input
            placeholder="Confirm Password"
            className="in"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Error message */}
        {error && <p className="text-danger">{error}</p>}

        <button className="bu" type="submit">
          Submit
        </button>

        <Link to="/login" className="dont mt-1">
          Already have an account?<strong className="sign"> Log in</strong>
        </Link>
      </form>
    </div>
  );
}
