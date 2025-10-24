import React from "react";

function Team(){
    return (
         <div className="container">
        <div className="row p-3 mt-5 border-top">
          <h1 className=" text-center ">People</h1>
        </div>

        <div className="row p-3 text-muted "
        style={{lineheight:"",fontSize:"1.2em"}}>

          <div className="col-6 p-5 text-center">
           <img src="Media\image\nithinKamath.jpg"
           style={{borderRadius:"100%",width:"50%"}}/>

           <h5 className="mt-3">Nitin Kamath</h5>
          <p style={{ fontSize: "15px" }}>Founder, CEO</p>
          </div>

          <div className="col-6 p-3">
          <p> Nithin Kamath founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has transformed the landscape of the Indian broking industry.</p>
         <p> He is also a member of SEBI’s Secondary Market Advisory Committee.(SMAC) and the Market Data Advisory Committee(MDAC). </p>
         
            <p>playing basketball is his zen.</p>

            <p>Connect on <a href=""style={{ textDecoration: "none" }}>Hompage </a> <a href=""style={{ textDecoration: "none" }}>/TradingQnA </a> <a href=""style={{ textDecoration: "none" }}>/Twitter </a> </p>
          </div>
        </div>
      </div>
    );
}

export default Team;