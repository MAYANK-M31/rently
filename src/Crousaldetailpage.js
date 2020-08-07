
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import room from "./3.jpeg";
import house from "./house.jpg"
import house3 from "./house3.jpg"
import "./Crousaldetailpage.css"


const ControlledCarousel=(props)=> {
  
    return (
      <Carousel className="imagecarousal" >
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={props.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 " 
            src="https://nestaway-houses.akamaized.net/uploads/webp/thumb_large_95466e16-d14c-4c64-9098-f2cda0d31d5d.webp"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nestaway-houses.akamaized.net/uploads/webp/thumb_large_bd653359-5a65-4a1e-bf20-8d47f61cfeb7.webp"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  


export default  ControlledCarousel;