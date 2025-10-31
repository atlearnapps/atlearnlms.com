import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const ImageCardSlider = ({ data, row }) => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    const updateButtonState = () => {
      const prevButton = document.querySelector(".swiper-button-prev1");
      const nextButton = document.querySelector(".swiper-button-next1");

      if (!swiperInstance) return;

      prevButton?.classList.toggle("disabled", swiperInstance.isBeginning);
      nextButton?.classList.toggle("disabled", swiperInstance.isEnd);
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
    <div className="relative container py-4 ">
      {/* <div data-aos="fade-up" className="text-center mb-4">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blackColor dark:text-blackColor-dark">
          Test
        </h3>
      </div> */}

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
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
          768: { slidesPerView: 1, spaceBetween: 10 },
          1024: { slidesPerView: row, spaceBetween: 20 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => navigate(item?.link)}
              className="cursor-pointer relative bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-[1.07] transition duration-500 ease-in-out h-80 border border-gray-200 "
            >
              <img
                src={item.src}
                alt={item.title}
                title={item.title}
                className={`w-full object-cover ${
                  item?.title ? "h-80" : "h-auto"
                }`}
              />
              {item?.title && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </>
              )}
            </div>
            {/* <div
  onClick={() => navigate(item?.link)}
  className={`cursor-pointer relative bg-white rounded-lg overflow-hidden transform transition duration-500 ease-in-out border border-gray-200 
    ${item?.title ? "h-80 shadow-xl hover:scale-[1.07]" : "hover:scale-[1.02]"}`}
>
  <img
    src={item.src}
    alt={item.title}
    title={item.title}
    className={`w-full object-cover ${item?.title ? "h-80" : "h-auto"}`}
  />


  {item?.title && (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
    </>
  )}
</div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev1 group w-10 h-10 md:w-12 md:h-12 z-[9999] absolute top-1/2 -translate-y-1/2 left-2 md:-left-10 disabled:opacity-50 disabled:pointer-events-none">
        <span className="absolute inset-0 text-sm md:text-lg text-light-grey4 border border-light-grey4 rounded-[4px] flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
          ❮
        </span>
      </button>

      <button className="swiper-button-next1 group w-10 h-10 md:w-12 md:h-12 z-[9999] absolute top-1/2 -translate-y-1/2 right-2 md:-right-10 disabled:opacity-50 disabled:pointer-events-none">
        <span className="absolute inset-0 text-sm md:text-lg text-light-grey4 border border-light-grey4 rounded-[4px] flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
          ❯
        </span>
      </button>
    </div>
  );
};

export default ImageCardSlider;
