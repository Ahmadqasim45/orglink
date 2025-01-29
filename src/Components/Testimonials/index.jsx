import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './testimonial.css';
// Import Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSection = () => {
  return (
    <div className="set-alignment-container">

    <div className="testimonial-section">
      <div className="container-fluid">
        <div className="gallery__header">
          <div className="gallery__subtitle">Our Honourable Testimonial</div>
          <h2 className="gallery__title">Healing Lives Through Compassion</h2>
        </div>
        <div className="row align-items-center">
          {/* Testimonial Swiper */}
          <div className="col-lg-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
            >
              <SwiperSlide>
                <div className="quote-icon">"</div>
                <h2 className="testimonial-heading">
                  Together, we can change lives for the better
                </h2>
                <p className="testimonial-text">
                  Sollicitudin vitae diam senectus molestie cras in gravida
                  egestas ac. Tortor condimentum suspendisse duis et velit
                  donec turpis interdum elit. Tincidunt ultrices eu vitae ut
                  velit purus urna in.
                </p>
                <div className="author-name">George Henry</div>
                <div className="author-title">Donor</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="quote-icon">"</div>
                <h2 className="testimonial-heading">
                  Making a difference every day
                </h2>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <div className="author-name">Sarah Johnson</div>
                <div className="author-title">Volunteer</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="quote-icon">"</div>
                <h2 className="testimonial-heading">
                  Healing Lives Through Compassion
                </h2>
                <p className="testimonial-text">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="author-name">Emily Carter</div>
                <div className="author-title">Recipient</div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Video Placeholder */}
          <div className="col-lg-6">
            <div className="video-placeholder">
              <a id="play-video" className="video-play-button" href="#">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSection;
