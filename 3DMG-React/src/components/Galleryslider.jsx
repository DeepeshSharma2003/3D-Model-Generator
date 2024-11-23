// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import blackpanda from "../assets/blackpanda.gif";
import cat1 from "../assets/cat1.gif";
import blackboy from "../assets/blackboy.gif";
import jedi from "../assets/jedi.gif";
import whitepanda from "../assets/whitepanda.gif";
import whitepug from "../assets/whitepug.gif";
import whitecat from "../assets/whitecat.gif";




import "/src/components/Galleryslider.css";

function GallerySlider() {
  return (
    <div className="maindiv">
      <div className="container">
        <h1 className="heading">Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
         
          className="swiper_container"
          
        >
          <SwiperSlide id="element">
            <img src={jedi} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={blackpanda} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={whitepug} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cat1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={whitepanda} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={blackboy} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={whitecat} alt="slide_image" />
          </SwiperSlide>
        

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline">
                <span>&#x2190;</span>
              </ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline">
                <span>&#x2192;</span>
              </ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default GallerySlider;
