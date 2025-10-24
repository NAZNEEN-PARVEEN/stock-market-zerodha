import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        
        <h1>TThe Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms.</p>
 

        <div className="col-4  p-3 mt-5">
          <img src="Media\image\smallcaseLogo.png"width={"50%"}/>
          <p className='text-small text-muted'> Thematic investment platform</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="Media\image\streakLogo.png" width={"40%"} />
           <p className='text-small text-muted'>Alge & strategy platform</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="Media\image\sensibullLogo.svg" width={"50%"}/>
        <p className='text-small text-muted'>Options trading platform</p>
        </div>

        
        <div className="col-4  p-3  mt-5">
          <img src="Media\image\zerodhaFundhouse.png"width={"50%"}/>
          <p className='text-small text-muted'> Asset Managment</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="Media\image\goldenpiLogo.png" width={"50%"}/>
           <p className='text-small text-muted'> Bonds trading platforms</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="Media\image\dittoLogo.png"width={"50%"} />
        <p className='text-small text-muted'> Insurance</p>
        </div>
 <button className='p-3 btn btn-primary fs-5  mb-5 mt-5' style={{width:"20%", margin :"0 auto"}}>Signup now  Now</button>


        
      </div>
    </div>
     );
}

export default Universe;