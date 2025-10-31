import React, { useEffect } from "react";
// import BrandSection from "src/components/New components/BrandSection";
//images
import personalized_learning_img from "src/assets/images/LMS/personalized learning - icon .svg";
import administrator_img from "src/assets/images/LMS/administrator.svg";
import tutor_icon from "src/assets/images/LMS/tutor icon.svg";
import LmsBannerImage from "src/assets/images/LMS/banner_image_lms_ai.webp";
import automatedIcon from "src/assets/images/LMS/automated-grading---feedback.svg";
import Integrating_LMS_image from "src/assets/images/LMS/Integrating With Popular LMS.svg";
import Live_Streaming_image from "src/assets/images/LMS/Integrate With Popular Live Streaming.svg";
import Assignment_Tools_image from "src/assets/images/LMS/Integrating With Assignment Tools.svg";
import Course_Management_images from "src/assets/images/LMS/Integrating With Course Management.svg";
import { Link, useLocation } from "react-router-dom";
import SplitSection from "src/components/New components/SplitSection";
import {
  aboutLMSAI,
  E_Learning_Solution,
  Elevate_Your_Learning,
  Unlock_Smart_Learning,
  AI_Powered_LMS_Tools,
  lmsCTAForms,
  Smart_Learning_with_H5P,
  End_to_End_LMS_Solutions_Powered_by_Moodle,
  LMSAICTA,
  Want_to_Teach_Smarter,
  LMS_for_Schools_and_Educators,
  Virtual_Classroom,
  AI_Tools_for_Education,
  Online_Course_Creation,
} from "src/Page_Content/LMS";
import { useState } from "react";
import Thinkific_img from "src/assets/images/LMS/Brand/Thinkific-removebg-preview.png";
import Articulate_img from "src/assets/images/LMS/Brand/Articulate-removebg-preview.png";
import LearnDash_img from "src/assets/images/LMS/Brand/LearnDash-removebg-preview (1).png";
import docebo_seeklogo from "src/assets/images/LMS/Brand/Docebo-removebg-preview.png";
import Moodle_img from "src/assets/images/LMS/Brand/Moodle_-removebg-preview.png";
import Braincert_logo from "src/assets/images/LMS/Brand/BuddyBoss_-removebg-preview.png";
import GoHighLevel_image from "src/assets/images/LMS/Brand/GoHighLevel_-removebg-preview.png";
import LMSCourses from "../Home/LMSCourses";
import { Helmet } from "react-helmet";
import ParagraphText from "src/components/New components/ParagraphText";
import CountUp from "src/components/JS/CountUp";
import LMSSlider from "./LMSSlider";
import CTAForms from "src/components/New components/CTAForms";
import shareImage from "src/assets/images/home/atlearn_lms_ai.png";
import MainHeaderText from "src/components/New components/MainHeaderText";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import CTASection from "src/components/New components/CTASection";
import { useSelector } from "react-redux";
import LMSDemoModal from "src/components/New components/Modal/LMSDemoModal";
import { BASE_URL, SECOND_BASE_URL } from "src/apiClients/config";

function LMS() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [shuffledImages, setShuffledImages] = useState([]);
  const [demoPopupOpen, setDemoPopupOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const images = [
    Thinkific_img,
    Articulate_img,
    LearnDash_img,
    docebo_seeklogo,
    Moodle_img,
    Braincert_logo,
    GoHighLevel_image,
  ];

  useEffect(() => {
    setShuffledImages(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFreeDemoOpen = () => {
    // if (user) {
    //   // handleNavigate("/room?role=Moderator");
    //   window.open(
    //     "https://lms.atlearn.in/course/edit.php?category=2&returnto=catmanage",
    //     "_blank"
    //   );
    // } else {
    //   setDemoPopupOpen(true);
    // }
          window.open(
        "https://lms.atlearn.in/course/edit.php?category=2&returnto=catmanage",
        "_blank"
      );
  };

  const handleFreeDemoClose = () => {
    setDemoPopupOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>Seamless Integration in Atlearn eLearning LMS Platform</title>
        <meta
          name="description"
          content="Discover Atlearn's AI-powered LMS designed for schools and educators. Simplify teaching, automate tasks, and enhance student engagement."
        />
        <link rel="canonical" href={`${BASE_URL}/lms-ai`} />

        <meta
          property="og:title"
          content="AI LMS | Smart Learning Management System by Atlearn"
        />
        <meta
          property="og:description"
          content="Enhance education with Atlearn's AI-powered LMS. Personalized learning, smart tools, and seamless integration for students, teachers, and organizations."
        />
        <meta property="og:image" content={shareImage} />
        <meta property="og:url" content={`${BASE_URL}/lms-ai`} />
        <meta property="og:site_name" content="Atlearn" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="Enhance education with Atlearn's AI-powered LMS. Personalized learning, smart tools, and seamless integration for students, teachers, and organizations."
        />
        <meta
          name="twitter:title"
          content="AI LMS | Smart Learning Management System by Atlearn"
        />
        <meta
          name="twitter:description"
          content="Enhance education with Atlearn's AI-powered LMS. Personalized learning, smart tools, and seamless integration for students, teachers, and organizations."
        />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>
      <section>
        {/* bannaer section */}
        <div className="container2-xl bg-darkdeep1 pt-50px  rounded-2xl relative overflow-hidden shadow-brand">
          <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* banner Left */}
            <div data-aos="fade-up">
              <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                AI Learning
              </h3>
              <h1 className="text-2xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                {/* Cloud-based LMS <br className="hidden md:block" />
          Trusted by 1000+ */}
                AI-Powered LMS for Smarter Learning
              </h1>
              <p className="text-size-15md:text-lg text-white font-medium mb-45px">
                Atlearn enhances education with AI-driven tools, personalized
                learning, and actionable analytics for student success.
              </p>
              <div>
                <a
                  href={`${SECOND_BASE_URL}/all-courses#courses`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Atlearn Courses "
                  className=" mb-8 text-sm md:text-size-15 font-semibold text-darkdeep2 bg-whiteColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none"
                >
                  Browse Courses
                </a>
                <div
                  onClick={handleFreeDemoOpen}
                  className=" cursor-pointer text-sm md:text-size-15 font-semibold text-whiteColor py-3 md:py-4 hover:text-secondaryColor inline-block"
                >
                  Create Your Free Course
                  <i className="icofont-long-arrow-right" />
                </div>
              </div>
            </div>
            {/* banner right */}
            <div data-aos="fade-up">
              <div className="tilt relative mb-8">
                <img
                  loading="lazy"
                  src={LmsBannerImage}
                  alt="Learning Management System banner"
                  title="LMS Banner"
                  className="w-full "
                />
              </div>
            </div>
          </div>
          <div>
            <img
              className="absolute left-1/2 bottom-[15%] animate-spin-slow"
              src="./assets/images/register/register__2.png"
              alt="register icons"
              title="register icons"
            />
            <img
              className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
              src="./assets/images/herobanner/herobanner__6.png"
              alt="herobanner icon"
              title="herobanner icon"
            />
            <img
              className="absolute right-[5%] bottom-[15%] hidden md:block"
              src="./assets/images/herobanner/herobanner__7.png"
              alt="herobanner icon"
              title="herobanner icon"
            />
            <img
              className="absolute top-[5%] left-[45%]"
              src="./assets/images/herobanner/herobanner__7.png"
              alt="herobanner icon"
              title="herobanner icon"
            />
          </div>
        </div>
      </section>
      {/* about counter */}
      <div className="container">
        <div className="counter flex flex-wrap py-[70px] lg:py-20 gap-y-30px lg:gap-y-0">
          <div
            className="basis-full sm:basis-1/2 lg:basis-1/4"
            data-aos="fade-up"
          >
            <div className="flex gap-4">
              <div>
                <img
                  src="./assets/images/counter/counter__1.png"
                  alt="counter icon"
                  title="counter icon"
                />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <CountUp endValue={27} />
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Total Achievement
                </p>
              </div>
            </div>
          </div>
          <div
            className="basis-full sm:basis-1/2 lg:basis-1/4"
            data-aos="fade-up"
          >
            <div className="flex gap-4">
              <div>
                <img
                  src="./assets/images/counter/counter__2.png"
                  alt="counter icon"
                  title="counter icon"
                />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <CountUp endValue={25} />
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Students Engaged
                </p>
              </div>
            </div>
          </div>
          <div
            className="basis-full sm:basis-1/2 lg:basis-1/4"
            data-aos="fade-up"
          >
            <div className="flex gap-4">
              <div>
                <img
                  src="./assets/images/counter/counter__3.png"
                  alt="counter icon"
                  title="counter icon"
                />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <CountUp endValue={10} />
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Dedicated Teachers
                </p>
              </div>
            </div>
          </div>
          <div
            className="basis-full sm:basis-1/2 lg:basis-1/4"
            data-aos="fade-up"
          >
            <div className="flex gap-4">
              <div>
                <img
                  src="./assets/images/counter/counter__4.png"
                  alt="counter icon"
                  title="counter icon"
                />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <CountUp endValue={44} />
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Active Users Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white text-center">
        <SplitSection data={Want_to_Teach_Smarter} />
      </section>
      <section>
        <SplitSection data={LMS_for_Schools_and_Educators} />
      </section>
      <section>
        <SplitSection data={Virtual_Classroom} rightImage={true} />
      </section>
      <section>
        <SplitSection data={AI_Tools_for_Education} />
      </section>
      <section>
        <SplitSection data={Online_Course_Creation} rightImage={true} headingTop={true} />
      </section>

      {/* <div>
        <LMSSlider />
      </div> */}

      {/* about and counter section */}
      <section>
        <SplitSection
          data={aboutLMSAI}
          headingTop={true}
          descriptionTop={true}
        />
      </section>

      <section>
        <SplitSection data={AI_Powered_LMS_Tools} />
      </section>

      <div>
        <CTAForms data={lmsCTAForms} />
      </div>

      {/* Popular Subject Sectoion*/}
      <section
        id="Integration"
        className="bg-lightGrey10 dark:bg-lightGrey10-dark lg:pt-50px lg:pb-110px pb-[25px]"
      >
        <div className="container">
          {/* about section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-30px ">
            {/* sbject left */}
            <div className=" order-2 lg:order-1 relative z-0 overflow-visible">
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
                          src={Integrating_LMS_image}
                          alt="Integrating With Popular Learning Management Systems"
                          title="Integrating With Popular Learning Management Systems"
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
                      <a
                        href="https://lms.atlearn.in/"
                        title="Built to Work with Popular LMS Platforms"
                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                      >
                        Built to Work with Popular LMS Platforms
                      </a>

                      <div>
                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="https://lms.atlearn.in/"
                            title="Start Learning"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            Start Learning
                            <i className="icofont-long-arrow-right" />
                          </a>
                        </div>
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
                            src={Live_Streaming_image}
                            alt=" Integrate With Popular Live Streaming Platforms"
                            title=" Integrate With Popular Live Streaming Platforms"
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
                        <a
                          href="https://lms.atlearn.in/"
                          title="Easy Integration with Live Streaming Tools"
                          className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                        >
                          Easy Integration with Live Streaming Tools
                        </a>

                        <div>
                          <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="https://lms.atlearn.in/"
                              title="Automate Grading"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              Automate Grading
                              <i className="icofont-long-arrow-right" />
                            </a>
                          </div>
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
                          src={Assignment_Tools_image}
                          alt="Integrating With Assignment Tools"
                          title="Integrating With Assignment Tools"
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
                      <a
                        href="https://lms.atlearn.in/"
                        title="Supports Assignment Submission & Review Tools"
                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                      >
                        Supports Assignment Submission & Review Tools
                      </a>

                      <div>
                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="https://lms.atlearn.in/"
                            title="Begin Tutoring"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            Begin Tutoring
                            <i className="icofont-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div data-aos="fade-up">
                  <div className="md:translate-y-[30px]">
                    <div className="p-35px group bg-whiteColor rounded-xl transition-all  duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                      {/* card svg */}
                      <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                        <div className="relative ">
                          <img
                            loading="lazy"
                            src={Course_Management_images}
                            alt="Integrating With Course Management Products"
                            title="Integrating With Course Management Products"
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
                        <a
                          href="https://lms.atlearn.in/"
                          className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                        >
                          Designed to Sync with Course Management Systems
                        </a>

                        <div>
                          <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="https://lms.atlearn.in/"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              Get Started
                              <i className="icofont-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* about right */}
            <div
              className=" order-1 lg:order-2 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 flex flex-cols items-center justify-center   "
              data-aos="fade-up"
            >
              <div className="relative">
                <div>
                  <img
                    className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                    src="./assets/images/service/service__shape__1.png"
                    alt=" Comprehensive E-Learning Integration"
                    title=" Comprehensive E-Learning Integration"
                  />
                </div>
                <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                  Integrations
                </span>
                <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  Want a Fully Integrated <br /> E-Learning System? Here's How
                  to Make It Happen!
                </h3>

                <div className="flex justify-center pb-25px">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {shuffledImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Integration Logo ${index + 1}`}
                        title={`Integration Logo ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                        // style={getRandomStyle()}
                      />
                    ))}
                  </div>
                </div>

                <ParagraphText>
                  {
                    "We provide <b>seamless integration</b> across popular LMS platforms,  SCORM-compliant courses, management systems, and a range of <b>third-party e-learning products</b> to enhance your learning ecosystem"
                  }
                </ParagraphText>

                <div>
                  <Link
                    to={"/lms-integration"}
                    className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                  >
                    Explore More <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10px lg:py-50px">
        <MainHeaderText>{Smart_Learning_with_H5P?.headerText}</MainHeaderText>
        <ParagraphText>{Smart_Learning_with_H5P?.description}</ParagraphText>
        <div className="mt-4">
          <HeaderTextMedium>
            {Smart_Learning_with_H5P?.subHeading}
          </HeaderTextMedium>
        </div>

        <ul className="space-y-5 mb-4">
          {Smart_Learning_with_H5P?.points?.map((item, index) => (
            <li key={index} className="flex items-center group">
              <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-contentColor-dark" />
              <ParagraphText strong={item?.heading}>
                {item.description}
              </ParagraphText>
            </li>
          ))}
        </ul>
        <ParagraphText>{Smart_Learning_with_H5P?.conclusion}</ParagraphText>
      </section>

      <section className="bg-lightGrey10 dark:bg-lightGrey10-dark py-10px lg:py-50px ">
        <div>
          <SplitSection data={End_to_End_LMS_Solutions_Powered_by_Moodle} />
        </div>
      </section>

      <LMSCourses />

      {/* Popular Subject Sectoion*/}
      <section className="bg-lightGrey10 dark:bg-lightGrey10-dark pt-50px pb-110px">
        <div className="container">
          {/* about section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-30px">
            {/* about left */}
            <div
              className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 flex flex-cols items-center justify-center"
              data-aos="fade-up"
            >
              <div className="relative">
                <div>
                  <img
                    className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                    src="./assets/images/service/service__shape__1.png"
                    alt=" How Can AI-Powered LMS Tools Supercharge Your Teaching?"
                    title=" How Can AI-Powered LMS Tools Supercharge Your Teaching?"
                  />
                </div>
                <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                  LMS AI Tools
                </span>
                <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                  How Can AI-Powered LMS Tools Supercharge Your Teaching?
                </h3>
                {/* <p className="text-sm md:text-base text-contentColor dark:text-contentColor-dark mb-10px 2xl:mb-50px">
              Construction is a general term meaning the art and science to form
              systems organizations, and comes from Latin Construction is
            </p> */}
                <ParagraphText>
                  {`Enhance <b>student engagement</b> and <b>critical thinking</b> skills with
                  Atlearn LMS communication features, fostering interactive
                  learning and retention on one of the best online course
                  platforms.`}
                </ParagraphText>
                <div>
                  <Link
                    className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                    to="/ai"
                    title="How Can AI-Powered LMS Tools Supercharge Your Teaching?"
                  >
                    Explore More <i className="icofont-long-arrow-right" />
                  </Link>
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
                          src={personalized_learning_img}
                          alt="Personalized Learning Paths"
                          title="Personalized Learning Paths"
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
                      <a
                        href="https://lms.atlearn.in/"
                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                      >
                        Personalized Learning Paths
                      </a>
                      {/* <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                    Construction is a general term the art and science to form
                  </p> */}
                      <div>
                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="https://lms.atlearn.in/"
                            title="Start Learning"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            Start Learning
                            <i className="icofont-long-arrow-right" />
                          </a>
                        </div>
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
                            src={automatedIcon}
                            alt="Automated Grading and Feedback"
                            title="Automated Grading and Feedback"
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
                        <a
                          title="Automated Grading and Feedback"
                          href="https://lms.atlearn.in/"
                          className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                        >
                          Automated Grading and Feedback
                        </a>
                        {/* <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                      Construction is a general term the art and science to form
                    </p> */}
                        <div>
                          <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="https://lms.atlearn.in/"
                              title="Automate Grading"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              Automate Grading
                              <i className="icofont-long-arrow-right" />
                            </a>
                          </div>
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
                          src={tutor_icon}
                          alt="Intelligent Tutor Systems"
                          title="Intelligent Tutor Systems"
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
                      <a
                        href="https://lms.atlearn.in/"
                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                      >
                        Intelligent Tutor Systems
                      </a>
                      {/* <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                    Construction is a general term the art and science to form
                  </p> */}
                      <div>
                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            title="Begin Tutoring"
                            href="https://lms.atlearn.in/"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            Begin Tutoring
                            <i className="icofont-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div data-aos="fade-up">
                  <div className="md:translate-y-[30px]">
                    <div className="p-35px group bg-whiteColor rounded-xl transition-all  duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                      {/* card svg */}
                      <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                        <div className="relative ">
                          <img
                            loading="lazy"
                            src={administrator_img}
                            alt="Efficient Administrative Tools"
                            title="Efficient Administrative Tools"
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
                        <a
                          title="Efficient Administrative Tools"
                          href="https://lms.atlearn.in/"
                          className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                        >
                          Efficient Administrative Tools
                        </a>
                        {/* <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                      Construction is a general term the art and science to form
                    </p> */}
                        <div>
                          <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              title="Efficient Administrative Tools"
                              href="https://lms.atlearn.in/"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              Get Started
                              <i className="icofont-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <SplitSection data={E_Learning_Solution} />
      </div>
      <div>
        <SplitSection data={Unlock_Smart_Learning} />
      </div>
      <div className="mb-4">
        <SplitSection data={Elevate_Your_Learning} />
      </div>
      <section>
        <CTASection data={LMSAICTA} />
      </section>

      {/* <RegisterSection /> */}

      <LMSDemoModal open={demoPopupOpen} handleClose={handleFreeDemoClose} />
    </div>
  );
}

export default LMS;
