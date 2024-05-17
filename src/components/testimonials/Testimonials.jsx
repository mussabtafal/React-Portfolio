import React from "react";
import "../testimonials/testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Mahmoud Khweis</h5>
          <small className="client__review">
            Mussab is up to any challenge, and he deserves the best, he achieved
            a remarkable project in a short amount of time.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
          </div>
          <h5 className="client__name">Rasha Bazbaz</h5>
          <small className="client__review">
            Being a trainer, mentor or team leader is a great opportunity to
            meet great people with great potential ... Mussab A. Taffal is a
            great example with his nice attitude and ability to learn
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
