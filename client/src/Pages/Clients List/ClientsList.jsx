import React from 'react';
import './ClientsList.css';
import Slider from "react-slick";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";


const ClientsList = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick}
            >
                <IoMdArrowDroprightCircle size={32} color='#2b802d' />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block",}}
                onClick={onClick}

            >
                <IoMdArrowDropleftCircle  size={32} color='#2b802d'/>
            </div>
        );
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 300,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
        };
    return (
        <div className='clients-list'>
            <div className='clients-list1'>
                <div className='clients-list2'>
                    <h2>List of our distinguished clients:</h2>
                </div>
                <div className='clients-list3'>
                    <Slider {...settings}>
                        <div className='clients-list4'>
                            <h6>Mr Prabhakar Sharan1</h6>
                            <p>Actor/Director</p>
                        </div>
                        <div className='clients-list4'>
                            <h6>Mr Prabhakar Sharan1</h6>
                            <p>Actor/Director</p>
                        </div>
                        <div className='clients-list4'>
                            <h6>Mr Prabhakar Sharan1</h6>
                            <p>Actor/Director</p>
                        </div>
                        <div className='clients-list4'>
                            <h6>Mr Prabhakar Sharan1</h6>
                            <p>Actor/Director</p>
                        </div>
                        <div className='clients-list4'>
                            <h6>Mr Prabhakar Sharan1</h6>
                            <p>Actor/Director</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ClientsList;
