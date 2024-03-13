import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faVoicemail,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-sm-4 footerDetails">
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ paddingLeft: "1rem" }} />{" "}
            Phone :{" "}
          </p>
          <p>+91 1234567890</p>
        </div>
        <div className="col-sm-3 footerDetails">
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faVoicemail}
              style={{ paddingLeft: "1rem" }}
            />{" "}
            E-Mail :{" "}
          </p>
          <p>Yarishh@gmail.com</p>
        </div>
        <div className="col-sm-4 footerDetails">
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faAddressCard}
              style={{ paddingLeft: "1rem" }}
            />{" "}
            Address :{" "}
          </p>
          <p>Begumpet</p>
        </div>
      </div>
      <div className="row" style={{ margin: "2rem", fontSize: "2rem" }}>
        Logo
      </div>
      <div className="row" style={{ marginBottom: "14rem" }}>
        <div className="col-sm-3">For Company</div>
        <div className="col-sm-3">For Customers</div>
        <div className="col-sm-3">For Partners</div>
        <div className="col-sm-3">
          <SocialIcon url="https://twitter.com" />{" "}
          <SocialIcon url="https://facebook.com" />{" "}
          <SocialIcon url="https://instagram.com" />{" "}
          <SocialIcon url="https://linkedin.com" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
