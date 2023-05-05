import { Button, Card} from "react-bootstrap";
import {  FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefInfo = ({ chef }) => {
  const {
    chef_id,
    Chef_Picture,
    Chef_Name,
    Years_of_experience,
    Numbers_of_recipes,
    Likes,
  } = chef;
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4 chef-card">
      <Card>
        <div style={{ height: "320px", overflow: "hidden" }} className="p-3">
          <LazyLoad height={762} offset={300}>
            <Card.Img variant="top" src={Chef_Picture} />
          </LazyLoad>
        </div>

        <Card.Body>
          <Card.Title>{Chef_Name}</Card.Title>
          <Card.Text>
           
             
                Years of Experience : <span>{Years_of_experience}</span><br/>
              
              
                Numbers of Recipes : <span>{Numbers_of_recipes}</span>
              
           
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center justify-content-between">
          <p>
            <FaRegThumbsUp></FaRegThumbsUp> {Likes}
          </p>
          <Link to={`/chef-detail/${chef_id}`}>
            <Button variant="success">
              {" "}
              <FaRegEye></FaRegEye> View Recipes
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ChefInfo;
