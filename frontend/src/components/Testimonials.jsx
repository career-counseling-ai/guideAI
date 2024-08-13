import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
// import { list } from './data';
import { stories } from '../utils/storydata';

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // fade: true,
    autoplay: false,
    speed: 1000,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className=" p-20 ">
      <h1 className="text-textColor  text-4xl  text-center">Testimonials</h1>

      <section className="slick-container mt-[-40]">
        <Slider {...settings}>
          {stories.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            return (
              <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h5 className="name">{name}</h5>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
              </article>
            );
          })}
        </Slider>
      </section>
    </div>
  );
}

export default Testimonials;
