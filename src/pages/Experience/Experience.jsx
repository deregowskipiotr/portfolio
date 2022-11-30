import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/scss";

import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import './data';
import './Experience.scss';
import { data } from './data.js';

SwiperCore.use([EffectCoverflow, Pagination, Navigation])

function Experience() {
  
    return (
      <div className="experience">
        <div className="experience__title">
          <h1>Doświadczenie</h1>
          <p>
            Kilka słów odnośnie mojego dotychczasowego doświadczenia, <br />
            oraz ukończonych kursów. <br />
          </p>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          pagination={true}
          modules={[Pagination]}
          slidesPerView={"auto"}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
            
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper__container">
                <div className="swiper__image">
                  <img src={item.image} alt="" />
                </div>
                <div className="swiper__title">{item.title}</div>
                <div className="swiper__info">{item.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Experience;