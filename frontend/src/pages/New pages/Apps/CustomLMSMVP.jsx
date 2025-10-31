import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BASE_URL } from "src/apiClients/config";
import CTASection from "src/components/New components/CTASection";
import MainHeaderText from "src/components/New components/MainHeaderText";
import MainImage from "src/assets/images/Apps/custom-lMS-mvp-app/heroImage.png";
import FeaturesImage from "src/assets/images/Apps/custom-lMS-mvp-app/featuresImage.png";
import {
  About,
  Application_Images,
  coreFeatures,
  Custom_LMS_MVP_bottom_CTA,
  Custom_LMS_MVP_CTA,
  frd,
  moreApps,
} from "src/Page_Content/App/Custom_LMS_MVP";
import ParagraphText from "src/components/New components/ParagraphText";
import ImageCardSlider from "src/components/New components/ImageCardSlider";
import FeaturesCard from "src/components/New components/FeaturesCard";
import MarkdownPopup from "src/components/New components/MarkdownPopup";

function CustomLMSMVP() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Helmet>
        <title>
          Custom LMS Platform | Scalable Learning System with Media Manager &
          Course Builder
        </title>
        <meta
          name="description"
          content="Build your own LMS platform with adaptive video streaming, instructor tools, and seamless subscription payments. Fully customizable, ready for scale."
        />
        <link rel="canonical" href={`${BASE_URL}/custom-lMS-mvp-app`} />
      </Helmet>
      <section className="bg-lightGrey11 dark:bg-lightGrey11-dark flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16px-6 md:px-16 lg:px-24 py-10">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blackColor dark:text-blackColor-dark leading-tight mb-6">
            Launch-Ready LMS Platform - Designed for Scale, Built for Growth
          </h1>
          <p className="text-lg text-blackColor dark:text-blackColor-dark mb-8">
            This is a fully functional LMS MVP crafted to help you launch fast.
            Need your own branded platform? We'll customize features, layout,
            payment logic, and more — just tell us your use case.
          </p>
          <button
            onClick={() =>
              window.open("https://custom.atlearnlms.com/", "_blank")
            }
            className=" text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
          >
            Get Your LMS
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2">
          {/* <img
            src={MainImage}
            alt="Dashboard Preview"
            className="rounded-xl shadow-lg"
          /> */}
          <ImageCardSlider data={Application_Images} row={1} />
        </div>
      </section>
      <section className="px-6 md:px-16 lg:px-24 py-16px-6 md:px-16 lg:px-24 py-10">
        <div className="container  text-center">
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left"> */}
          <MainHeaderText>{About?.headerText}</MainHeaderText>
          {/* <p className="text-gray-600 mb-8 text-center lg:text-left"> */}
          {About?.description?.map((sentence, index) => (
            <ParagraphText key={index} mainText={sentence} />
          ))}
        </div>

        <div className=" flex flex-col lg:flex-row items-center gap-10 mt-10px">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={FeaturesImage}
              alt="Clinic Management Dashboard"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {About?.points?.length > 0 && (
                <ul className="space-y-5">
                  {About?.points?.map((item, index) => (
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
        <CTASection data={Custom_LMS_MVP_CTA} />
      </section>
      <section>
        <div className="text-center mt-25px">
          <MainHeaderText>Discover More From Our Learning Tools</MainHeaderText>
        </div>
        <ImageCardSlider data={moreApps} row={2} />
      </section>
      <section>
        <CTASection data={Custom_LMS_MVP_bottom_CTA} />
      </section>
    </div>
  );
}

export default CustomLMSMVP;
