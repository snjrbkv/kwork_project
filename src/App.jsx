import React, { useState } from "react";
import TeamSlider from "./components/TeamSlider";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./components/TeamSlider.css";
const App = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] =
    useState("Specialization");
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [modalData, setModalData] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSelect = (type, value) => {
    if (type === "specialization") {
      setSelectedSpecialization(value);
    } else if (type === "language") {
      setSelectedLanguage(value);
    }
    setOpenDropdown(null);
  };

  const resetSelections = () => {
    setSelectedSpecialization("Specialization");
    setSelectedLanguage("Language");
    setOpenDropdown(null);
  };

  const openModal = (member) => {
    setModalData(member);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const team = [
    {
      name: "Anastasia Jakovleva",
      role: "Senior Property Consultant",
      experience: "3 years",
      languages: "English, Russian, Lithuanian",
      image: "https://fnst.axflare.com/img/team/JPEG/WYTBkMLuDh.jpg",
      description:
        "Anastasia is a top consultant with strong communication skills and a deep understanding of Dubai Marina properties.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      link: "https://example.com/profile/anastasia",
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
  ];
  // Add more team members as needed

  const specializations = [
    "Primary Market",
    "Secondary Market",
    "Secondary market – Dubai Marina, Palm Jumeirah",
    "Secondary Market – Palm Jumeirah",
    "Secondary Market – Palm Jumeirah",
    "Secondary Market – Palm Jumeirah",
    "Secondary Market – Palm Jumeirah",
    "Secondary Market – Palm Jumeirah",
  ];

  const languages = [
    "All",
    "English",
    "English",
    "English",
    "Russian",
    "Arabic",
    "Czech",
  ];

  return (
    <div>
      <div className="container">
        <div className="info">
          <h1 className="info-title">FIND YOUR PARTNER</h1>
          <p className="info-text">
            Our team is highly experienced and knowledgeable across all aspects
            of the real estate industry. We are ready to answer your questions
            in over 30 languages. Find the perfect match for your needs and
            embark on your real estate journey with AX professionals
          </p>
          <div className="drop-down-btns">
            <div
              className="drop-down-btn"
              onClick={() => toggleDropdown("specialization")}
            >
              {selectedSpecialization}
              <span
                className={`arrow ${
                  openDropdown === "specialization" ? "rotate" : ""
                }`}
              >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0.5L5 4.5L9 0.5" stroke="#A7A7A7" />
                </svg>
              </span>
            </div>

            <div
              className="drop-down-btn"
              onClick={() => toggleDropdown("language")}
            >
              {selectedLanguage}
              <span
                className={`arrow ${
                  openDropdown === "language" ? "rotate" : ""
                }`}
              >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0.5L5 4.5L9 0.5" stroke="#A7A7A7" />
                </svg>
              </span>
            </div>

            <div className="reset" onClick={resetSelections}>
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.92 4.434L3.434 8.789L7.789 6.275"
                  stroke="#A7A7A7"
                />
                <path
                  d="M11.694 16.849C16.112 16.849 19.694 13.267 19.694 8.849C19.694 4.431 16.112 0.849 11.694 0.849C7.276 0.849 3.694 4.431 3.694 8.849"
                  stroke="#A7A7A7"
                />
              </svg>
            </div>
          </div>

          <div className="drop-downs">
            <div
              className={`dropdown-wrapper ${
                openDropdown === "specialization" ? "open" : ""
              }`}
            >
              <div className="dorp-down">
                {specializations.map((item, idx) => (
                  <div
                    key={idx}
                    className="drop-down__drops"
                    onClick={() => handleSelect("specialization", item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`dropdown-wrapper ${
                openDropdown === "language" ? "open" : ""
              }`}
            >
              <div className="dorp-down">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="drop-down__drops"
                    onClick={() => handleSelect("language", lang)}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="search">
            {selectedSpecialization !== "Specialization" ||
            selectedLanguage !== "Language"
              ? "Search"
              : "Show All"}
          </button>
        </div>
        <div className="slider-cards">
          <div className="slider-wrapper">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: ".pagination-next",
                prevEl: ".pagination-prev",
              }}
              modules={[EffectCoverflow, Navigation]}
              className="team-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 100,
                    depth: 100,
                    modifier: 1,
                  },
                  spaceBetween: -100,
                },
                768: {
                  slidesPerView: 1,
                  coverflowEffect: {
                    rotate: 5,
                    stretch: 200,
                    depth: 100,
                    modifier: 1,
                  },
                  spaceBetween: -200,
                },
                1024: {
                  slidesPerView: 1,
                  coverflowEffect: {
                    rotate: 10,
                    stretch: 400,
                    depth: 100,
                    modifier: 1,
                  },
                  spaceBetween: -400,
                },
              }}
            >
              {team.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="team-card" onClick={() => openModal(member)}>
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
            </Swiper>
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
          </div>
        </div>
      </div>
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={modalData.image}
              alt={modalData.name}
              className="modal-photo"
            />
            <h2>{modalData.name}</h2>
            <p>
              <strong>Role:</strong> {modalData.role}
            </p>
            <p>
              <strong>Experience:</strong> {modalData.experience}
            </p>
            <p>
              <strong>Languages:</strong> {modalData.languages}
            </p>
            <p className="modal-description">{modalData.description}</p>
            <a href={modalData.link} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
            <video controls width="100%">
              <source src={modalData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
