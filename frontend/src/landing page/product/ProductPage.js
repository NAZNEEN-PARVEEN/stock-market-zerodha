import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
    
      <Hero />
      <LeftSection 
      imageURL="Media/image/kite.png"
      productName="kite" 
      productDescription="Our ultra fast flagship trading platform with  streaming market data, advance chart, and elegant UI and more enjoy the kite experience seamlessly on your Android and IOS devices." 
      tryDemo="" 
      learnMore=""
       googlePlay ="" 
       appStore=""
      />

           <RightSection
               imageURL="Media\image\console.png"
               productName="Console"
                productDescription="The central dashboard for your zerodha account. Gain insights into your trades and investments with in-depth and visualisations. "
                learnMore=""
            />
       <LeftSection 
      imageURL="Media\image\coin.png"
      productName="Coin" 
      productDescription="Buy direct mutual funds online, commission-free,delivered directely to your Demat account.Enjoy the investment experience on your Android and ios devices." 
      tryDemo="" 
      learnMore=""
       googlePlay ="" 
       appStore=""
      />

           <RightSection
            imageURL="Media\image\kiteconnect.png"
               productName="Kite Connect API"
                productDescription="Build Powerful trading platforms and experiences with our super simple HTTP/JSON APIs. if you are a startup, build your investment app and showcase it to our clientbase. "
                learnMore=""
            />
       <LeftSection 
      imageURL="Media\image\varsity.png"
      productName="Varsity mobile" 
      productDescription="An easy to grasp, collection of stock market lessons with in-depth covrage and illustrations. Contest is broken down into bite-size cards to help you learn to go." 
      tryDemo="" 
      learnMore=""
       googlePlay ="" 
       appStore=""
      />

      <p className="text-center">Want to know more about our technology stack? Cheack out the Zerodha .tech blog.</p>
      <Universe />

    </>
  );
}

export default PricingPage;
