import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopItems.css'
import img from '../../Images/pic2.jpg';
import img1 from '../../Images/pic1.jpg';
import img2 from '../../Images/hehehe.jpg';


const TopItems = () => {
    return (
        <div className="top-items h-50">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="carousel-text">Wanna Learn Music?</h3>
      <p className="carousel-para">Music can heal you mentally and physically</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="carousel-text">Grab Your Favourite Instrumental Courses</h3>
      <p className="carousel-para">We Teach Our Students from scratch</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="carousel-text">Lost Your path?</h3>
      <p className="carousel-para">Here is your way to music</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default TopItems;