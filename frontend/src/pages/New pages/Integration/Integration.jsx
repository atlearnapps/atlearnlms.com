import React, { useEffect, useState } from "react";
import FeaturesCard from "src/components/New components/FeaturesCard";
import SectionHeading from "src/components/New components/SectionHeading";
import SplitSection from "src/components/New components/SplitSection";
import BrandSection from "src/components/New components/BrandSection";

import {
  Advanced_Features,
  Advanced_Features_Tabs,
  analyticsandReporting,
  AssignmentIntegration,
  communityTools,
  CourseIntegration,
  CourseIntegrationfeatures,
  courseManagementSystem,
  IntegrateCTA,
  integrationBenefits,
  integrationBenefitsFeatures,
  integrationCTAForms,
  IntegrationFAQ,
  onlineEventManagement,
  teachersRegistration,
  test_Quiz_Integration,
  whyAtlearn,
} from "src/Page_Content/Integration";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PopupModal } from "react-calendly";
import automated_course_creation from "src/assets/images/Integration/automated-course-creation.svg";
import LMSIntegration_icon from "src/assets/images/Integration/Integrating With Assignment Tools .svg";
import smart_quiz_creation_icon from "src/assets/images/Integration/smart-quiz-creation.svg";
import efficient_administrative_tools_icon from "src/assets/images/Integration/efficient-administrative-tools.svg";
import multi_user_dashboard from "src/assets/images/Integration/multi-user-dashboard.svg";
import teacher_icon from "src/assets/images/Integration/teacher.svg";
import digital_book_icon from "src/assets/images/Integration/digital-book.svg";
import cloud_server_icon from "src/assets/images/Integration/cloud-server.svg";
import online_icon from "src/assets/images/Integration/online-webinar.svg";
import { Helmet } from "react-helmet";
import ServicesTabs from "src/components/New components/ServicesTabs";
import CTAForms from "src/components/New components/CTAForms";
import HireLMSDevelopers from "./HireLMSDevelopers";
import shareImage from "src/assets/images/home/atlearn_kids_platform.png";
import FAQSection from "src/components/New components/FAQSection";
import CTASection from "src/components/New components/CTASection";
import { BASE_URL } from "src/apiClients/config";

function Integration() {
  const subjectSectoion = [
    {
      title: "Our Integration Offerings",
      link: "/lms-integration#Course-Integration",
      icon: automated_course_creation,
    },
    {
      title: "LMS Integration",
      link: "/lms-integration#Assignment-Integration",
      icon: LMSIntegration_icon,
    },
    {
      title: "Test / Quiz Integration",
      link: "/lms-integration#Quiz-Integration",
      icon: smart_quiz_creation_icon,
    },
    {
      title: "Teacher's Registration",
      link: "/lms-integration#Teacher-Registration",
      icon: teacher_icon,
    },
    {
      title: "Course Management System",
      link: "/lms-integration#Course-Management-System",
      icon: digital_book_icon,
    },
    {
      title: "Online Event Management",
      link: "/lms-integration#Online-Event-Management",
      icon: online_icon,
    },
    {
      title: "Community Tools",
      link: "/lms-integration#Community-Tools",
      icon: efficient_administrative_tools_icon,
    },
    {
      title: "Analytics and Reporting",
      link: "/lms-integration#Analytics-Reporting",
      icon: multi_user_dashboard,
    },
    {
      title: "3rd Party Integration",
      link: "/lms-integration#Party-Integration",
      icon: cloud_server_icon,
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        navigate("/lms-integration", { replace: true }); // Remove hash from UR
      }
    }
  }, [location, navigate]);

  return (
    <div>
      <Helmet>
        <title>LMS Integration for Schools, Colleges & Enterprises | Atlearn</title>
        <meta
          name="description"
          content="Connect your existing systems with Atlearn’s LMS—quick setup, white-label, AI features, and real-time insights. Tailored for institutions of all sizes."
        />
        <link rel="canonical" href={`${BASE_URL}/lms-integration`} />

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
      <PopupModal
        // url="https://calendly.com/atlearn-lms/30min"
        url="https://calendly.com/atlearn-lms/atlearn-demo"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />

      <section id="main">
        {/* bannaer section */}
        <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
          <div className="container">
            <div className="flex flex-col items-center text-center w-full ">
              {/* banner Left */}
              <div data-aos="fade-up">
                <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                  EDUCATION SOLUTION
                </h3>
                <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px sm:mb-30px">
                  Atlearn LMS Integration - Seamless Learning Platform for
                  Schools & Businesses
                  <span className="text-secondaryColor">.</span>
                </h1>
                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className=" text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                  >
                    Get a Free Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="absolute left-3/2 bottom-[15%] animate-spin-slow"
              src="./assets/images/register/register__2.png"
              alt="register icon"
              title="register icon"
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

      {/*  brand section */}
      <BrandSection />

      <div>
        <CTAForms data={integrationCTAForms} />
        {/* <RegisterSection /> */}
      </div>

      <>
        {/* Popular Subject Sectoion*/}

        <section>
          <div className="container mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pt-10 md:pt-0 pb-24">
              {subjectSectoion?.map((item, index) => (
                <Link
                  key={index}
                  to={`${item?.link}`}
                  title={item?.title}
                  className="pt-5 pb-4 px-6 rounded-lg bg-borderColor text-center hover:bg-primaryColor dark:bg-borderColor-dark dark:hover:bg-secondaryColor group"
                  data-aos="fade-up"
                >
                  <div className="flex items-center mb-4 gap-4">
                    <img
                      src={item?.icon}
                      alt={item?.title}
                      title={item?.title}
                      className="w-12 h-12 group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <h4 className="text-blackColor text-lg font-medium group-hover:text-blackColor-dark dark:text-blackColor-dark">
                      {item?.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
      <div id="Course-Integration">
        <SplitSection data={CourseIntegration} />
        <FeaturesCard data={CourseIntegrationfeatures} row={3} />
      </div>
      <HireLMSDevelopers />
      <div id="Assignment-Integration">
        <SplitSection data={AssignmentIntegration} />
      </div>
      <div id="Quiz-Integration">
        <SplitSection data={test_Quiz_Integration} rightImage={true} />
      </div>
      <div id="Teacher-Registration">
        <SplitSection data={teachersRegistration} />
      </div>
      <div id="Course-Management-System">
        <SplitSection data={courseManagementSystem} rightImage={true} />
      </div>
      <div id="Online-Event-Management">
        <SplitSection data={onlineEventManagement} />
      </div>
      <div id="Community-Tools">
        <SplitSection data={communityTools} rightImage={true} />
      </div>
      <div id="Analytics-Reporting">
        <SplitSection data={analyticsandReporting} />
      </div>
      <div className="-mt-5">
        {/* <SectionHeading data={{heading:"Ready to Upgrade to AI? Automate Grading & Analytics Today"}} center={true}/> */}
        <SplitSection data={Advanced_Features} />
      </div>
      <div>
        <ServicesTabs tabs={Advanced_Features_Tabs} />
      </div>
      <div id="Party-Integration">
        <SectionHeading data={integrationBenefits} />
        <FeaturesCard data={integrationBenefitsFeatures} row={3} />
      </div>
      <div>
        <SectionHeading data={whyAtlearn} />
      </div>
      <section>
        <FAQSection data={IntegrationFAQ} />
      </section>
      <section>
        <CTASection data={IntegrateCTA} />
      </section>
    </div>
  );
}

export default Integration;
