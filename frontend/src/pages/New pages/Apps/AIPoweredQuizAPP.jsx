import React, { useState } from "react";
import CTASection from "src/components/New components/CTASection";
import {
  aboutfeatures,
  ai_powered_quiz__bottom_CTA,
  ai_powered_quiz_CTA,
  Application_Images,
  coreFeatures,
  frd,
  moreApps,
} from "src/Page_Content/App/AI_Powered_Quiz";

// import ShowcaseSection from "src/components/New components/ShowcaseSection";
import MainHeaderText from "src/components/New components/MainHeaderText";
import { Helmet } from "react-helmet";
import { BASE_URL } from "src/apiClients/config";
// import dashboardImg from "src/assets/images/Apps/AI_Powered_Quiz/1.png";
import clinicImage from "src/assets/images/Apps/AI_Powered_Quiz/2.png";
import ParagraphText from "src/components/New components/ParagraphText";
import ImageCardSlider from "src/components/New components/ImageCardSlider";
import FeaturesCard from "src/components/New components/FeaturesCard";
import MarkdownPopup from "src/components/New components/MarkdownPopup";
function AIPoweredQuizAPP() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Helmet>
        <title>
          AI-Powered Quiz App | Test Your Knowledge with Smart Quizzes
        </title>
        <meta
          name="description"
          content="Challenge your mind with AI-generated quizzes across topics like Science, History, Geography, and more. Powered by LLM technology for dynamic questions and instant feedback."
        />
        <link rel="canonical" href={`${BASE_URL}/ai-powered-quiz-app`} />
      </Helmet>

      <section className="bg-lightGrey11 dark:bg-lightGrey11-dark flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16px-6 md:px-16 lg:px-24 py-10">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blackColor dark:text-blackColor-dark leading-tight mb-6">
            Launch-Ready Quiz App - Built for Speed, Powered by AI
          </h1>
          <p className="text-lg text-blackColor dark:text-blackColor-dark mb-8">
            This is a working MVP designed to show what's possible with LLM
            technology. Want your own branded quiz app? We'll customize this in
            days, features, design, logic and more.
          </p>
          <button
            onClick={() =>
              window.open("https://quiz-app.atlearnlms.com/", "_blank")
            }
            className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
          >
            Get Your App
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2">
          {/* <img
      src={dashboardImg}
      alt="Dashboard Preview"
      className="rounded-xl shadow-lg"
    /> */}
          <ImageCardSlider data={Application_Images} row={1} />
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16px-6 md:px-16 lg:px-24 py-10">
        <div className="container  text-center">
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left"> */}
          <MainHeaderText>
            Dynamically Generated Quizzes Powered by AI
          </MainHeaderText>
          {/* <p className="text-gray-600 mb-8 text-center lg:text-left"> */}
          <ParagraphText>
            This quiz application MVP offers a sleek, engaging platform where
            users can test their knowledge across a wide range of topics. Built
            with API integration to a large language model (LLM), the app
            instantly generates new quiz questions based on the user’s selected
            topic and difficulty. Designed with gamification, fast feedback, and
            intelligent scoring, it's perfect for learners, educators, and
            trivia enthusiasts alike.
          </ParagraphText>
        </div>

        <div className=" flex flex-col lg:flex-row items-center gap-10 mt-10px">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={clinicImage}
              alt="Clinic Management Dashboard"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {aboutfeatures?.points?.length > 0 && (
                <ul className="space-y-5">
                  {aboutfeatures?.points?.map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-contentColor-dark" />
                      <ParagraphText
                        mainText={item.description || item}
                        strong={item.heading}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <MainHeaderText>Core Modules & Features</MainHeaderText>
        </div>

        <FeaturesCard data={coreFeatures} row={3} />
      </section>
      <section>
        <div className=" flex flex-col items-center  text-center bg-[#f3f6ff] p-4  md:p-6 lg:p-8 rounded-lg shadow-md ">
          <h3 className=" text-center text-3xl md:text-[35px] 2xl:text-size-42 leading-[45px] 2xl:leading-2xl font-bold  pb-25px">
            Project Functional Overview
          </h3>
          <p className="text-size-15 md:text-[22px] lg:text-lg 2xl:text-[22px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9  ">
            This section provides a comprehensive functional specification for
            the project, detailing the objectives, scope, and expected outcomes.
            Review this document to understand the full requirements and
            workflow.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer mt-5 text-sm md:text-size-15 font-semibold text-darkdeep2 bg-whiteColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none mb-10px"
          >
            📑 View Functional Specification
          </button>
        </div>
        <MarkdownPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          content={frd}
        />
      </section>
      <section>
        <CTASection data={ai_powered_quiz_CTA} />
      </section>
      <section>
        <div className="text-center mt-25px">
          <MainHeaderText>Discover More From Our Learning Tools</MainHeaderText>
        </div>
        {/* <ShowcaseSection data={moreApps} /> */}
      </section>
      <ImageCardSlider data={moreApps} row={2} />
      <section>
        <CTASection data={ai_powered_quiz__bottom_CTA} />
      </section>
    </div>
  );
}

export default AIPoweredQuizAPP;
