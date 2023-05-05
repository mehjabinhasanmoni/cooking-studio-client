import { Container } from "react-bootstrap";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-light p-5">
      <Container>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="text-center">
            <img src="https://i.ibb.co/7NMtdy5/logo.png" alt="Logo" />
            <h2 className="mt-3">Your Trusted Cooking Studio</h2>
            <h5 className="mt-2">join adventure of Bangladeshi chefs</h5>
          </div>
        </div>

        <div className=" d-flex align-items-center justify-content-center">
          <a href="#">
            <FaFacebook
              style={{ fontSize: "2.5em", margin: "10px" }}
            ></FaFacebook>
          </a>
          <a href="#">
            <FaTwitter
              style={{ fontSize: "2.5em", margin: "10px" }}
            ></FaTwitter>
          </a>
          <a href="#">
            <FaInstagram
              style={{ fontSize: "2.5em", margin: "10px", color: "red" }}
            ></FaInstagram>
          </a>
          <a href="#">
            <FaGooglePlus
              style={{ fontSize: "2.5em", margin: "10px", color: "red" }}
            ></FaGooglePlus>
          </a>
        </div>
      </Container>

      <p className="text-center mt-3">
        Copyright 2023 All Rights Reserved by{" "}
        <strong className="text-success">Cooking Studio</strong>{" "}
      </p>
    </div>
  );
};

export default Footer;
