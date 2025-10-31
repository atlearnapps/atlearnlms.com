import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "src/assets/images/LMS/MYCourse.webp";
import slider2 from "src/assets/images/LMS/Files.webp";
// import slider3 from "src/assets/images/LMS/LMS AI-Want to Teach Better How Can Interactive -Cour3.webp";
import MainHeaderText from "src/components/New components/MainHeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import { BASE_URL, SECOND_BASE_URL } from "src/apiClients/config";

const LMSSlider = () => {
  const slides = [
    { id: 1, title: "Slider1", image: slider1 },
    { id: 2, title: "Slider2", image: slider2 },
    // { id: 3, title: "Slider3", image: slider3 },
  ];

  return (
    <div className=" relative container border rounded-lg shadow-lg mt-10px">
      {/* <SectionHeading data={courseSliderContent} center={true}/> */}

      <div className="container py-50px">
        <div className="text-center" data-aos="fade-up">
          <MainHeaderText>
            AI-Powered LMS for Educators, Schools & Institutions
          </MainHeaderText>
          <ParagraphText
            mainText={`Atlearn is one of the top virtual classroom platforms, offering advanced tools to revolutionize <a href=${BASE_URL}/lms-integration title="online learning" class="text-blue" target="_blank" rel="noopener noreferrer" >online learning</a>  and training. Here's what sets us apart:`}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div className="flex flex-col justify-center items-center">
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

          {/* about right */}
          <div className="  ">
            <div className="">
              <ul className="space-y-5 ">
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-contentColor-dark" />
                  <ParagraphText strong={"AI-Powered LMS"}>
                    {`Simplify teaching with an intuitive Learning Management
                    System featuring <b>personalized learning paths, automated grading</b>
                    , and <b>progress tracking</b>.`}
                  </ParagraphText>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-contentColor-dark" />
                  <ParagraphText strong={"Virtual Classroom for Students"}>
                    {`Engage students with real-time <b>video conferencing</b>,
                    interactive whiteboards, group discussions, and
                    collaborative tools.`}
                  </ParagraphText>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-contentColor-dark" />
                  <ParagraphText strong={"AI Tools for Education"}>
                    {`Enhance teaching efficiency with features like <b>automated
                    grading, performance analytics,</b> and <b>lesson plannin</b>g powered
                    by AI.`}
                  </ParagraphText>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-contentColor-dark" />
                  <ParagraphText
                    strong={"Online E-Learning Platforms and Course Creation"}
                  >
                    {`Atlearn supports the creation and delivery of engaging
                     <a href=${SECOND_BASE_URL}/all-courses title="online courses" class="text-blue" target="_blank" rel="noopener noreferrer" >online courses</a> and certifications, making it ideal for
                    <b>schools, corporate training</b>, and <b>individual educators</b>.`}
                  </ParagraphText>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSSlider;
