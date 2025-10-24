import React from "react";

function LeftSection() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        {/* Heading */}
        <h1>Technology</h1>

        {/* Sub-heading */}
        <h3 className="text-muted mt-3 fs-5">
          Sleek, modern and intuitive trading platforms
        </h3>

        {/* Paragraph with link */}
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a
            href="#"
            className="mx-1"
            style={{ textDecoration: "none" }}
          >
            investment offering{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>

        
      </div>
    </div>
  );
}

export default LeftSection;
