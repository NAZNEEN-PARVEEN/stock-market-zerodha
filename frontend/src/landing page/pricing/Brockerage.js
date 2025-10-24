import React from 'react';

function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 text-center">
          <div className="col-8 ">
            <h1 className="fs-4 " style={{ color: "#059cfc" }}>
              Brokerage Calculator
            </h1>
            <ul className="text-muted fs-6 mt-4" style={{ textAlign: "left", fontSize: "12px",lineHeight:"1.8"  }}>
              <li className='p-1'>Call & Trade and RMS auto-squareoff charges of ₹ 50 + GST per hour.</li>
              <li className='p-1'>Digital contract notes will be sent via e-mail.</li>
              <li className='p-1' >Physical copies of contract notes, if required, shall be charged ₹ 20 per contract note. Courier charges apply.</li>
              <li className='p-1'>For NRI account (non-PIS), 0.5% or ₹ 100 per executed order for equity (whichever is lower).</li>
              <li className='p-1'>For NRI account (PIS), 0.5% or ₹ 200 per executed order for equity (whichever is lower).</li>
              <li className='p-1'>If the account is in debit balance, any order placed will be charged ₹ 40 per executed order instead of ₹ 20 per executed order.</li>
            </ul>
          </div>
          <div className="col-4 p-4">
            <h1 className="fs-4" style={{ color: "#059cfc" }}>
              List of charges
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
