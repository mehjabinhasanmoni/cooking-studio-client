import React from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const ViewRecipes = () => {
  const singleChefInfo = useLoaderData();

  const {
    chef_id,
    recipe_id,
    recipe_name,
    photo,
    ingredients,
    cooking_method,
    rating,
  } = singleChefInfo;

  return (
    <Row>
      {singleChefInfo.map((singleChef) => (
        <Col
          className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-5"
          key={singleChef.chef_id}
        >
          <Card style={{ width: "26rem", height: "700px" }}>
            <div
              className="p-2"
              style={{ height: "250px", overflow: "hidden" }}
            >
              <Card.Img variant="top" src={singleChef.photo} />
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

                <FaRegHeart></FaRegHeart>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ViewRecipes;
