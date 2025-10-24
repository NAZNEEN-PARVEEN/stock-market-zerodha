import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row ">
        
        {/* Right Content Section */}
        <div className="col-6 p-5 mt-5">
          <h1 className="">{productName}</h1>
          <p className="fs-5">{productDescription}</p>

          {/* Link */}
          <div>
            <a href={learnMore}>Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
