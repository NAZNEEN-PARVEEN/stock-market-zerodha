import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
    
        <div className="col-6">
          <img src="media/image/largestBroker.svg" alt="Largest Broker Award" />
        </div>

        <div className="col-6 ">
          <h1>Largest stock broker in india</h1>
          <p className="mb-3">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

          <div className='row'>
            <div className='col-6 p-5 '>  
              <ul>
               <li><p>Futures and Options</p></li>
              <li><p>Commodity derivatives</p></li>
              <li><p>Currency derivatives</p></li>
              </ul>
            </div>
                   <div className='col-6 p-5'>
                    <ul>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                   <li><p>Bonds and Govt. securities</p></li>
                   </ul>
                   </div>
          </div>
        <img src='Media\image\pressLogos.png' style={{width:"90%"}}/>
  
                  
        </div>
      </div>
    </div>
  );
}

export default Awards;
