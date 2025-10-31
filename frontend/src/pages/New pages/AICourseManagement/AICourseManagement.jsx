import React from "react";
import VideoSection from "src/components/New components/VideoSection";
// import online_clasroom_scaled from "src/assets/images/online-classes/New/online-clasroom-scaled.webp";
import TeachableLogo_img from "src/assets/images/LMS/Brand/Teachable logo.png";
import Buddyboss_logo_img from "src/assets/images/LMS/Brand/Buddyboss logo.png";
import WizIQ_logo_img from "src/assets/images/LMS/Brand/WizIQ  logo.png";
import Braincert_logo_img from "src/assets/images/LMS/Brand/Braincert logo.png";
import Learncube_logo_img from "src/assets/images/LMS/Brand/Learncube logo.png";
import Moodle_img from "src/assets/images/LMS/Brand/Moodle_-removebg-preview.png";
import effortless_lms_integration from "src/assets/images/LMS/LMS Integration.webp";
import {
  AICourseCTAForms,
  Automate_Everything,
  Creation_Integration_features,
  CTA,
  Key_Features_of_AI_Course,
  Key_Features_of_AI_Course_Features,
} from "src/Page_Content/AI_Course_Management";
import FeatureCards from "./FeatureCards";
import SectionHeading from "src/components/New components/SectionHeading";
import FeaturesCard from "src/components/New components/FeaturesCard";
import CTAForms from "src/components/New components/CTAForms";
import Tilt from "src/components/JS/VanillaTilt";
import ParagraphText from "src/components/New components/ParagraphText";
import HeaderText from "src/components/New components/HeaderText";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import ServicesTabs from "src/components/New components/ServicesTabs";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import YouTubeApiForm from "./YouTubeApiForm";
import { BASE_URL } from "src/apiClients/config";

function AICourseManagement() {
  const images = [
    Moodle_img,
    TeachableLogo_img,
    Buddyboss_logo_img,
    Braincert_logo_img,
    WizIQ_logo_img,
    Learncube_logo_img,
  ];
  return (
    <div>
      <Helmet>
        <title>AI Course Management System | Automate & Personalize Learning</title>
        <meta
          name="description"
          content="Atlearn’s AI‑powered course management automates content delivery, personalizes learning journeys, and simplifies LMS tasks."
        />

        <link rel="canonical" href={`${BASE_URL}/ai-course-management`} />
      </Helmet>
      <main className="bg-transparent">
        {/* banner section */}
        <section>
          {/* bannaer section */}
          <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
            <div className="container">
              <div className="flex flex-col items-center text-center w-full mx-auto">
                {/* banner Left */}
                <div data-aos="fade-up" className="">
                  <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                    EDUCATION SOLUTION
                  </h3>
                  <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold ">
                    AI-Powered Course Management
                    <span className="text-secondaryColor">.</span>
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <img
                className="absolute left-1/2 bottom-[15%] animate-spin-slow"
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
                className="absolute right-[5%] bottom-[15%]"
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
        <section>
          <VideoSection data={Automate_Everything} rightSideVideo={true} headingTop={true} />
        </section>
        <section>
          <SectionHeading data={Key_Features_of_AI_Course} center={true} />
          <FeaturesCard data={Key_Features_of_AI_Course_Features} row={3} />
        </section>
        <section>
          <YouTubeApiForm />
        </section>
        <section>
          <FeatureCards />
        </section>

        <section>
          <CTAForms data={AICourseCTAForms} />
        </section>
        <section className="bg-lightGrey10 dark:bg-lightGrey10-dark pt-50px pb-110px">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-30px place-items-center">
              <div data-aos="fade-up">
                <div className="tilt">
                  <Tilt>
                    <img
                      className="w-full  border rounded-lg2 shadow-lg"
                      src={effortless_lms_integration}
                      alt={" Effortless LMS Integration"}
                      title={" Effortless LMS Integration"}
                    />
                  </Tilt>
                </div>
              </div>
              <div
                className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 flex flex-cols items-center justify-center   "
                data-aos="fade-up"
              >
                <div className="relative">
                  <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                    Integrations
                  </span>
                  <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                    Effortless LMS Integration
                  </h3>
                  <ParagraphText>
                    Atlearn is designed for maximum compatibility and
                    flexibility across leading LMS and course authoring
                    platforms. Easily integrate and expand your capabilities
                    with:
                  </ParagraphText>

                  <div className="flex justify-center pb-25px">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images.map((src, index) => (
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
                    Whether you're working with cloud-hosted solutions or
                    self-hosted platforms, our open APIs, SSO via SAML 2.0, and
                    plug-and-play modules ensure a seamless transition. Migrate
                    your content, user data, and course structure
                    effortlessly—and enhance it with AI-powered tools,
                    analytics, and gamified experiences
                  </ParagraphText>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb-4">
            <HeaderText>Effortless Content Creation & Integration</HeaderText>
            <HeaderTextMedium>
              Built for Every Tutor, Trainer & Educator—No Tech Skills Needed
            </HeaderTextMedium>
            <ParagraphText>
              Whether you're launching your first course or managing a large
              academy, Atlearn simplifies the content creation process with:
            </ParagraphText>
            <ServicesTabs tabs={Creation_Integration_features} />
          </div>
        </section>

        <section>
          <CTASection data={CTA} />
        </section>
      </main>
    </div>
  );
}

export default AICourseManagement;
