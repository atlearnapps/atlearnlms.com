import React from "react";
import Storylane_Step1 from "src/assets/images/Kids-platforms/video/Storylane Step 1.mp4";
import Storylane_Step2 from "src/assets/images/Kids-platforms/video/Storylane Step 2.mp4";
import Storylane_Step3 from "src/assets/images/Kids-platforms/video/Storylane Step 3.mp4";
import Storylane_Step4 from "src/assets/images/Kids-platforms/video/Storylane Step 4.mp4";


const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Sign up as a parent or teacher to get started!",
      description:
        "Create your account and complete the onboarding steps to begin your exciting journey with Storylane!",
        src:Storylane_Step1,
      // color: "text-yellow-500",
    },
    {
      id: 2,
      title: "Add your child or students and complete the quick onboarding process.",
      description:
        "Easily add your child or students and set up their profiles for a seamless experience.",
        src:Storylane_Step2,
      // color: "text-purple-500",
    },
    {
      id: 3,
      title: "Choose from our extensive book collection tailored for all interests.",
      description:
        "Explore a wide selection of books that cater to diverse interests.",
        src:Storylane_Step3,
      // color: "text-purple-500",
    },
    {
      id: 4,
      title: "Begin your writing journey and unlock exciting milestones!",
      description:
        "Start writing stories, track progress, and unlock achievements along the way.",
        src:Storylane_Step4,
      // color: "text-purple-500",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">How Storylane Works - Simple Steps to Create Amazing Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
        
                <video
                  // controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-64 lg:h-80 rounded-lg shadow-lg"
                >
                  <source src={step?.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
             

            {/* Text Section */}
            <div className=" mt-4 flex items-start space-x-4">
              {/* Number */}
              <div
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-dashed rounded-full ${step.color} font-bold text-xl`}
              >
                {step.id}
              </div>
              {/* Heading and Description */}
              <div className="text-left">
                <h3 className={`text-xl font-bold ${step.color}`}>
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
