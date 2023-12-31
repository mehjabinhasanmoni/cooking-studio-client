import { Button, Container, Row } from "react-bootstrap";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

const SpecialPromo = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/LNk0zpK/Male-chef-cooking-in-kitchen.png"
            alt=""
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 text-left">
          <h1>Chefs are Special!</h1>
          <p>
            We, <strong className="text-success">Cooking Studio</strong>. We are
            provided authentic Bangladeshi food recipes which is provided by
            most popular bangladeshi chefs.
            <br /> We are also promoting urban food recipies those are healthy
            and special.
          </p>
          <ul className="list-unstyled lh-lg">
            <li>
              <FaCheck style={{ color: "green" }}></FaCheck> Certified Chefs
            </li>
            <li>
              <FaCheck style={{ color: "green" }}></FaCheck> Community
              influencer chefs
            </li>
            <li>
              <FaCheck style={{ color: "green" }}></FaCheck> They follows the
              best nutritions guideline
            </li>
            <li>
              <FaCheck style={{ color: "green" }}></FaCheck> Authentic
              ingredients are used in each recipies
            </li>
            <li>
              <FaCheck style={{ color: "green" }}></FaCheck> Each chefs are more
              than 6+ years experties
            </li>
          </ul>
          <div className="subscribe mt-5 mb-5">
            <h3 className="mb-0">Subscribe</h3>
            <p>We never spam in your inbox. We only sent latest recipes</p>
            <input
              type="text"
              className="mt-1"
              placeholder="Enter Your Email"
            />
            <Button variant="success" className="p-3">
              <FaPaperPlane></FaPaperPlane> Subscribe
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default SpecialPromo;
