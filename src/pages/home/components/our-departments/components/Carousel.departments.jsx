import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@hooks';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Icon } from '@components/icon';
import { BsArrowRight, BsEyeglasses } from 'react-icons/bs';
import { GiBrokenBone, GiBrain, GiStomach } from 'react-icons/gi';
import { FaHeartbeat, FaBaby } from 'react-icons/fa';

export const Carousel = ({ departments }) => {
  const icons = {
    BsEyeglasses: <BsEyeglasses color="white" size={24} />,
    GiBrokenBone: <GiBrokenBone color="white" size={24} />,
    GiBrain: <GiBrain color="white" size={24} />,
    GiStomach: <GiStomach color="white" size={24} />,
    FaHeartbeat: <FaHeartbeat color="white" size={24} />,
    FaBaby: <FaBaby color="white" size={24} />,
  };

  /*const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
      const changeWindowSize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener('resize', changeWindowSize);

      return () => window.removeEventListener('resize', changeWindowSize);
    }, []);

    return windowSize;
  };*/
  const nav = useWindowSize() <= 768 ? false : true;
  let spv = useWindowSize() > 600 ? 2 : 1;
  if (useWindowSize() > 600) spv = 2;
  if (useWindowSize() > 1000) spv = 3;

  return (
    <div className="scroll__container">
      <Swiper
        slidesPerView={spv}
        spaceBetween={20}
        loop={true}
        navigation={false}
        pagination={{
          dynamicBullets: true,
          clickable: nav,
        }}
        modules={[Navigation, Pagination]}
        grabCursor={true}
        className="mySwiper swiper__container"
      >
        {departments.map((element) => {
          let icon = icons[element.icon];
          return (
            <SwiperSlide key={element.id}>
              <article className="scroll__card">
                <Icon color="info" size="md">
                  {icon}
                </Icon>
                <div className="scroll__card-text">
                  <p className="scroll__card-title">{element.department}</p>
                  <p className="scroll__card-description">{element.description}</p>
                </div>
                <div className="more__container">
                  <p>Read more</p>
                  <span>{<BsArrowRight color="black" />}</span>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
