import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import book from "./img/book.png";
import classes from "./Slider.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Slider() {
  return (
    <div className={classes.slider_container}>
      <Carousel className={classes.arrow}
        nextIcon={<BsChevronRight className={classes.custom_carousel_arrow}/>} 
        prevIcon={<BsChevronLeft className={classes.custom_carousel_arrow}/>}
      >
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            style={{ height: "330px" }}
            src={book}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 style={{color: "black"}}>2006</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ height: "330px" }}
            className="d-block w-100"
            src={book}
            alt="Image Two"
          />
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
