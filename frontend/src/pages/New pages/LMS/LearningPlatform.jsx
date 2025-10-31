import React from "react";
import MainHeaderText from "src/components/New components/MainHeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import TagLabel from "src/components/New components/TagLabel";
import { useHandleNavigate } from "src/utils/Navigation/useHandleNavigate";

const LearningPlatform = () => {
        const handleNavigate = useHandleNavigate();
    
  return (
    <div className="container py-50px">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {/* Left Side - Embedded YouTube Video */}
      <div>
        <iframe
          className="w-full h-64 md:h-80 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/GJl4r7P6so4" // Replace with your video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Side - Text Content */}
      <div>
        {/* <h4 className="text-sm font-semibold uppercase text-gray-600">
    
        </h4> */}
        <TagLabel text={"Smart Learning Space"} />
        {/* <h2 className="text-3xl font-bold  mt-2">
          Atlearn Course Management - AI-Powered Teaching Simplified
        </h2> */}
        <MainHeaderText>
        Easy Course Management for Teachers & Students
        </MainHeaderText>
        <ParagraphText>
          Atlearn's SCORM-based AI-driven Course Management System simplifies
          course creation, student engagement, and assessments—all in one
          platform. With AI-powered tools, automated grading, and seamless
          virtual classroom integration, teaching is more efficient than ever.
        </ParagraphText>

        <div
        onClick={()=> handleNavigate("https://lms.atlearn.in/course/edit.php?category=4&amp;returnto=topcat")}
          className=" cursor-pointer inline-block mt-4 text-secondaryColor font-semibold hover:underline flex items-center"
        >
          Create Your Course Now with Atlearn
          <span className="ml-2">→</span>
        </div>
      </div>
    </div>
    </div>

  );
};

export default LearningPlatform;
