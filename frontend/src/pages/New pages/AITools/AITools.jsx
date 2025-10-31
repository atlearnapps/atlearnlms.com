import React, { useState } from "react";
import ParagraphText from "src/components/New components/ParagraphText";
import { AIToolTabContent } from "src/Page_Content/AI_tools";

function AITools() {
  const tabsDAta = [
    { id: "All", label: "All" },
    { id: "Marketing_Communication", label: "Marketing & Communication" },
    { id: "Assistants_Automation", label: "Assistants & Automation" },
    {
      id: "Teachers_Educators",
      label: "Tools for Teachers & Educators",
    },
    { id: "Assessment_Tracking", label: "Assessment & Tracking" },
    {
      id: "Interactive_Gamified_Learning",
      label: "Interactive & Gamified Learning",
    },
    {
      id: "AI_Assessment_Feedback_Tools",
      label: "AI Assessment & Feedback Tools",
    },
    { id: "AI_Learning", label: "AI Learning" },
    { id: "AI_Communication", label: "AI Communication" },
    { id: "AI_content", label: "AI Content" },
    { id: "Learning_Study_Support", label: "Learning & Study Support" },
    {
      id: "AI_Career_Communication_Tools",
      label: "AI Career & Communication Tools",
    },
    {
      id: "AI_Creative_Tools",
      label: "AI Creative Tools",
    },
  ];

  const [activeAITab, setActiveAITab] = useState("Marketing_Communication");

  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-center gap-4 ">
          {tabsDAta.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveAITab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeAITab === tab.id
                  ? "bg-primaryColor text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="container tab py-10">
          <div className="tab-contents">
            {/* grid ordered cards */}
            <div className="transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-30px">
                {/* card 1 */}

                {(activeAITab === "All"
                  ? Object.values(AIToolTabContent).flatMap(
                      (tab) => tab.aiTools || []
                    )
                  : AIToolTabContent[activeAITab]?.aiTools || []
                ).map((item, index) => (
                  <div key={index} className="group">
                    <div
                      className="tab-content-wrapper h-full flex flex-col"
                      data-aos="fade-up"
                    >
                      <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-col h-full">
                        {/* card image */}
                        <div className="relative mb-4 overflow-hidden border max:h-[150px]">
                          <div
                            // className="w-full  "
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                              maxHeight: "150px",
                              marginBottom: "0.5rem",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={item?.image}
                              alt={item?.title}
                              title={item?.title}
                              className="w-full  transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>
                        {/* card content */}
                        <div className="">
                          <a
                            href={item?.link}
                            title={item?.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-blackColor mb-2px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                          >
                            {item?.title}
                          </a>
                        </div>
                        <div>
                          <ParagraphText>{item?.description}</ParagraphText>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AITools;
