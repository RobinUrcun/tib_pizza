"use client";
import React from "react";
import AdviceCard from "./AdviceCard/AdviceCard";
import advicesList from "@/app/utils/advices.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Advices() {
  return (
    <section id="advices" className="advices_section">
      <div className="title_container">
        <article className="title_text_container">
          <h2>Nos clients donnent leur avis :</h2>
        </article>
        <a href="https://www.google.com/search?sca_esv=de8efa94a8e5fbd0&sca_upv=1&sxsrf=ADLYWIIXZ2LIoxv4AguuYCNCva_aHWix1Q:1726750290804&q=tib+pizza+saint+anne&uds=ADvngMhHv6I8FHjkwi3JF6y5i6pB1oK78zgsCTlza__Z1Q9S55U_3s8WfI98cUOyVJ91k8LrHh9SzbOCbzTJWL8dRivVP0HeOfkt4smtrrunoXjabw7pX0aDbdojRZlLbXxGql_urld_&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7vp1mJxY9YfPgHJ6di_yV9krD6rrEloVnctsvg1SKF7lv5ZMBbPORt8PtHeerR3hXCpHr-c%3D&sa=X&sqi=2&ved=2ahUKEwim0cuNhs-IAxW2AvsDHSJSI7wQ3PALegQIFhAE&biw=1440&bih=718&dpr=2">
          Laisser un commentaire
        </a>
      </div>
      <aside>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            750: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1150: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          centeredSlidesBounds={true}
          spaceBetween={0}
          navigation={true}
          slidesPerView={3}
        >
          {advicesList.map((advice, index) => (
            <SwiperSlide
              key={`${advice.viewerName} ${index}`}
              style={{ paddingTop: 20, paddingBottom: 20 }}
            >
              <AdviceCard props={advice} />
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
    </section>
  );
}
