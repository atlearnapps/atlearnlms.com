import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import youtube from "src/assets/images/home/video/youtube1.mp4";
import facebook from "src/assets/images/home/video/facebook1.mp4";
import insta from "src/assets/images/home/video/instagram1.mp4";
import Pinterest from "src/assets/images/home/video/Pinterest1.mp4";
import linkedin from "src/assets/images/home/video/linkedin1.mp4";
import { useSocialNavigate } from "src/utils/Navigation/useSocialNavigate";
const SwiperWithTailwindNavigation = () => {
  const handleSocialNavigate = useSocialNavigate();
  const videos = [
    {
      id: 1,
      src: youtube,
      title: "Atlearn youtube",
      link: "https://www.youtube.com/@Atlearn_In",
    },
    {
      id: 2,
      src: facebook,
      title: "Atlearn facebook",
      link: "https://www.facebook.com/Atlearn.in",
    },
    {
      id: 3,
      src: insta,
      title: "Atlearn insta",
      link: "https://www.instagram.com/atlearn_in/",
    },
    {
      id: 4,
      src: Pinterest,
      title: "Atlearn Pinterest",
      link: "https://in.pinterest.com/atlearnlms/",
    },
    {
      id: 5,
      src: linkedin,
      title: "Atlearn linkedin",
      link: "https://www.linkedin.com/company/atlearn",
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
        <span className="text-size-15 font-semibold text-secondaryColor inline-block uppercase mb-[13px]">
          Follow Us
        </span>
        <h3 className="text-3xl md:text-size-35 lg:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark">
        Connect With Us on Social Media
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
        {videos.map((video) => (
          <SwiperSlide key={video.id} className="flex justify-center">
            <div
              className="p-4 cursor-pointer rounded-lg shadow-lg bg-white border border-light-grey4 "
              onClick={() => handleSocialNavigate(video?.link)}
            >
              <video
                title={video?.title}
                autoPlay
                muted
                loop
                className="w-full h-48 md:h-64 lg:h-80 rounded-lg "
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div>
        <button className="swiper-button-prev1 group w-12 h-12 text-center z-[9999] absolute top-1/2 -left-10 disabled:opacity-50 disabled:pointer-events-none">
          <span className="absolute inset-0 text-lg text-light-grey4 border border-light-grey4 rounded-[4px] flex items-center justify-center transition-all opacity-100 visible group-hover:bg-primary group-hover:text-white">
            ❮
          </span>
        </button>
        <button className="swiper-button-next1 group w-12 h-12 text-center z-[9999] absolute top-1/2 -right-10 disabled:opacity-50 disabled:pointer-events-none">
          <span className="absolute inset-0 text-lg text-light-grey4 border border-light-grey4 rounded-[4px] flex items-center justify-center transition-all opacity-100 visible group-hover:bg-primary group-hover:text-white">
            ❯
          </span>
        </button>
      </div> */}

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

export default SwiperWithTailwindNavigation;
