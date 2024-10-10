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
        centeredSlidesBounds={true}
        spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {main_pizza.map((pizza, index) => (
          <SwiperSlide key={`${pizza} ${index}`}>
            <div className="main_pizza">
              <Image
                src={pizza.imgUrl}
                width={350}
                height={250}
                alt={pizza.title}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 30vw"
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
