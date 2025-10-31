import React from "react";
import { Helmet } from "react-helmet";
import SplitSection from "src/components/New components/SplitSection";
import { AI_Powered_Learning_Tools } from "src/Page_Content/AI_Use_Cases";
import AITools from "../AITools/AITools";
import { BASE_URL } from "src/apiClients/config";

function AIUseCases() {
  return (
    <div>
      <Helmet>
        <title>
          AI Tools for Teachers & Students | Atlearn - Smarter Education
        </title>
        <meta
          name="description"
          content="Discover 40+ AI tools for education—quiz generators, lesson planners & writing assistants. Save time, boost engagement, and personalize learning with Atlearn's AI suite."
        />
        <link rel="canonical" href={`${BASE_URL}/ai-use-cases`} />
      </Helmet>
      <section>
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
                  Revolutionize Education with AI - Smarter Teaching & Learning
                  Tools
                  <span className="text-secondaryColor">.</span>
                </h1>
                <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                  40+ AI-Powered Education Tools for Teachers & Students -
                  Enhance Learning, Assessments & Creativity
                </p>
                {/* <div>
                  <button
                    onClick={() =>
                      window.open("https://school.atlearn.in/", "_blank")
                    }
                    className=" text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                  >
                    School Management Software
                  </button>
                </div> */}
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
      <section>
        <SplitSection data={AI_Powered_Learning_Tools} />
      </section>
      <section>
        <AITools/>
      </section>
    </div>
  );
}

export default AIUseCases;
