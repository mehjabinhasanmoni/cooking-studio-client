import { useEffect, useState } from "react";
import ViewRecipes from "../../pages/ViewRecipes/ViewRecipes";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { FaClock, FaCoffee, FaThumbsUp } from "react-icons/fa";

const SingleChef = () => {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://cooking-studio-server-mehjabinhasanmoni.vercel.app/chefinfo/${id}`
    )
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);

  return (
    <div>
      <Container fluid className=" chef-details">
        <Container>
          <Row className="d-flex align-items-center justify-content-between">
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 p-5">
              <LazyLoad offset={300}>
                <img className="img-fluid" src={chef.Chef_Picture} alt="" />
              </LazyLoad>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 text-left ">
              <h1 className="text-light">{chef.Chef_Name}</h1>
              <p>{chef.sort_description}</p>
              <div className="d-flex align-items-center justify-content-between text-black">
                <h5>
                  <FaClock></FaClock> Experience :{" "}
                  <span>{chef.Years_of_experience}</span>
                </h5>
                <h5>
                  <FaThumbsUp></FaThumbsUp> Likes : <span>{chef.Likes}</span>
                </h5>
                <h5>
                  <FaCoffee></FaCoffee> Recipes :{" "}
                  <span>{chef.Numbers_of_recipes}</span>
                </h5>
              </div>
            </div>
          </Row>
        </Container>
      </Container>

      <Container>
        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <img src="https://i.ibb.co/StsSxfP/fav.png" className="me-2" style={{width:"40px"}}/>
          <h2 className="text-success">Recipes</h2>
        </div>
      
        <ViewRecipes></ViewRecipes>
      </Container>
    </div>
  );
};

export default SingleChef;
