import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaStar, FaRegStar } from "react-icons/fa";
import 'swiper/css';

const Hero = () => {
  return (
    <section className="hero-section">

      {/* TEXT AREA */}
      <div className="hero-text">
        <h1>Smart Queue Management System</h1>
        <p>Manage queues, reduce waiting time and improve customer experience.</p>
      </div>

      {/* CONTENT AREA */}
      <div className="hero-content">

        {/* LEFT: SLIDER */}
        <div className="hero-box">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >

            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800" alt="queue system 1" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" alt="queue system 2" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800" alt="queue system 1" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" alt="queue system 2" />
            </SwiperSlide>

          </Swiper>

        </div>

        {/* RIGHT: VIDEO */}
        <div className="hero-box video-box">
          <video
            width="100%"
            height="320"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/QCS _ Queue Management System App - Tutorial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </section>
  );
};

export default Hero;