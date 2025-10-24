import React from 'react';
 

function Hero() {
    return (  
<>
<section className="container-fluid "id='supportHero'>
        <div className=" p-3  " id="supportWrapper">
          <h4 className='mt-5 '>Support Portal </h4>
          <a href="" className='mt-5' id="trac">Track Tickets</a>
        </div>
         <div className=" row p-5   " id="main row">
              <div className=" col-6 p-5 " >
                <h1 className='fs-3'>Search for an answer 
                    or browse help topics to create a ticket</h1>
                <input placeholder='Eg: how do i activate F&Q, 
                why is my order getting rejected.'/> <br/>
                <div className='mt-3'>
               <a href="">Track account opening</a> &nbsp; 
               <a href=""> Track segment activation </a> &nbsp;
               <a href=""> Intraday margin </a> &nbsp; <br/>
               <a href=""> Kite user manual</a> 
               </div>
              </div>
             <div className=" col-6 p-5  "  id="feature">
                <h1>Features</h1>
                <ol>
                    <li> <a href="" className='mt-5'>Current Takeovers and delisting - January 2024</a>  </li>
                    <li> <a href=""> Latest Intraday leverages - MTS & CO </a></li>
                </ol>
               
              
             </div>

  
        </div>
      </section>
</>

     );
}

export default Hero;