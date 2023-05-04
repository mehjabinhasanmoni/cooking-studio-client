import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Toaster, toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const ViewRecipes = () => {
  const singleChefInfo = useLoaderData();

  const [disable, setDisable] = useState([]);

  const {
    chef_id,
    recipe_id,
    recipe_name,
    photo,
    ingredients,
    cooking_method,
    rating,
  } = singleChefInfo;

  const notify = (recipe_id) => {
    toast.success("The Recipe is Your Favourite");
    console.log("disabled click", recipe_id);
    const newDisable = [...disable];
    newDisable.push(recipe_id);
    setDisable(newDisable);
  };

  return (
    <Row>
      {singleChefInfo.map((singleChef) => (
        <Col
          className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-5"
          key={singleChef.recipe_id}
        >
          <Card style={{ width: "26rem", height: "700px" }}>
            <div
              className="p-2"
              style={{ height: "250px", overflow: "hidden" }}
            >
              <LazyLoad height={762} offset={300}>
              <Card.Img variant="top" src={singleChef.photo} />
              </LazyLoad>
            </div>

            <Card.Body>
              <Card.Title>{singleChef.recipe_name}</Card.Title>
              <Card.Text>
                <div>
                  <p className="text-secondary">
                    {singleChef.ingredients.map((ingredient, index) => (
                      <span key={index}>
                        <ul>
                          <li>{ingredient}</li>
                        </ul>
                      </span>
                    ))}
                  </p>
                  <p className="text-secondary">{singleChef.cooking_method}</p>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={singleChef.rating}
                    readOnly
                  />
                  {singleChef.rating}
                </div>

                <Button
                  variant={
                    disable.includes(singleChef.recipe_id)
                      ? "success"
                      : "outline-success"
                  }
                  onClick={() => notify(singleChef.recipe_id)}
                  disabled={disable.includes(singleChef.recipe_id)}
                >
                  {" "}
                  <FaRegHeart></FaRegHeart>
                </Button>
                <Toaster />
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ViewRecipes;
