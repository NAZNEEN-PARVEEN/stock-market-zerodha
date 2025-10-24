import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section (Image / Illustration) */}
        <div className="col-md-6 text-center">
          <img
            src="media/image/education.svg"
            alt="Varsity"
            className="img-fluid mb-3"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Section (Content) */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-3 fs-2 ">Free and open market education</h1>
          <br></br>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="d-block mb-3"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            Varsity →
          </a>

          <br></br>

          <p>
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="d-block"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            TradingQ&amp;A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
