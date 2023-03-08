import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/scss/navigation';
import 'swiper/css/pagination';

import './testimonials.pages.scss';
import { Navigation, Autoplay, Pagination } from 'swiper';

export const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="testimonials__container">
      <div className="testimonials__text">
        <p>Our testimonials</p>
        <h3>What patients say about us</h3>
      </div>
      <Swiper
        loop={true}
        navigation={false}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper swiper__container"
      >
        <SwiperSlide>
          <article className="testimonial">
            <p>
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam consequuntur possimus rem ea, odit
              ratione doloribus tenetur fuga porro sapiente reprehenderit ullam illum tempore id repudiandae vitae?
              Enim, qui temporibus! Cum corporism."
            </p>

            <div className="testimonial__name">
              <p className="testimonial__fullname">Monroe bond</p>
              <p>Manager</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <p>
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam consequuntur possimus rem ea, odit
              ratione doloribus tenetur fuga porro sapiente reprehenderit ullam illum tempore id repudiandae vitae?
              Enim, qui temporibus! Cum corporism."
            </p>
            <div className="testimonial__name">
              <p className="testimonial__fullname">Jhon Doe</p>
              <p>Manager</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <p>
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam consequuntur possimus rem ea, odit
              ratione doloribus tenetur fuga porro sapiente reprehenderit ullam illum tempore id repudiandae vitae?
              Enim, qui temporibus! Cum corporism."
            </p>
            <div className="testimonial__name">
              <p className="testimonial__fullname">Isabella Fernadez</p>
              <p>Manager</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <p className="testimonial__fullname">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam consequuntur possimus rem ea, odit
              ratione doloribus tenetur fuga porro sapiente reprehenderit ullam illum tempore id repudiandae vitae?
              Enim, qui temporibus! Cum corporism."
            </p>
            <div className="testimonial__name">
              <p className="testimonial__fullname">Jhon Smith</p>
              <p>Manager</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
