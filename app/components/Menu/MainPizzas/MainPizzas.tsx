"use client";
import React from "react";
import main_pizza from "@/app/utils/main_pizzas.json";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function MainPizzas() {
  return (
    <article className="main_pizzas_list">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {main_pizza.map((pizza, index) => (
          <SwiperSlide key={`${pizza} ${index}`}>
            <div className="main_pizza">
              <Image
                src={pizza.imgUrl}
                width={pizza.width}
                height={pizza.height}
                alt={pizza.alt}
              />
              <div className="filter"></div>
              <h3>{pizza.title}</h3>
              <div className="image_point">
                <div className="image_point_center">
                  <Image
                    src={"/assets/first_section/arrow.svg"}
                    width={15}
                    height={15}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
