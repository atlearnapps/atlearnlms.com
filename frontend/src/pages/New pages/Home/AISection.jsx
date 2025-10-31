import { useState } from "react";
import MainHeaderText from "src/components/New components/MainHeaderText";
import PrimaryButton from "src/components/New components/PrimaryButton";
import Tilt from "src/components/JS/VanillaTilt";
import ParagraphText from "src/components/New components/ParagraphText";
import AIChatBotImage from "src/assets/images/home/new/ai_chatbot_new.png";
import AIAcademicImage from "src/assets/images/home/new/image 139.webp"
import AICareerImages from "src/assets/images/home/new/image 140.webp"
import AIYoutubeImages from "src/assets/images/home/new/Group 74698.webp"
import { useHandleNavigate } from "src/utils/Navigation/useHandleNavigate";


const tabs = [
  { id: "chat", label: "AI Chatbots" },
  { id: "academic", label: "Academic Expert" },
  { id: "career", label: "Career Counsellor " },
  { id: "youTube", label: "YouTube Video Summarize" },
];

const tabContent = {
  chat: {
    // badge: "AI Chatbots",
    title: "AI Chatbots",
    description:
      "Engage with our interactive AI chatbots for real-time learning support. Whether you need homework help, concept explanations, or quick answers, our AI is here to assist you 24/7.",
    image: AIChatBotImage,
    cta_name: "View All",
    cta_link: "/ai#chat",
  },
  academic: {
    // badge: "AI CONTENTS",
    title: "Academic Expert",
    description:
      "Your AI-powered <b>academic writing assistant</b> for students, researchers, and PhD scholars. Get expert guidance on thesis writing, literature reviews, research paper structuring, APA/MLA citations, and plagiarism-free referencing. Whether you're preparing a dissertation, journal submission, or academic assignment, our intelligent support system ensures clarity, credibility, and compliance with academic standards.",
    image: AIAcademicImage,
    cta_name: "Chat  Now",
    cta_link: "https://www.atlearn.in/ai-chat/AONHT",
  },
  career: {
    // badge: "AI IMAGES",
    title: "Career Counsellor",
    description:
      "Personalized career guidance for students and working professionals. Using AI-powered assessments and real-time job market data, our expert tool helps you identify the ideal career path based on your <b>skills, interests, personality traits,</b> and <b>industry trends</b>. From streamlining <b>career planning</b> to exploring high-demand jobs, we help you make <b>informed decisions</b> for a successful future.",

    image: AICareerImages,
    cta_name: "Chat  Now",
    cta_link: "https://www.atlearn.in/ai-chat/asst_wH6XlEM0e1m0SK1Mo0m0fj0V",
  },
  youTube: {
    // badge: "AI Math Tutor",
    title: "YouTube Video Summarize",
    description:
      "Quickly summarize YouTube videos by entering a URL and selecting an API. Whether it's a tech review, coding tutorial, lecture, or documentary, get key insights, time-stamped sections, and study-ready summaries—ideal for <b>fast learning and content breakdown</b>.",
    image: AIYoutubeImages,
    cta_name: "Solve with AI",
    cta_link: "/ai#youtube-summarize",
  },
};

export default function AISection() {
  // const navigate = useNavigate();
  const handleNavigate = useHandleNavigate();
  const [activeTab, setActiveTab] = useState("chat");
  // const handleOpenChat = () => {
  //   navigate("#chatbot", { replace: true }); // Updates the URL hash
  //   window.dispatchEvent(new HashChangeEvent("hashchange")); // Manually trigger hashchange event
  // };
  return (
    <div className="bg-white dark:bg-lightGrey10-dark">
      <div className=" container py-50px ">
        {/* Header */}
        <div className="text-center p-4">
          {/* <h1 className="text-4xl md:text-5xl font-bold text-primaryColor mb-4">DISCOVER AVAILABLE AI TOOLS</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            The <span className="text-[#4361ee]">Ultimate Power</span> of AI
          </h2> */}
          <MainHeaderText>
            AI Chatbots & Smart Tutors - 24/7 Learning Assistance
          </MainHeaderText>
          {/* <ParagraphText>
          At Atlearn, our AI-powered chatbots and intelligent tutors transform the way students learn, providing instant support and personalized guidance across various subjects.
          </ParagraphText> */}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary dark:bg-primaryColor text-white shadow-lg "
                  : "bg-white text-gray-600 hover:bg-gray-100 border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8 lg:mt-2">
          <div className="space-y-6">
            {tabContent[activeTab]?.badge && (
              <div
                data-aos="fade-up"
                className="inline-flex items-center px-3 py-1 rounded-full bg-[#4361ee]/10 text-[#4361ee] text-sm font-medium"
              >
                {tabContent[activeTab]?.badge}
              </div>
            )}
            <h3
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold dark:text-blackColor-dark"
            >
              {tabContent[activeTab].title}
            </h3>
            {/* <p className="text-gray-600 leading-relaxed">
              
            </p> */}
            <div data-aos="fade-up">
              <ParagraphText>{tabContent[activeTab].description}</ParagraphText>
            </div>

            {/* <div className="space-y-4">
              <h4 className="text-xl font-semibold">
                {tabContent[activeTab].subheading}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {tabContent[activeTab].details}
              </p>
            </div> */}
            <div className="flex justify-end">
            <PrimaryButton
              primary={true}
              // onClick={() =>
              //   tabContent[activeTab].title === "AI Chatbots"
              //     ? handleOpenChat()
              //     // : handleNavigate(`${tabContent[activeTab].cta_link}`)
              //     :navigate(`${tabContent[activeTab].cta_link}`)
              // }
              onClick={()=>{
                handleNavigate(`${tabContent[activeTab].cta_link}`)
              }}
            >
              {tabContent[activeTab].cta_name}
            </PrimaryButton>
            </div>

          </div>
          <div className="">
            <div data-aos="fade-up">
              <div className="tilt">
                <Tilt>
                  <img
                    className=" w-full h-[300px] rounded-lg2 border"
                    src={tabContent[activeTab].image}
                    alt="AI Tool Illustration"
                    title="AI Tool Illustration"
                    loading="lazy"
                    decoding="async"
                  />
                </Tilt>
              </div>
            </div>
            {/* <Image
              src={tabContent[activeTab].image || "/placeholder.svg"}
              alt="AI Tool Illustration"
              fill
              className="object-contain"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
