import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields");
      return;
    }

    // لو كل حاجة تمام نروح على الهوم
    navigate("/");
  };

  return (
    <div className="form d-flex flex-column justify-content-center align-items-center">
      <h2 className="login">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Welcome Back!</h1>

        <div className="mt-4 mb-3">
          <input
            required
            placeholder="User name"
            className="in"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            {username.length > 0 && username.length <= 3 ? (
              <p className="text-danger">Must be more than three letters!</p>
            ) : ""}
          </div>
        </div>

        <div className="mb-3">
          <input
            required
            type="password"
            className="in mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="emailHelp1" className="form-text">
            Must contain uppercase and lowercase letters.
          </div>
          <a className="mx-3 dont">Forget Password?</a>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button className="bu" type="submit">
          Submit
        </button>

        <Link to="/signup" className="dont mt-1">
          Don't have an account?<strong className="sign"> Sign up</strong>
        </Link>
      </form>
    </div>
  );
}
