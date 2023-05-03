import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


    return (
        <div className=''>
          <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/HYMqDKd/full-slide-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className='text-black'>
                            <h1>To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.</h1>
                            <h2>Buddha, philosopher and spiritual teacher</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/BBjjpnb/full-slide-2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption className='text-black'>
                    <h1>The first wealth is health.</h1>
                    <h2>Ralph Waldo Emerson, essayist, lecturer and poet</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/SQvGrDv/full-slide-3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className='text-black'>
                    <h1>Proper nutrition is the difference between feeling exhausted and getting the most out of a workout.</h1>
                    <h2>
                    Summer Sanders, sports commentator and former Olympic swimmer
                    </h2>
                    </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default Banner;