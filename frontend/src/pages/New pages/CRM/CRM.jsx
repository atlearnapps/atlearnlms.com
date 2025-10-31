import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import HeaderText from "src/components/New components/HeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import SplitSection from "src/components/New components/SplitSection";
import FeaturesCard from "src/components/New components/FeaturesCard";
import {
  Boost_Business_Growth,
  Business_with_Atlearn_CRM,
  Comprehensive_CRM_Solutions,
  CRMCTA,
  CRMCTAForms,
  Data_Security_Scalability,
  Features_of_Atlearn_CRM,
  Why_Choose_Atlearn_CRM,
} from "src/Page_Content/CRM";
import { Helmet } from "react-helmet";
import CTAForms from "src/components/New components/CTAForms";
import CTASection from "src/components/New components/CTASection";
import SendeFormModal from "src/components/New components/Modal/SendeFormModal";
import { BASE_URL } from "src/apiClients/config";

function CRM() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (typeof window.senderForms !== "undefined") {
        window.senderForms.render();
      } else {
        window.addEventListener("SenderLoaded", () => {
          if (typeof window.senderForms !== "undefined") {
            window.senderForms.render();
          } else {
            console.error("senderForms is still not defined");
          }
        });
      }
    }, 0);
  }, [isOpenModal]);

  return (
    <div>
      <Helmet>
        <title>Custom CRM Software Solutions | Atlearn</title>
        <meta
          name="description"
          content="Streamline your sales, support & operations with Atlearn's custom CRM software. Easy integration, automation & scalable features for all businesses."
        />
        <link rel="canonical" href={`${BASE_URL}/crm-software`} />
      </Helmet>
      <main className="bg-transparent">
        {/* <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Atlearn CRM?</h2>
      <ul className="space-y-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <hr className="mt-8 border-t border-gray-300" />
    </section> */}

        {/* banner section */}
        <section>
          {/* bannaer section */}
          <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
            <div className="container">
              <div className="flex flex-col items-center text-center w-full mx-auto">
                {/* banner Left */}
                <div data-aos="fade-up" className="">
                  <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                    Atlearn CRM
                  </h3>
                  <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold ">
                    Your All-in-One Customer Relationship Management Tool
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
          <SplitSection data={Boost_Business_Growth} />
        </section>

        <section>
          <CTAForms data={CRMCTAForms} />
        </section>

        <section>
          <div className="bg-white dark:bg-bodyBg-dark ">
            <div className="max-w-5xl mx-auto p-8  ">
              <div className="text-center">
                <HeaderText>{Why_Choose_Atlearn_CRM?.heading}</HeaderText>
                <ParagraphText>
                  {Why_Choose_Atlearn_CRM?.description}
                </ParagraphText>
              </div>

              <div className="space-y-8">
                {Why_Choose_Atlearn_CRM?.features.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-xl"
                  >
                    <FaCheckCircle className="w-8 h-8 text-green-500 mr-5" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {" "}
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <SplitSection data={Comprehensive_CRM_Solutions} rightImage={true} />
        </section>
        <section>
          <div className="text-center p-8">
            <HeaderText>Core Features of Atlearn CRM</HeaderText>
          </div>
          <FeaturesCard data={Features_of_Atlearn_CRM} row={3} />
        </section>
        <section>
          <SplitSection data={Data_Security_Scalability} />
        </section>

        <section className="bg-white py-10 px-6 md:px-16 max-w-6xl mx-auto rounded-3xl shadow-2xl border border-gray-100 mb-2">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Transform Your Business with Atlearn CRM
            {/* <span className="text-secondary">Atlearn CRM</span>! */}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Business_with_Atlearn_CRM.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-200 bg-gray-50 hover:bg-white"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl ${item.color} mb-4`}
                >
                  <img
                    loading="lazy"
                    src={item?.icon}
                    alt={"Atlearn CRM"}
                    title={"Atlearn CRM"}
                    //   className="w-15 h-15"
                  />
                </div>
                <span className="text-base md:text-lg">
                  <strong>{item.text}</strong>
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsOpenModal(true)}
              className="bg-primaryColor hover:bg-white hover:text-primaryColor text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition duration-300"
            >
              Get a Free Consultation Today!
            </button>
          </div>
        </section>

        <section>
          <CTASection data={CRMCTA} />
        </section>
      </main>
      <SendeFormModal
        open={isOpenModal}
        handleClose={setIsOpenModal}
        formId={"mbambgcjdr6kv0zhhvt"}
      />
    </div>
  );
}

export default CRM;
