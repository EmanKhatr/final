import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="column body">
            <div className="col-md-6 col-lg-4 py-2 ">
              <h2 className="mt-3 h2 fs-1">The Newest Revenue Of Make UP</h2>
              <p className="py-1 lead">
                All what you need for all skincare and makeup and more!
              </p>
              <Link to="/products" className="bu2">Learn More</Link>
            </div>
            <div className="slider container">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active ">
                    <div className="d-flex justify-content-center sale">
                      <div className="">
                        <p className="p1">flash</p>
                        <p className="p2">Sale</p>
                      </div>
                      <div>
                        <p className="p3">20%</p>
                        <p className="p4">Discount</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item text-center">
                    <img src="./sal2.webp" className="  d-block img" />
                  </div>
                  <div className="carousel-item">
                    <img src="./sale.jpg" className=" d-block img " />
                  </div>
                </div>
                <button
                  className="carousel-control-prev "
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon text-dark"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next btn-dark text-dark"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div>
              <div className="pro container text-center d-flex flex-column  justify-content-center ">
              <p className="p5">Sampels</p>
                <div className="back">
                  <div className="bord">
                 
                <div className="row row-cols-">
                  <div className="col"><img src="./pro1.jpg" className="img2"></img></div>
                  <div className="col"><img src="./pro2.jpg" className="img2"></img></div>
                  <div className="col"><img src="./pro3.jpg" className="img2"></img></div>
                  <div className="col"><img src="./pro4.jpg" className="img2"></img></div>
                  <div className="col"><img src="./pro5.jpg" className="img2"></img></div>
                  <div className="col"><img src="./pro6.jpg" className="img2"></img></div>
                </div>
                <Link to="/products" className="bu3">Go to products &#10132;</Link>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
