import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./../static/media/image1.jpg";
import image3 from "./../static/media/image3.jpg";
import image5 from "./../static/media/image5.png";

export default function Slideshow() {
  return (
    <div className="container">
      <AliceCarousel autoPlay infinite autoPlayInterval="3000">
        <img src={image3} alt="slider" className="sliderimg" />
        <img src={image5} alt="slider" className="sliderimg" />
        <img src={image1} alt="slider" className="sliderimg" />
      </AliceCarousel>
      <h1 className="centered">Some Text</h1>
    </div>
  );
}
