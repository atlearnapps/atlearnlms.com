import React from "react";

import LMSDashboard from "src/assets/images/home/new/T. Dashboard.webp";
import slider2 from "src/assets/images/home/new/virtual meeting.webp";
import slider3 from "src/assets/images/home/new/Story-Writing Platform.webp";
import slider4 from "src/assets/images/home/new/AI Solutions for Teachers.webp";

import MainHeaderText from "src/components/New components/MainHeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import { BASE_URL, SECOND_BASE_URL } from "src/apiClients/config";
// import Tilt from "src/components/JS/VanillaTilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = () => {
  const slides = [
    { id: 1, title: "Slider1", image: LMSDashboard },
    { id: 2, title: "Slider2", image: slider2 },
    { id: 3, title: "Slider3", image: slider3 },
    { id: 4, title: "Slider4", image: slider4 },
  ];
  return (
    <div className=" relative container border rounded-lg shadow-lg mt-10px bg-white dark:dark:bg-lightGrey10-dark">
      <div className="container py-50px">
        <div className="text-center" data-aos="fade-up">
          <MainHeaderText>
             AI-Powered eLearning Solutions
          </MainHeaderText>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div className="flex flex-col justify-center items-center">
            <div data-aos="fade-up" className="">
              <ul className="space-y-5">
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-contentColor-dark" />
                  <ParagraphText strong={"AI Learning Management System"}>
                    {`Enhance your teaching experience with an <strong>intelligent
                    Learning Management System</strong> that offers tailored learning
                    experiences, automation features, and AI-enhanced tools.`}
                  </ParagraphText>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-contentColor-dark" />
                  <ParagraphText strong={"Virtual Classrooms"}>
                    {`Foster <strong>real-time collaboration</strong> and engaging <a href=${SECOND_BASE_URL}/join-meetings title="join-meetings" class="text-blue" target="_blank" rel="noopener noreferrer" >online instruction.</a>`}
                  </ParagraphText>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-contentColor-dark" />
                  <ParagraphText strong={"AI Solutions for Teachers"}>
                    {`Utilize <strong>AI-driven grading</strong>, analytics, and <strong>lesson planning</strong> to
                    create a more effective learning environment.`}
                  </ParagraphText>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-contentColor-dark" />
                  <ParagraphText strong={"Story-Writing Platform"}>
                    {`A <a href=${BASE_URL}/kids-learning-platform title="kids-learning-platform" class="text-blue" target="_blank" rel="noopener noreferrer" >platform designed for children</a>  that ignites their
                    imagination and improves their <strong>writing abilities</strong>.`}
                  </ParagraphText>
                </li>
              </ul>
            </div>
          </div>

          {/* about right */}
          <div className="flex justify-center items-center shadow-xl rounded-lg ">
            {/* <div data-aos="fade-up">
              <div className="tilt">
                <Tilt>
                  <img
                    // className="w-full   border rounded-lg2 shadow-lg "
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                    src={LMSDashboard}
                    alt={"Atlearn's AI-Powered eLearning Solutions"}
                    title={"Atlearn's AI-Powered eLearning Solutions"}
                  />
                </Tilt>
              </div>
            </div> */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              // pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              // loop={true}
              // spaceBetween={30}
              // slidesPerView={2}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 1, spaceBetween: 15 },
                1024: { slidesPerView: 1, spaceBetween: 20 },
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      title={slide.title}
                      className="w-full h-full  rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
