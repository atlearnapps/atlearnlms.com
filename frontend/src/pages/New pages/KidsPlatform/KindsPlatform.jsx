import React, { useState } from "react";
import PrimaryButton from "src/components/New components/PrimaryButton";
import OverviewSection from "./OverviewSection";
//images
import MainGif from "src/assets/images/Kids-platforms/kids platform banner_new.gif";
import cultivates_creativity_image from "src/assets/images/Kids-platforms/cultivates-creativity.svg";
import enhances_learning_enjoyment_icon from "src/assets/images/Kids-platforms/enhances-learning-enjoyment.svg";
import nurtures_aspiring_writers_icon from "src/assets/images/Kids-platforms/nurtures-aspiring-writers.svg";
import improves_writing_proficiency_icon from "src/assets/images/Kids-platforms/improves-writing-proficiency.svg";
import Write_StoriesWrite_Stories_image from "src/assets/images/Kids-platforms/Kids_page.gif";
import Voice_To_Text_image from "src/assets/images/Kids-platforms/Voice_To_Text_image.gif";
import Dynamic_Dashboard_image from "src/assets/images/Kids-platforms/Dynamic_Dashboard.gif";
import Class_management_image from "src/assets/images/Kids-platforms/Untitled-design-2.gif";
import HowItWorks from "./HowItWorks";
import { Link } from "react-router-dom";
import { useSocialNavigate } from "src/utils/Navigation/useSocialNavigate";
import { Helmet } from "react-helmet";
// import SplitSection from "src/components/New components/SplitSection";
import {
  kidsAboutSection,
  kidsCTA,
  kidsPlatformCTAForms,
} from "src/Page_Content/KidsPlatform";
import Testimonials from "src/components/New components/Testimonials/Testimonials";
import CTAForms from "src/components/New components/CTAForms";
import shareImage from "src/assets/images/home/atlearn_kids_platform.png";
import ParagraphText from "src/components/New components/ParagraphText";
import { useHandleNavigate } from "src/utils/Navigation/useHandleNavigate";
import CTASection from "src/components/New components/CTASection";
import VideoSection from "src/components/New components/VideoSection";
import { BASE_URL } from "src/apiClients/config";
import StorylaneDemoModal from "src/components/New components/Modal/StorylaneDemoModal";

function KindsPlatform() {
  const handleSocialNavigate = useSocialNavigate();
  const handleNavigate = useHandleNavigate();
   const [demoPopupOpen, setDemoPopupOpen] = useState(false);
     const handleFreeDemoClose = () => {
    setDemoPopupOpen(false);
  };
  return (
    <div>
      <Helmet>
        <title>Creative Story Writing with Fun Writing Prompts</title>
        <meta
          name="description"
          content="Boost creativity with Atlearn's story writing platform. Explore engaging creative writing activities and fun writing prompts for young writers."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/kids-learning-platform`}
        />

        <meta
          property="og:title"
          content="Storylane: Creative Story Writing for Kids | Atlearn"
        />
        <meta
          property="og:description"
          content="Storylane fosters creativity in kids by allowing them to craft stories, improve writing, and enhance oratory skills with engaging visuals and interactive tools."
        />
        <meta property="og:image" content={shareImage} />
        <meta
          property="og:url"
          content={`${BASE_URL}/kids-learning-platform`}
        />
        <meta property="og:site_name" content="Atlearn" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="Storylane fosters creativity in kids by allowing them to craft stories, improve writing, and enhance oratory skills with engaging visuals and interactive tools."
        />
        <meta
          name="twitter:title"
          content="Start Online Classes | Atlearn LMS"
        />
        <meta
          name="twitter:description"
          content="Storylane fosters creativity in kids by allowing them to craft stories, improve writing, and enhance oratory skills with engaging visuals and interactive tools."
        />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>
      {/* banner section */}
      <section>
        {/* banner section */}
        <div className="hero kindergarden bg-lightGrey11 dark:bg-lightGrey11-dark relative z-0 overflow-hidden py-50px ">
          {/* animated icons */}
          <div></div>
          {/* Swiper */}
          <div className="swiper ecommerce-slider">
            <div className="swiper-wrapper">
              {/* Hero  1 */}
              <div className="swiper-slide px-15px">
                <div className="container 2xl:container-secondary-md relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-30px">
                    {/* banner Left */}
                    <div
                      data-aos="fade-up"
                      className="md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7"
                    >
                      <div className="3xl:pr-135px">
                        <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                          Story writing Platform for Kids
                        </h3>
                        <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-blackColor dark:text-blackColor-dark md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                          {/* Best Kindergarten Awesome
                          <span className="text-secondaryColor">Solution</span> */}
                          Story Writing Platform for Kids
                        </h1>
                        <ParagraphText>
                          Spark creativity with Storylane's interactive kids
                          learning app—the best online learning platform for
                          kids.
                        </ParagraphText>
                        <div className="mt-30px">
                          <PrimaryButton
                            title
                            primary={true}
                            onClick={() =>
                              // window.open(
                              //   "https://app.storylane.in/login",
                              //   "_blank"
                              // )
                              setDemoPopupOpen(true)
                            }
                          >
                            Start Writing
                          </PrimaryButton>
                        </div>

                        <div className=" mt-8 text-center">
                          <ul className="flex gap-3 items-center">
                            <li>
                              <span
                                onClick={() =>
                                  handleSocialNavigate(
                                    "https://www.facebook.com/profile.php?id=61558076772314&mibextid=ZbWKwL"
                                  )
                                }
                                className=" cursor-pointer w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex items-center justify-center text-whiteColor bg-[#3b5998] hover:bg-[#2d4373] text-xl rounded-full transition"
                              >
                                <i className="icofont-facebook" />
                              </span>
                            </li>
                            <li>
                              <span
                                onClick={() =>
                                  handleSocialNavigate(
                                    "https://www.linkedin.com/company/storylane-in/"
                                  )
                                }
                                className="cursor-pointer w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex items-center justify-center text-whiteColor bg-[#0077b5] hover:bg-[#005582] text-xl rounded-full transition"
                              >
                                <i className="icofont-linkedin" />
                              </span>
                            </li>
                            <li>
                              <span
                                onClick={() =>
                                  handleSocialNavigate(
                                    "https://www.instagram.com/storylane_in/"
                                  )
                                }
                                className="cursor-pointer w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex items-center justify-center text-whiteColor bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 text-xl rounded-full transition"
                              >
                                <i className="icofont-instagram" />
                              </span>
                            </li>
                            <li>
                              <span
                                onClick={() =>
                                  handleSocialNavigate(
                                    "https://www.youtube.com/@Storylane_In"
                                  )
                                }
                                className=" cursor-pointer w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex items-center justify-center text-whiteColor bg-[#FF0000] hover:bg-[#cc0000] text-xl rounded-full transition"
                              >
                                <i className="icofont-youtube-play" />
                              </span>
                            </li>
                            <li>
                              <span
                                onClick={() =>
                                  handleSocialNavigate(
                                    "https://in.pinterest.com/20n7saefmr790zlr7j0nc5w82iraog/"
                                  )
                                }
                                className="cursor-ponter w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex items-center justify-center text-whiteColor bg-[#E60023] hover:bg-[#b7001c] text-xl rounded-full transition"
                              >
                                <i className="icofont-pinterest" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* banner right */}
                    <div
                      data-aos="fade-up"
                      className="md:col-start-1 md:col-span-8 lg:col-start-8 lg:col-span-5"
                    >
                      <div className="relative">
                        <Link
                          to={"https://app.storylane.in/common/library"}
                          title="Kids creative adventure begins with Storylane"
                        >
                          <img
                            loading="lazy"
                            src={MainGif}
                            alt="Kids creative adventure begins with Storylane"
                            title="Kids creative adventure begins with Storylane"
                            className="w-full"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about  section */}
      <section>
        <VideoSection data={kidsAboutSection} headingTop={true} descriptionTop={true} />
      </section>

      {/* Popular Subject Sectoion*/}
      <div
        style={{
          // backgroundImage: `url('assets/images/about/about_bg_1.jpg')`,
          backgroundImage: `url(${Class_management_image})`,
        }}
        className=" pt-50px pb-110px bg-cover "
      >
        <div className="container">
          {/* about section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
            {/* about left */}
            <div
              className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0"
              data-aos="fade-up"
            >
              <div className="relative">
                <div>
                  <img
                    className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                    src="./assets/images/service/service__shape__1.png"
                    alt="service icon"
                    title="service icon"
                  />
                </div>
              </div>
            </div>
            {/* sbject right */}
            <div className="relative z-0 overflow-visible">
              {/* animted area */}
              <div data-aos="fade-up">
                <img
                  className="absolute sm:block xl:left-1/4 z-[-1] top-6 animate-move-var"
                  src="./assets/images/service/service__shape__bg__1.png"
                  alt="service icon"
                  title="service icon"
                />
              </div>
              {/* subject card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
                {/* card 1 */}
                <div data-aos="fade-up">
                  <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor">
                    {/* card svg */}
                    <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                      <div className="relative ">
                        <img
                          loading="lazy"
                          src={cultivates_creativity_image}
                          alt="Voice-to-Text for Inclusive Learning"
                          title="Voice-to-Text for Inclusive Learning"
                          className="w-15 h-15"
                        />
                      </div>
                      <div className="service__small__img w-7 h-[60px]">
                        <svg
                          className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                            stroke="#FFB31F"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300">
                        Voice-to-Text for Inclusive Learning
                      </div>
                      <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                        Kids can speak their stories out loud, making it easier
                        for those with speech or writing difficulties to express
                        their ideas and bring their stories to life.
                      </p>
                      <div>
                        {/* <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="/"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            View Subject
                            <i className="icofont-long-arrow-right" />
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div data-aos="fade-up">
                  <div className="md:translate-y-[30px]">
                    <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                      {/* card svg */}
                      <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                        <div className="relative ">
                          <img
                            loading="lazy"
                            src={enhances_learning_enjoyment_icon}
                            alt="Rewards & Badges for Motivation"
                            title="Rewards & Badges for Motivation"
                            className="w-15 h-15"
                          />
                        </div>
                        <div className="service__small__img w-7 h-[60px]">
                          <svg
                            className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                              stroke="#FFB31F"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* card content */}
                      <div>
                        <div className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300">
                          Rewards & Badges for Motivation
                        </div>
                        <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                          Storylane encourages progress with fun badges and
                          rewards, keeping kids engaged and excited to keep
                          writing and improving.
                        </p>
                        <div>
                          {/* <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="/"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              View Subject
                              <i className="icofont-long-arrow-right" />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div data-aos="fade-up">
                  <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor">
                    {/* card svg */}
                    <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                      <div className="relative ">
                        <img
                          loading="lazy"
                          src={nurtures_aspiring_writers_icon}
                          alt="Download Stories as PDF"
                          title="Download Stories as PDF"
                          className="w-15 h-15"
                        />
                      </div>
                      <div className="service__small__img w-7 h-[60px]">
                        <svg
                          className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                            stroke="#FFB31F"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* card content */}
                    <div>
                      <div className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300">
                        Download Stories as PDF
                      </div>
                      <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                        Once their story is complete, kids can proudly download
                        and share their work as beautifully formatted PDFs -
                        perfect for showcasing their creativity at home or in
                        school.
                      </p>
                      <div>
                        {/* <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="/"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            View Subject
                            <i className="icofont-long-arrow-right" />
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div data-aos="fade-up">
                  <div className="md:translate-y-[30px]">
                    <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                      {/* card svg */}
                      <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                        <div className="relative ">
                          <img
                            loading="lazy"
                            src={improves_writing_proficiency_icon}
                            alt="Designed for Kids to Use Independently"
                            title="Designed for Kids to Use Independently"
                            className="w-15 h-15"
                          />
                        </div>
                        <div className="service__small__img w-7 h-[60px]">
                          <svg
                            className="icon__hover__img w-7 h-[60px] opacity-0 group-hover:opacity-100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                              stroke="#FFB31F"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* card content */}
                      <div>
                        <div className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300">
                          Print or Order Digital Storybooks
                        </div>
                        <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                          Give your child's creativity a real-world touch!
                          Parents and teachers can print the stories or order
                          digital storybooks, turning their ideas into tangible
                          keepsakes that kids can proudly hold, read, and gift.
                        </p>
                        <div>
                          {/* <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="/"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              View Subject
                              <i className="icofont-long-arrow-right" />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" w-full flex justify-center lg:justify-end"
                data-aos="fade-up"
              >
                <a
                  href="https://app.storylane.in/login"
                  title="Start Writing"
                  className="text-size-15 px-47px py-15px bg-primaryColor text-whiteColor border border-primaryColor hover:text-primaryColor hover:bg-whiteColor dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor mt-10 md:mt-50px rounded uppercase"
                >
                  Start Writing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* program  section */}
      <section>
        <div className="container  pb-10px mt-2">
          {/* program Heading */}
          <div className="mb-5 md:mb-10" data-aos="fade-up">
            <div className="text-center">
              <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                What We Offer
              </span>
            </div>
            <h3 className="text-3xl md:text-[35px] lg:text-size-38 3xl:text-size-42 leading-10 mf:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark text-center">
              {/* Early learning
              <span className="relative after:w-full after:h-[7px] z-0 after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:z-[-1]">
                Programs
              </span>
              <br />
              For Your Baby. */}
              Storylane Features for Aspiring Authors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30px text-center">
            <div
              onClick={() =>
                handleNavigate("https://www.youtube.com/shorts/H3WFjr3eB_w")
              }
              className="cursor-pointer shadow-dropdown-secodary"
              data-aos="fade-up"
            >
              <div className="p-10px">
                <img
                  loading="lazy"
                  src={Write_StoriesWrite_Stories_image}
                  alt=" Write Stories"
                  title=" Write Stories"
                  className="w-full"
                />
              </div>
              <div className="pt-30px pr-5 pb-10 pl-30px md:py-5 md:px-10px lg:pt-30px lg:pr-10px lg:pb-10 lg:pl-5 2xl:pt-30px 2xl:pr-5 2xl:pb-10 2xl:pl-30px">
                <h3 className="text-primaryColor font-bold uppercase mb-15px hover:text-secondaryColor text-xl dark:text-blackColor-dark">
                  Write Stories
                </h3>

                <span className="font-medium text-blackColor  dark:text-blackColor-dark ">
                  Inspire your students to embark on a creative journey,
                  crafting their own stories after selecting a book.
                </span>
              </div>
            </div>

            <div
              onClick={() =>
                handleNavigate("https://www.youtube.com/shorts/DZwcxLmRSF4")
              }
              className="cursor-pointer shadow-dropdown-secodary"
              data-aos="fade-up"
            >
              <div className="p-10px">
                <img
                  loading="lazy"
                  src={Voice_To_Text_image}
                  alt="Voice To Text"
                  title="Voice To Text"
                  className="w-full"
                />
              </div>
              <div className="pt-30px pr-5 pb-10 pl-30px md:py-5 md:px-10px lg:pt-30px lg:pr-10px lg:pb-10 lg:pl-5 2xl:pt-30px 2xl:pr-5 2xl:pb-10 2xl:pl-30px">
                <h3 className="text-primaryColor font-bold uppercase mb-15px hover:text-secondaryColor text-xl dark:text-blackColor-dark">
                  Voice To Text
                </h3>

                <span className="font-medium text-blackColor  dark:text-blackColor-dark ">
                  Students can speak, with their words instantly converted into
                  text, helping them improve their oratory skills as well.
                </span>
              </div>
            </div>
            <div
              onClick={() =>
                handleNavigate("https://www.youtube.com/watch?v=GMHLpUYgByk")
              }
              className="cursor-pointer shadow-dropdown-secodary"
              data-aos="fade-up"
            >
              <div className="p-10px">
                <img
                  loading="lazy"
                  src={Dynamic_Dashboard_image}
                  alt="Dynamic Dashboard"
                  title="Dynamic Dashboard"
                  className="w-full"
                />
              </div>
              <div className="pt-30px pr-5 pb-10 pl-30px md:py-5 md:px-10px lg:pt-30px lg:pr-10px lg:pb-10 lg:pl-5 2xl:pt-30px 2xl:pr-5 2xl:pb-10 2xl:pl-30px">
                <h3 className="text-primaryColor font-bold uppercase mb-15px hover:text-secondaryColor text-xl dark:text-blackColor-dark">
                  Dynamic Dashboard
                </h3>

                <span className="font-medium text-blackColor  dark:text-blackColor-dark ">
                  Experience interactive learning as progress is tracked,
                  achievements celebrated, and milestone stickers lead them to a
                  grand castle.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <CTAForms data={kidsPlatformCTAForms} />
      </div>

      {/* overview section */}
      <div className="mb-4">
        <OverviewSection />
      </div>

      {/* Testimonials*/}
      <Testimonials />

      {/* <div className="mt-10 mb-10">
        <Slider />
      </div> */}
      <HowItWorks />
      <section>
        <CTASection data={kidsCTA} />
      </section>
      <StorylaneDemoModal open={demoPopupOpen} handleClose={handleFreeDemoClose}/>
    </div>
  );
}

export default KindsPlatform;
