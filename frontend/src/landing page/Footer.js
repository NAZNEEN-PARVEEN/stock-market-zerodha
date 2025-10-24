import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        {/* First Row */}
        <div className="row mt-5">
          <div className="col">
            <img src="media/image/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p>
              &copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved
            </p>
          </div>

          <div className="col">
            <p className="fw-bold">Company</p>
            <a className="d-block" href="">About</a>
            <a className="d-block" href="">Product</a>
            <a className="d-block" href="">Pricing</a>
            <a className="d-block" href="">Referral program</a>
            <a className="d-block" href="">Careers</a>
            <a className="d-block" href="">Zerodha.tech</a>
            <a className="d-block" href="">Press & media</a>
            <a className="d-block" href="">Zerodha Cares (CSR)</a>
          </div>

          <div className="col">
            <p className="fw-bold">Support</p>
            <a className="d-block" href="">Contact</a>
            <a className="d-block" href="">Support Portal</a>
            <a className="d-block" href="">Z-Connect Blog</a>
            <a className="d-block" href="">List of Charges</a>
            <a className="d-block" href="">Downloads & Resources</a>
          </div>

          <div className="col">
            <p className="fw-bold">Account</p>
            <a className="d-block" href="">Open an account</a>
            <a className="d-block" href="">Funds transfer</a>
            <a className="d-block" href="">60 Day Challenge</a>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE ▪ SEBI Registration no.: INZ000031633
            <br />
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. ▪ SEBI Registration no.:
            IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. ▪ MCX: 46025 ▪ SEBI
            Registration no.: INZ000038238
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
            details: Name, PAN, Address, Mobile Number, E-mail ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related documents
            carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile/email with your
            broker. Receive information of your transactions directly from Exchange."
          </p>

<div
  className="d-flex justify-content-center gap-4 mt-4"
  style={{ textDecoration: "none" }}
>
  <a href="">Product</a>
  <a href="">NSE</a>
  <a href="">BSE</a>
  <a href="">MCX</a>
  <a href="">Privacy Policy</a>
  <a href="">Terms and Conditions</a>
</div>


          
        </div>


      </div>
    </footer>
  );
}

export default Footer;
