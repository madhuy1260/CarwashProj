import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-sm-3 footerDetails">
          <p>Logo Phone</p>
          <p>Phone Number</p>
        </div>
        <div className="col-sm-3 footerDetails">
          <p>Logo Phone</p>
          <p>Phone Number</p>
        </div>
        <div className="col-sm-3 footerDetails">
          <p>Logo Phone</p>
          <p>Phone Number</p>
        </div>
      </div>
      <div className="row">Logo</div>
      <div className="row" style={{ marginBottom: "10rem" }}>
        <div className="col-sm-3">For Company</div>
        <div className="col-sm-3">For Company</div>
        <div className="col-sm-3">For Company</div>
        <div className="col-sm-3">Socila media Logos</div>
      </div>
    </div>
  );
}

export default Footer;
