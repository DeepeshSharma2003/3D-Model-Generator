// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";



import slide_image_1 from "/src/assets/Galleryimages/img_1.jpg";
import slide_image_2 from "/src/assets/Galleryimages/img_2.jpg";
import slide_image_3 from "/src/assets/Galleryimages/img_3.jpg";
import slide_image_4 from "/src/assets/Galleryimages/img_4.jpg";
import slide_image_5 from "/src/assets/Galleryimages/img_5.jpg";
import slide_image_6 from "/src/assets/Galleryimages/img_6.jpg";
import slide_image_7 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_8 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_9 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_10 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_11 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_12 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_13 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_14 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_15 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_16 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_17 from "/src/assets/Galleryimages/img_7.jpg";
import slide_image_18 from "/src/assets/Galleryimages/img_7.jpg";

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
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_8} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_10} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_11} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_12} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_13} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_14} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_15} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_16} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_17} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_18} alt="slide_image" />
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
