import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img from '../../assets/chat.png'

const testimonials = [
    {
        message: "The personalized meal plans and workout routines are easy to follow and have helped me lose 15 pounds in just two months. Highly recommended!",
        name: "Sarah K.",
        location: "USA",
    },
    {
        message: "As a busy mom, finding time for myself is challenging. This app makes it possible with quick and effective exercises that fit into my schedule.",
        name: "Emily R.",
        location: "UK",
    },
    {
        message: "The holistic approach to health in this app is fantastic. It’s not just about losing weight but also about improving overall well-being.",
        name: "Jessica L.",
        location: "Australia",
    },
    {
        message: "As a busy mom, finding time for myself is challenging. This app makes it possible with quick and effective exercises that fit into my schedule.",
        name: "Maria G.",
        location: "Spain",
    },
    {
        message: "As a busy mom, finding time for myself is challenging. This app makes it possible with quick and effective exercises that fit into my schedule.",
        name: "Hannah P.",
        location: "Canada",
    },
    {
        message: "The diet and exercise plans in this app are so effective. This app makes it possible with quick and effective exercises that fit into my schedule.",
        name: "Rachel T.",
        location: "Canada",
    },
];

const TestimonialSection = () => {
    return (
        <section className="section section-testimonial">
            <div className="container">
                <h2 className="section-testimonial__heading common-heading">From Our Visitors</h2>
            </div>

            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                className="swiper container section-testimonial__swiper-container"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="swiper-slide section-testimonial__slide">
                        <div className="section-testimonial__client swiper-client">
                            <figure className="section-testimonial__figure">
                                <img loading="lazy" src={img} alt="" className="section-testimonial__img" />
                            </figure>
                        </div>
                        <div className="section-testimonial__message swiper-client-msg">
                            <p>{testimonial.message}</p>
                        </div>
                        <div className="section-testimonial__client-details client-data-details">
                            <p>{testimonial.name}</p>
                            <p>{testimonial.location}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialSection;