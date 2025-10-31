import React from "react";
import FeaturesCard from "src/components/New components/FeaturesCard";
import SectionHeading from "src/components/New components/SectionHeading";
import SplitSection from "src/components/New components/SplitSection";
import HeaderImage from "src/assets/images/OutreachProgram/headerImage.svg";
import SocialMediaImage1 from "src/assets/images/OutreachProgram/StayAhead2.webp";
import SocialMediaImage2 from "src/assets/images/OutreachProgram/data_driven_marketing_solution_with_atlearn.webp";
import LetsTalk from "src/assets/images/OutreachProgram/LetsTalk.webp";
import customerImage from "src/assets/images/OutreachProgram/impressions_on_social_media.webp";
// import Interactive_Online_Classroom from "src/assets/images/OutreachProgram/Interactive Online Classroom.svg";
// import Course_Management_Image from "src/assets/images/OutreachProgram/Course Management Solutions.svg";
import Interactive_Online_Classroom from "src/assets/images/OutreachProgram/interactive_online_classroom.webp";

import Course_Management_Image from "src/assets/images/OutreachProgram/course_management_solutions.webp";

// import Targeted_Marketing_Image from "src/assets/images/OutreachProgram/Targeted Marketing Services.svg";
import Targeted_Marketing_Image from "src/assets/images/OutreachProgram/targeted_marketing_services.webp";

// import Student_Performance_Image from "src/assets/images/OutreachProgram/Student Performance Analytics.svg";
import Student_Performance_Image from "src/assets/images/OutreachProgram/student_performance_analytics.webp";

import feature from "src/assets/images/OutreachProgram/seamless_integration_with_existing_platforms.webp";
import Enhanced_Student_Engagement_image from "src/assets/images/OutreachProgram/Enhanced Student Engagement.svg";
import AI_Powered_Tools_image from "src/assets/images/OutreachProgram/AI-Powered Tools.svg";
import Increased_Student_Enrollment_image from "src/assets/images/OutreachProgram/Increased Student Enrollment.svg";
import Improved_Brand_Recognition from "src/assets/images/OutreachProgram/Improved Brand Recognition.svg";
import Data_Driven_Insights_image from "src/assets/images/OutreachProgram/Data-Driven Insights.svg";
import Seamless_Integration_image from "src/assets/images/OutreachProgram/Seamless Integration.svg";
import Customizable_image from "src/assets/images/OutreachProgram/Customizable Learning Experiences.svg";
import Scalable_Solutions_image from "src/assets/images/OutreachProgram/Scalable Solutions for Growing Institutions.svg";
import Continuous_Support_image from "src/assets/images/OutreachProgram/Continuous Support and Training.svg";

import {
  aboutSection,
  contentCreation,
  KeyBenefits,
  CourseIntegrationfeatures,
  Keyservice,
  socialMedia,
  outreachProgramCTAForms,
  OutreachProgramCTA,
} from "src/Page_Content/OutreachProgram";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import CTAForms from "src/components/New components/CTAForms";
import Testimonials from "src/components/New components/Testimonials/Testimonials";
import CTASection from "src/components/New components/CTASection";
import { BASE_URL } from "src/apiClients/config";

function OutreachProgram() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Empower Communities with Atlearn's Outreach Programs</title>
        <meta
          name="description"
          content="Make an impact with Atlearn's outreach programs. Empower communities through accessible education and innovative learning opportunities."
        />
        <link rel="canonical" href={`${BASE_URL}/outreach-program`} />
      </Helmet>
      <>
        {/* banner section */}
        <section>
          {/* banner section */}
          <div className="bg-lightGrey11 dark:bg-lightGrey11-dark relative z-0 overflow-hidden py-50px ">
            {/* animated icons */}
            <div></div>
            <div className="container 2xl:container-secondary-md relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* banner Left */}
                <div data-aos="fade-up">
                  <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                    EDUCATION SOLUTION
                  </h3>
                  <h1 className="text-3xl text-blackColor dark:text-blackColor-dark md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                    EdTech Marketing Tools to Grow Your School's Reach
                  </h1>
                  <p className="text-size-15md:text-lg text-blackColor dark:text-blackColor-dark font-medium mb-45px">
                    Grow your school, coaching center, or education brand with
                    our digital marketing and LMS solutions.
                  </p>
                  <div>
                    <Link
                    to={"/contact"}
                    title="Let's Grow Together"
                      className="text-sm md:text-size-15 font-semibold text-whiteColor bg-primaryColor border border-primaryColor px-5 md:px-30px py-3 md:py-4 hover:text-primaryColor hover:bg-whiteColor rounded inline-block mr-6px md:mr-30px dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                    >
                      Let's Grow Together
                    </Link>
                  </div>
                </div>
                {/* banner right */}
                <div data-aos="fade-up">
                  <div className="tilt">
                    <img
                      loading="lazy"
                      className="w-full h-[350px]"
                      // src="./assets/images/about/about_10.png"
                      src={HeaderImage}
                      alt="Maximize Your Reach"
                      title="Maximize Your Reach"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <div>
        <SplitSection data={aboutSection} />
      </div>

      <div className="bg-white dark:bg-gray-800  py-6 sm:py-8 lg:py-12">
        <SectionHeading data={socialMedia} center={true} />
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* image - start */}

            <div className="bg-red-500 group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:min-h-80">
              <img
                // src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                src={customerImage}
                loading="lazy"
                alt="Impressions on Social Media"
                title="Impressions on Social Media"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative text-center text-white transition duration-200 group-hover:scale-110">
                <p className="text-lg font-light  md:text-xl">
                  Impressions on Social Media
                </p>
                <p className="text-md font-semibold md:text-2xl">2.5K+</p>
              </div>
            </div>

            {/* image - end */}
            {/* image - start */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:min-h-80">
              <img
                // src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                src={SocialMediaImage1}
                loading="lazy"
                alt=" Explore Real-Time Market Trends With Atlearn"
                title=" Explore Real-Time Market Trends With Atlearn"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative ml-4 mb-3 md:ml-5 text-white">
                <p className="text-md font-semibold md:text-xl">Stay Ahead</p>
                <p className="text-xs md:text-lg font-light mt-1">
                  Explore Real-Time Market Trends With Atlearn
                </p>
              </div>
            </div>

            {/* image - end */}
            {/* image - start */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:min-h-80">
              <img
                // src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                src={SocialMediaImage2}
                loading="lazy"
                alt="Data-Driven Marketing Solutions With Atlearn"
                title="Data-Driven Marketing Solutions With Atlearn"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              <div className="relative ml-4 mb-3 md:ml-5 text-white">
                <p className="text-md font-semibold md:text-xl">
                  Data-Driven Marketing Solutions With Atlearn
                </p>
                <p className="text-sm md:text-lg font-light mt-1">
                  Leverage analytics-powered strategies to maximize your
                  campaign's success
                </p>
              </div>
            </div>

            <div
              onClick={() => navigate("/contact")}
              className=" cursor-pointer group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:min-h-80"
            >
              <img
                src={LetsTalk}
                loading="lazy"
                alt="Elevate Your Brand With Atlearn's Content Solutions"
                title="Elevate Your Brand With Atlearn's Content Solutions"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative text-center text-white transition duration-200 group-hover:scale-110">
                <p className="text-md font-semibold md:text-2xl">
                  <i className="icofont-speech-comments"></i> Lets Talk
                </p>
                <p className="text-md font-light md:text-lg">
                  Elevate Your Brand With Atlearn's Content Solutions
                </p>
              </div>
            </div>

            {/* image - end */}
          </div>
        </div>
      </div>

      {/* ---------------------------2-------------------------------- */}

      {/* <SocialMedia/> */}

      <div>
        <SectionHeading data={contentCreation} />
        <FeaturesCard data={CourseIntegrationfeatures} row={3} />
      </div>

      <div>
        <CTAForms data={outreachProgramCTAForms} />
      </div>

      <section className="bg-white">
        <SectionHeading data={Keyservice} center={true} />
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full ">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <div className="  group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img
                  // src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  src={Course_Management_Image}
                  alt="Course Management Solutions"
                  title="Course Management Solutions"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                <h3 className="z-10 text-white  sm:text-size-17 md:text-2xl  leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold  absolute top-0 left-0 p-4 ">
                  Course Management Solutions
                </h3>
                <p className="z-10   sm:text-sm md:text-lg text-white leading-29px absolute top-10 left-0 p-4 ">
                  Foster meaningful connections with students, parents, and
                  educators through personalized outreach and communication
                  efforts.
                </p>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-3 bg-stone-50">
              <a
                href="/"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  loading="lazy"
                  // src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  src={Interactive_Online_Classroom}
                  alt=" Interactive Online Classroom"
                  title=" Interactive Online Classroom"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                <h3 className="z-10 text-white sm:text-size-17 md:text-2xl leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold  absolute top-0 left-0 p-4 ">
                  Interactive Online Classroom
                </h3>
                <p className="z-10 text-white sm:text-sm md:text-lg   leading-29px absolute top-10 left-0 p-4 ">
                  Enhance learning experiences with real-time collaboration,
                  live classes, and engaging tools.
                </p>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 h-[250px]">
                <a
                  href="/"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    loading="lazy"
                    // src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                    src={Targeted_Marketing_Image}
                    alt="Targeted Marketing Services"
                    title="Targeted Marketing Services"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                  <h3 className="z-10 text-white sm:text-size-17 md:text-2xl leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold  absolute top-0 left-0 p-4 ">
                    Targeted Marketing Services
                  </h3>
                  <p className="z-10 text-white sm:text-sm md:text-lg  leading-29px absolute top-16 left-0 p-4 ">
                    Boost your institution's visibility with strategies that
                    attract and retain students while building a strong brand.
                  </p>
                </a>

                <a
                  href="/"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  {/* Background Image */}
                  <img
                    src={Student_Performance_Image}
                    alt="Student Performance Analytics"
                    title="Student Performance Analytics"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />

                  {/* Semi-Transparent Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-75"></div>

                  {/* Title */}
                  <h3 className="z-10 text-white sm:text-size-17 md:text-2xl  leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold absolute top-0 left-0 p-4">
                    Student Performance Analytics
                  </h3>

                  {/* Description */}
                  <p className="z-10 text-white sm:text-sm md:text-lg leading-29px absolute top-16 left-0 p-4 font-semibold">
                    Track and analyze student progress with advanced insights to
                    drive better outcomes.
                  </p>
                </a>
              </div>
            </div>
            {/* <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
        <a
           href="/"
          className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
        >
          <img
            src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
            Brandy
          </h3>
        </a>
      </div> */}
          </div>
        </div>
      </section>

      <>
        <SectionHeading data={KeyBenefits} center={true} />
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 " />
                  <div className="relative p-30px group bg-whiteColor rounded-xl transition-all duration-300 hover:-translate-y-5px shadow-dropdown-secodary hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor h-full">
                    <img
                      loading="lazy"
                      src={Enhanced_Student_Engagement_image}
                      alt="Enhanced Student Engagement"
                      title="Enhanced Student Engagement"
                      className="w-15 h-15"
                    />
                    <div className="flex items-center mt-1">
                      <h3 className="text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
                        Boosted Enrollment through Targeted Outreach
                      </h3>
                    </div>

                    <p className="text-contentColor group-hover:text-whiteColor leading-29px">
                      Reach potential students effectively with personalized
                      outreach programs and campaigns, driving higher student
                      enrollment and fostering growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  " />
                  <div className="relative p-30px group bg-whiteColor rounded-xl transition-all duration-300 hover:-translate-y-5px shadow-dropdown-secodary hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor h-full">
                    <img
                      loading="lazy"
                      src={AI_Powered_Tools_image}
                      alt=" AI-Powered Tools for Personalized Learning"
                      title=" AI-Powered Tools for Personalized Learning"
                      className="w-15 h-15"
                    />
                    <div className="flex items-center mt-1">
                      <h3 className="text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
                        Strengthened Brand Awareness
                      </h3>
                    </div>

                    <p className="text-contentColor group-hover:text-whiteColor leading-29px">
                      Establish a strong, recognizable brand presence through
                      strategic marketing efforts that differentiate Atlearn in
                      the competitive online learning market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 " />
                  <div className="relative p-30px group bg-whiteColor rounded-xl transition-all duration-300 hover:-translate-y-5px shadow-dropdown-secodary hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor h-full">
                    <img
                      loading="lazy"
                      src={Increased_Student_Enrollment_image}
                      alt=" Increased Student Enrollment"
                      title=" Increased Student Enrollment"
                      className="w-15 h-15"
                    />
                    <div className="flex items-center mt-1">
                      <h3 className="text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
                        Increased Engagement with Interactive Content
                      </h3>
                    </div>

                    <p className="text-contentColor group-hover:text-whiteColor leading-29px">
                      Engage students, parents, and educators through dynamic
                      content such as webinars, digital events, and informative
                      materials that foster a strong community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 " />
                  <div className="relative p-30px group bg-whiteColor rounded-xl transition-all duration-300 hover:-translate-y-5px shadow-dropdown-secodary hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor h-full">
                    <img
                      loading="lazy"
                      src={Improved_Brand_Recognition}
                      alt="Improved Brand Recognitionnt"
                      title="Improved Brand Recognitionnt"
                      className="w-15 h-15"
                    />
                    <div className="flex items-center mt-1">
                      <h3 className="text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
                        Personalized Communication for Better Connections
                      </h3>
                    </div>

                    <p className="text-contentColor group-hover:text-whiteColor leading-29px">
                      Build meaningful relationships by leveraging AI-driven
                      tools to provide customized communication, keeping
                      students and parents informed and engaged at every stage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 " />
                  <div className="relative p-30px group bg-whiteColor rounded-xl transition-all duration-300 hover:-translate-y-5px shadow-dropdown-secodary hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor h-full">
                    <img
                      loading="lazy"
                      src={Data_Driven_Insights_image}
                      alt="Data-Driven Insights"
                      title="Data-Driven Insights"
                      className="w-15 h-15"
                    />
                    <div className="flex items-center mt-1">
                      <h3 className="text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
                        Insightful Analytics for Effective Marketing Decisions
                      </h3>
                    </div>

                    <p className="text-contentColor group-hover:text-whiteColor leading-29px">
                      Use data-driven insights to assess the effectiveness of
                      marketing campaigns, refine strategies, and optimize
                      outreach efforts for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <Testimonials />

      <div
        // style={{
        //   backgroundImage: `url('${feature}')`,
        // }}
        className=" pt-50px pb-110px bg-gradient-to-b from-[#001B48] via-[#6E8AF5] to-[#d1feff] w-full h-full"
      >
        <div className="container">
          {/* about section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
            {/* about left */}

            <div
              className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 flex flex-col items-center h-full  justify-center"
              data-aos="fade-up"
            >
              <div className="relative">
                {/* <div>
                    <img
                      className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                      src="./assets/images/service/service__shape__1.png"
                      alt="Abstract shape graphic enhancing the services section"
                      title="Services section decorative shape"
                    />
                  </div> */}
                <img
                  // className="absolute sm:block xl:left-1/4 z-[-1] top-6 animate-move-var"
                  src={feature}
                  alt="service icon"
                  title="service icon"
                />
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
                      <div className="relative">
                        <img
                          loading="lazy"
                          src={Seamless_Integration_image}
                          alt="Seamless Integration with Existing Platforms"
                          title="Seamless Integration with Existing Platforms"
                          // className="w-15 h-15"
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
                        href="/"
                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                      >
                        Community Engagement and Visibility
                      </a>
                      <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                        Participate in curated events, contests, and digital
                        drives that promote your institution while strengthening
                        bonds with your local and online communities.
                      </p>
                      <div>
                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="/"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            View More
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
                        <div className="relative">
                          <img
                            loading="lazy"
                            src={Customizable_image}
                            alt="Customizable Learning Experiences"
                            title="Customizable Learning Experiences"
                            // className="w-15 h-15"
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
                          href="/"
                          className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                        >
                          Social Media Amplification
                        </a>
                        <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                          Expand your digital footprint with professionally
                          managed social media campaigns that highlight your
                          achievements, offerings, and student success stories.
                        </p>
                        <div>
                          <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="/"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              View More
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
                      <div className="relative">
                        <img
                          loading="lazy"
                          src={Scalable_Solutions_image}
                          alt="Scalable Solutions for Growing Institutions"
                          title="Scalable Solutions for Growing Institutions"
                          // className="w-15 h-15"
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
                        href="/"
                        className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                      >
                        Lead Generation and Nurturing
                      </a>
                      <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                        Generate high-quality leads and keep them engaged
                        through personalized follow-ups, newsletters, and
                        automated outreach workflows.
                      </p>
                      <div>
                        <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="/"
                            className="text-sm font-medium hover:text-secondaryColor transition-none"
                          >
                            View More
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
                    <div className="p-35px group bg-whiteColor rounded-xl transition-all duration-300 shadow-dropdown-secodary hover:bg-primaryColor hover:-translate-y-5px hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor ">
                      {/* card svg */}
                      <div className="-translate-y-2 flex justify-between overflow-hidden mb-10px">
                        <div className="relative">
                          <img
                            loading="lazy"
                            src={Continuous_Support_image}
                            alt="Continuous Support and Training"
                            title="Continuous Support and Training"
                            // className="w-15 h-15"
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
                          href="/"
                          className="text-2xl lg:text-lg 2xl:text-2xl font-semibold mb-15px md:mb-0 2xl:mb-15px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor dark:transition-all dark:duration-300"
                        >
                          Collaborative Branding Opportunities
                        </a>
                        <p className="text-sm lg:text-xs 2xl:text-sm text-contentColor group-hover:text-whiteColor mb-15px lg:mb-2 2xl:mb-15px transition-all duration-300">
                          Get featured in collaborative campaigns,
                          cross-promotions, and branded content that position
                          your institution as a thought leader in modern
                          education.
                        </p>
                        <div>
                          <div className="text-sm text-black dark:text-blackColor-darkColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                            <a
                              href="/"
                              className="text-sm font-medium hover:text-secondaryColor transition-all duration-300"
                            >
                              View More
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
      </div>

      <section>
        <CTASection data={OutreachProgramCTA} />
      </section>
    </div>
  );
}

export default OutreachProgram;
