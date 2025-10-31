import React from "react";

import LmsBanner from "src/assets/images/home/new/Banner/LMS.svg";
// import StorylaneBanner from "src/assets/images/home/new/Banner/Group 74863.svg";
import StorylaneBanner from "src/assets/images/home/new/Banner/Group 74904.svg";

import banner from "src/assets/images/home/new/Banner/online Class.webp";
import WhiteLabelBannerImage from "src/assets/images/home/new/Banner/Group 3868.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { SECOND_BASE_URL } from "src/apiClients/config";

function Banner() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        className="ecommerce-slider"
      >
        <style jsx global>{`
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }
        `}</style>
        <SwiperSlide>
          <section>
            <div
              // style={{
              //   backgroundImage: `url(${StorylaneBanner})`,
              // }}
              className="hero machine-learning bg-darkdeep1 relative z-0 overflow-hidden py-50px "
            >
              {/* Swiper */}
              <div className="swiper ecommerce-slider">
                <div className="swiper-wrapper">
                  {/* Hero  1 */}
                  <div className="swiper-slide px-15px">
                    <div className=" container 2xl:container-secondary-md relative overflow-hidden">
                      <div
                        data-aos="fade-up"
                        className="flex flex-col lg:flex-row items-center"
                      >
                        <div>
                          <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                            White-Label with Atlearn
                          </h3>
                          <h1 className="text-3xl md:text-6xl lg:text-5xl 2xl:text-6xl leading-tight md:leading-[4.5rem] lg:leading-[4rem] text-white font-bold mb-4 tracking-wide">
                            White-Label LMS - Custom Branded eLearning
                          </h1>

                          <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                            Transform education with a fully branded, AI-powered
                            learning experience.
                          </p>
                          <div className="mt-30px">
                            <Link
                              title="Get Your White-Label LMS Today"
                              to={"/lms-integration"}
                              className=" cursor-pointer text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                            >
                              Get Your White-Label LMS Today
                            </Link>
                          </div>
                        </div>
                        <div data-aos="fade-up">
                          <div className="tilt relative mb-8">
                            {/* <img
                              loading="lazy"
                              src={WhiteLabelBannerImage}
                              alt="Storylane platform banner showcasing features"
                              title="Storylane Platform Banner"
                              className="w-[500px] h-[300px]"
                            /> */}
                            <img
                              loading="eager"
                              fetchpriority="high"
                              src={WhiteLabelBannerImage}
                              alt="Storylane platform banner showcasing features"
                              title="Storylane Platform Banner"
                              width={500}
                              height={300}
                              className="w-[500px] h-[300px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="absolute left-1/2 bottom-[15%] animate-spin-slow"
                      src="./assets/images/register/register__2.png"
                      alt="Spinning registration icon"
                      title="Spinning Registration Icon"
                    />
                    <img
                      className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
                      src="./assets/images/herobanner/herobanner__6.png"
                      alt="Graphic in hero banner showcasing platform features"
                      title="Hero Banner Graphic"
                    />
                    <img
                      className="absolute right-[5%] bottom-[15%] hidden md:block"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Decorative graphic in the hero banner"
                      title="Hero Banner Decorative Graphic"
                    />
                    <img
                      className="absolute top-[5%] left-[45%]"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Central graphic in the hero banner"
                      title="Hero Banner Central Graphic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div
              // style={{
              //   backgroundImage: `url(${LmsBanner})`,
              // }}
              className="hero machine-learning  bg-darkdeep1 relative z-0 overflow-hidden py-50px "
            >
              {/* Swiper */}
              <div className="swiper ecommerce-slider">
                <div className="swiper-wrapper">
                  {/* Hero  1 */}
                  <div className="swiper-slide px-15px">
                    <div className="container 2xl:container-secondary-md relative overflow-hidden">
                      <div
                        data-aos="fade-up"
                        className="flex flex-col lg:flex-row items-center"
                      >
                        <div className="">
                          <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                            Free AI-Integrated LMS for Smarter Course Management
                            {/* The Free Ultimate Platform for Engaging Interactive Learning */}
                          </h3>
                          <h1 className="text-whiteColor text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18  md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                            {/* The Ultimate Digital Platform For Learning */}
                            Free AI-Powered LMS - Smart Course Management for
                            Educators
                          </h1>
                          <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                            Empower teachers, track progress, and enhance
                            engagement with AI-driven learning.
                          </p>
                          <div className="mt-30px">
                            <a
                              href={`${SECOND_BASE_URL}/all-courses`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Explore Free AI LMS Features"
                              className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                            >
                              Explore Free AI LMS Features
                            </a>
                          </div>
                        </div>
                        <div data-aos="fade-up">
                          <div className="tilt relative mb-8">
                            <img
                              loading="lazy"
                              src={LmsBanner}
                              alt="LMS banner showcasing the platform features"
                              title="Learning Management System Banner"
                              className="w-[500px] h-[300px] "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="absolute left-1/2 bottom-[15%] animate-spin-slow"
                      src="./assets/images/register/register__2.png"
                      alt="A decorative spinning graphic for the registration page"
                      title="Spinning graphic"
                    />
                    <img
                      className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
                      src="./assets/images/herobanner/herobanner__6.png"
                      alt="Dynamic element of the hero banner animation"
                      title="Hero banner animation graphic"
                    />
                    <img
                      className="absolute right-[5%] bottom-[15%] hidden md:block"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Decorative element in the hero banner section"
                      title="Hero banner decorative graphic"
                    />
                    <img
                      className="absolute top-[5%] left-[45%]"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Central decorative graphic for the hero banner"
                      title="Hero banner central graphic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div
              // style={{
              //   backgroundImage: `url(${banner})`,
              // }}
              className="hero machine-learning  bg-darkdeep1 relative z-0 overflow-hidden py-50px "
            >
              {/* Swiper */}
              <div className="swiper ecommerce-slider">
                <div className="swiper-wrapper">
                  {/* Hero  1 */}
                  <div className="swiper-slide px-15px">
                    <div className="container 2xl:container-secondary-md relative overflow-hidden">
                      <div
                        data-aos="fade-up"
                        className="flex flex-col lg:flex-row items-center"
                      >
                        <div className="">
                          <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                            JOIN OUR ONLINE CLASS
                          </h3>
                          <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-whiteColor md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                            Teach Online for Free - Interactive Virtual
                            Classroom
                          </h1>
                          <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                            Boost engagement with Atlearn's easy-to-use online
                            classroom.
                          </p>
                          <div className="mt-30px">
                            <a
                              href={`${SECOND_BASE_URL}/join-meetings`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title=" Join Free Online Classes Now"
                              className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                            >
                              Join Free Online Classes Now
                            </a>
                          </div>
                        </div>
                        <div data-aos="fade-up">
                          <div className="tilt relative mb-8">
                            <img
                              loading="lazy"
                              src={banner}
                              alt="Banner"
                              title="Banner"
                              className="w-[500px] h-[300px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="absolute left-1/2 bottom-[15%] animate-spin-slow"
                      src="./assets/images/register/register__2.png"
                      alt=" Registration icon"
                      title="Registration Icon"
                    />
                    <img
                      className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
                      src="./assets/images/herobanner/herobanner__6.png"
                      alt="Spinning icon for registration"
                      title="Spinning Registration Icon"
                    />
                    <img
                      className="absolute right-[5%] bottom-[15%] hidden md:block"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Decorative graphic in the hero banner"
                      title="Hero Banner Decorative Graphic"
                    />
                    <img
                      className="absolute top-[5%] left-[45%]"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Central graphic in the hero banner"
                      title="Hero Banner Central Graphic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div
              // style={{
              //   backgroundImage: `url(${StorylaneBanner})`,
              // }}
              className="hero machine-learning bg-darkdeep1 relative z-0 overflow-hidden py-50px "
            >
              {/* Swiper */}
              <div className="swiper ecommerce-slider">
                <div className="swiper-wrapper">
                  {/* Hero  1 */}
                  <div className="swiper-slide px-15px">
                    <div className=" container 2xl:container-secondary-md relative overflow-hidden">
                      <div
                        data-aos="fade-up"
                        className="flex flex-col lg:flex-row items-center"
                      >
                        <div className="">
                          <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                            Story Writing Platform for Primary Kids
                          </h3>
                          <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-whiteColor md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                            Boost your child's creativity and skills 
                          </h1>
                          <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                            Inspire young minds with Storylane—where kids write,
                            create, and share stories.
                          </p>
                          <div className="mt-30px">
                            <a
                              title="Start Writing for Free"
                              href="https://app.storylane.in/login"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                            >
                              Start Writing for Free
                            </a>
                          </div>
                        </div>
                        <div data-aos="fade-up">
                          <div className="tilt relative mb-8">
                            <img
                              loading="lazy"
                              src={StorylaneBanner}
                              alt="Storylane platform banner showcasing features"
                              title="Storylane Platform Banner"
                              className="w-[500px] h-[300px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="absolute left-1/2 bottom-[15%] animate-spin-slow"
                      src="./assets/images/register/register__2.png"
                      alt="Spinning registration icon"
                      title="Spinning Registration Icon"
                    />
                    <img
                      className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
                      src="./assets/images/herobanner/herobanner__6.png"
                      alt="Graphic in hero banner showcasing platform features"
                      title="Hero Banner Graphic"
                    />
                    <img
                      className="absolute right-[5%] bottom-[15%] hidden md:block"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Decorative graphic in the hero banner"
                      title="Hero Banner Decorative Graphic"
                    />
                    <img
                      className="absolute top-[5%] left-[45%]"
                      src="./assets/images/herobanner/herobanner__7.png"
                      alt="Central graphic in the hero banner"
                      title="Hero Banner Central Graphic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
