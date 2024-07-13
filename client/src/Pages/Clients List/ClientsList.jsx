import React from "react";
import "./ClientsList.css";
import Slider from "react-slick";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";

const ClientsList = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <IoMdArrowDroprightCircle size={32} color="#2b802d" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <IoMdArrowDropleftCircle size={32} color="#2b802d" />
      </div>
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients-list">
      <div className="clients-list__wrapper">
        <div className="clients-list__header">
          <h2 className="clients-list__title">
            List of our distinguished clients
          </h2>
        </div>
        <div className="clients-list__slider">
          <Slider {...settings}>
            <div className="clients-list__item">
              <h6 className="clients-list__name">Mr John Doe</h6>
              <p className="clients-list__role">Producer</p>
            </div>
            <div className="clients-list__item">
              <h6 className="clients-list__name">Mr James Smith</h6>
              <p className="clients-list__role">Writer</p>
            </div>
            <div className="clients-list__item">
              <h6 className="clients-list__name">Mr Robert Johnson</h6>
              <p className="clients-list__role">Director</p>
            </div>
          
            <div className="clients-list__item">
              <h6 className="clients-list__name">Mr David Brown</h6>
              <p className="clients-list__role">Editor</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientsList;
