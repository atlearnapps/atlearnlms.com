import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// import AITools from "./AITools";
import AIAssistance from "./AIAssistance";
import { useLocation, useNavigate } from "react-router-dom";
import CTASection from "src/components/New components/CTASection";
import {
  AI_Powered_Assistance,
  AssistantsCTA,
  Create_and_Sell_Online_Courses,
  Smarter_Learning_Decisions,
  Smarter_Solutions_for_Teaching,
  Smarter_Teaching,
  Virtual_Classroom,
  Why_Educators_Choose_Atlearn,
} from "src/Page_Content/AI_tools";
import YouTubeApiForm from "../AICourseManagement/YouTubeApiForm";
import VideoSection from "src/components/New components/VideoSection";
import SplitSection from "src/components/New components/SplitSection";
import { BASE_URL } from "src/apiClients/config";
import { InstagramEmbed, LinkedInEmbed } from "react-social-media-embed";
import SocialMediaEmbed from "src/components/New components/SocialMediaEmbed";

function Index() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.hash) {
  //     const section = document.querySelector(location.hash);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //       navigate("/ai-assistants", { replace: true });
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location]);

  useEffect(() => {
    if (location.hash) {
      // Delay to ensure the target element is fully rendered
      setTimeout(() => {
        const section = document.querySelector(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          navigate("/ai", { replace: true });
        }
      }, 100); // 100ms delay (adjust if needed)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div>
      <Helmet>
        <title>
          AI-Powered LMS for Schools & Educators | Atlearn Virtual Classroom
          Software
        </title>
        <meta
          name="description"
          content="Discover Atlearn’s AI-powered LMS for schools, teachers, and training institutes. Deliver interactive virtual classrooms, personalized learning, and smarter teaching tools. Book your free demo today."
        />
        <link rel="canonical" href={`${BASE_URL}/ai`} />
      </Helmet>
      <main className="bg-transparent">
        <section>
          {/* bannaer section */}
          <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
            <div className="container md:container-secondary">
              <div className="flex flex-col items-center text-center w-full ">
                {/* banner Left */}
                <div data-aos="fade-up" className="w-4/5">
                  <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                    Smart Education
                  </h3>
                  <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold ">
                    AI-Powered LMS for Schools, Educators & Corporate Training
                    <span className="text-secondaryColor">.</span>
                  </h1>
                  <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                    Transform Online Learning with Atlearn’s Virtual Classroom &
                    Smarter Teaching Tools
                  </p>
                  <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                    Atlearn is a next-generation AI-powered Learning Management
                    System built for schools, teachers, and training institutes
                    who want to teach smarter, engage learners better, and
                    achieve better outcomes. Our AI teaching tools streamline
                    everything from course creation to student analytics, making
                    education more personalized and efficient.
                  </p>
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
        {/* <div className="container tab py-10">
          <div className="tab-links flex flex-wrap md:flex-nowrap mb-30px rounded gap-0.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative p-10px md:px-25px md:py-15px lg:py-3 2xl:py-15px 2xl:px-45px text-blackColor  hover:bg-primaryColor hover:text-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor flex items-center ${
                  activeTab === tab.id ? "bg-primaryColor text-whiteColor" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`${tab.icon} mr-2`} /> {tab.label}
              </button>
            ))}
          </div>
        </div> */}

        {/* <div id="chat"> */}
        <div id="chat">
          <AIAssistance />
        </div>
        <section>
          <VideoSection data={Smarter_Teaching} headingTop={true} />
        </section>
        <section>
          <SplitSection data={Virtual_Classroom} rightImage={true} />
        </section>
        <section>
          <SplitSection data={Smarter_Learning_Decisions} />
        </section>
        <section>
          <VideoSection
            data={Create_and_Sell_Online_Courses}
            headingTop={true}
            rightSideVideo={true}
          />
        </section>
        <section>
          <SplitSection data={Why_Educators_Choose_Atlearn} />
        </section>

        <section id="youtube-summarize">
          <YouTubeApiForm />
        </section>

        <section>
          <VideoSection data={AI_Powered_Assistance} rightSideVideo={true} />
        </section>
        <section>
          <SplitSection data={Smarter_Solutions_for_Teaching} />
        </section>

        <section>
          <CTASection data={AssistantsCTA} />
        </section>
      </main>
    </div>
  );
}

export default Index;
