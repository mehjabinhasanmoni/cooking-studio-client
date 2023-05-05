import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/HYMqDKd/full-slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="text-black">
            <h3 className="text-center">
              <span className="p-2 bg-dark text-light d-inline-block">
                Healthy Food keeps our mind strong and clear.
              </span>
            </h3>
            <p className="p-2 bg-light d-inline-block">
              Ahmed Hossain, <small>Chef Cooking Studio</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/BBjjpnb/full-slide-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="text-black">
            <h3 className="text-center">
              <span className="p-2 bg-dark text-light d-inline-block">
                The first wealth is health.
              </span>
            </h3>
            <p className="p-2 bg-light d-inline-block">
              Nahid, <small>Chef Cooking Studio</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SQvGrDv/full-slide-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="text-black">
            <h3 className="text-center">
              <span className="p-2 bg-dark text-light d-inline-block">
                Proper nutrition, Smart Brain.
              </span>
            </h3>
            <p className="p-2 bg-light d-inline-block">
              Firoze Khan, <small>Chef Cooking Studio</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
