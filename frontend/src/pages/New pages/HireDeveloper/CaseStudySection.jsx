import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useSocialNavigate } from "src/utils/Navigation/useSocialNavigate";
import ONLINE_CLASSROOM_image from "src/assets/images/CaseStudies/New-Macbook-Pro-Mockup-Front-View-4.webp";
import Student_conselling_image from "src/assets/images/CaseStudies/Student-conselling-left-img.webp";
import Online_student_image from "src/assets/images/CaseStudies/Online-student-management-portal.webp";
import Teach_Courses_Live_image from "src/assets/images/CaseStudies/Teach_Courses_Live..webp";
import Online_Classroom_image from "src/assets/images/CaseStudies/Online_Classroom.webp";
import content_creator_image from "src/assets/images/CaseStudies/content-creator.webp";
import { useNavigate } from "react-router-dom";
const CaseStudySection = () => {
  const handleSocialNavigate = useSocialNavigate();
  const navigate = useNavigate();
  const Image = [
    {
      id: 1,
      src: ONLINE_CLASSROOM_image,
      title: "Atlearn Online Classroom",
      link: "/case-studies/atlearn-online-classRoom",
    },
    {
      id: 2,
      src: Student_conselling_image,
      title: "Student Counselling Portal",
      link: "/case-studies/student-counselling-portal",
    },
    {
      id: 3,
      src: Online_student_image,
      title: "Online student management portal",
      link: "/case-studies/online-student-management-portal",
    },
    {
      id: 4,
      src: Teach_Courses_Live_image,
      title: "Teach Courses Live",
      link: "/case-studies/teach-courses-live",
    },
    {
      id: 5,
      src: Online_Classroom_image,
      title: "Atlearn (Online Classroom) Mobile App",
      link: "/case-studies/atlearn-mobile-app",
    },
    {
      id: 6,
      src: content_creator_image,
      title: "Course Management",
      link: "/case-studies/course-management",
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const updateButtonState = () => {
      const prevButton = document.querySelector(".swiper-button-prev1");
      const nextButton = document.querySelector(".swiper-button-next1");

      if (swiperInstance.isBeginning) {
        prevButton.classList.add("disabled");
      } else {
        prevButton.classList.remove("disabled");
      }

      if (swiperInstance.isEnd) {
        nextButton.classList.add("disabled");
      } else {
        nextButton.classList.remove("disabled");
      }
    };

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateButtonState);
      swiperInstance.on("init", updateButtonState);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateButtonState);
        swiperInstance.off("init", updateButtonState);
      }
    };
  }, []);

  return (
    <div className=" relative container py-10 ">
      <div data-aos="fade-up" className="text-center mb-15px">
        {/* <span className="text-size-15 font-semibold text-secondaryColor inline-block uppercase mb-[13px]">
          Social Media
        </span> */}
        <h3 className="text-3xl md:text-size-35 lg:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark">
          Case Studies.
        </h3>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // Default for mobile view, can be adjusted in breakpoints
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {Image.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              onClick={() => navigate(image?.link)}
              className="cursor-pointer relative bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-[1.07] transition duration-500 ease-in-out h-80 border border-gray-200 "
            >
              <img
                src={image.src}
                alt={image.title}
                title={image.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] p-3 rounded-lg bg-white/20 backdrop-blur-md shadow-md text-center">
        <h3 className="text-lg font-semibold text-white">{image.title}</h3>
      </div> */}

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="">
        {/* Left Navigation Button */}
        <button className="swiper-button-prev1 group w-10 h-10 md:w-12 md:h-12 text-center z-[9999] absolute top-1/2 -translate-y-1/2 left-2 md:-left-10 disabled:opacity-50 disabled:pointer-events-none">
          <span className="absolute inset-0 text-sm md:text-lg text-light-grey4 border border-light-grey4 rounded-[4px] flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
            ❮
          </span>
        </button>

        {/* Right Navigation Button */}
        <button className="swiper-button-next1 group w-10 h-10 md:w-12 md:h-12 text-center z-[9999] absolute top-1/2 -translate-y-1/2 right-2 md:-right-10 disabled:opacity-50 disabled:pointer-events-none">
          <span className="absolute inset-0 text-sm md:text-lg text-light-grey4 border border-light-grey4 rounded-[4px] flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
            ❯
          </span>
        </button>
      </div>
    </div>
  );
};

export default CaseStudySection;
