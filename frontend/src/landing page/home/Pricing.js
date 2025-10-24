import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div>
            <a
              href="#"
              className="mx-2"
              style={{ textDecoration: "none" }}
            >
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="col-md-2"></div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="row text-center">
            <div className="col p-4 border rounded">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-4 border rounded">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
