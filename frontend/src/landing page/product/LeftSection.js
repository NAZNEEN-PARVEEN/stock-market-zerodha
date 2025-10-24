import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        
        {/* Left Image Section */}
        <div className="col-6 p-5 mt-5">
          <img src={imageURL} alt={productName} />
        </div>

        {/* Right Content Section */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Links */}
          <div>
            <a href={tryDemo}>Try Demo   <i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More   <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="Media/image/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="Media/image/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
