import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./TeamSlider.css";

const team = [
  {
    name: "Anastasia Jakovleva",
    role: "Senior Property Consultant",
    experience: "3 years",
    languages: "English, Russian, Lithuanian",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  {
    name: "Marques Barlavento",
    role: "Consultant",
    experience: "5 years",
    languages: "Portuguese",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  {
    name: "Taskhieva",
    role: "Russian",
    experience: "4 years",
    languages: "Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  {
    name: "Taskhieva",
    role: "Russian",
    experience: "4 years",
    languages: "Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  {
    name: "Taskhieva",
    role: "Russian",
    experience: "4 years",
    languages: "Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  {
    name: "Taskhieva",
    role: "Russian",
    experience: "4 years",
    languages: "Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  {
    name: "Taskhieva",
    role: "Russian",
    experience: "4 years",
    languages: "Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
  },
  // Add more team members as needed
];

const TeamSlider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 2,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={-500}
        navigation
        modules={[EffectCoverflow, Navigation]}
        className="team-swiper"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>Experience: {member.experience}</p>
                <p>Languages: {member.languages}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="paginations">
          <div className="pagination-btn pagination-prev">
            <svg
              data-v-4ddff550=""
              class="pointer-events-auto rotate-180 cursor-pointer"
              fill="none"
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-4ddff550=""
                fill="black"
                fill-opacity="0.7"
                height="23"
                stroke="#595858"
                width="23"
                x="0.5"
                y="0.5"
              ></rect>
              <path
                data-v-4ddff550=""
                d="M5.625 12H18.5625M18.5625 12L14.5195 7.5M18.5625 12L14.5195 16.5"
                stroke="#D3A188"
              ></path>
            </svg>
          </div>
          <div className="pagination-btn pagination-next">
            <svg
              data-v-4ddff550=""
              class="pointer-events-auto cursor-pointer"
              fill="none"
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-4ddff550=""
                fill="black"
                fill-opacity="0.7"
                height="23"
                stroke="#595858"
                width="23"
                x="0.5"
                y="0.5"
              ></rect>
              <path
                data-v-4ddff550=""
                d="M5.625 12H18.5625M18.5625 12L14.5195 7.5M18.5625 12L14.5195 16.5"
                stroke="#D3A188"
              ></path>
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TeamSlider;
