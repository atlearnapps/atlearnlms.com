import React from "react";
import SplitSection from "src/components/New components/SplitSection";
import {
  Access_Anytime_Anywhere,
  Outperforms_Competitors,
  School_ERP_Software,
  schoolCTA,
  schoolmangementCTA,
  Why_Schools_Choose_Atlearn,
} from "src/Page_Content/School_Management";
import ComparisonTable from "./ComparisonTable";
import SectionHeading from "src/components/New components/SectionHeading";
import ServicesTabs from "src/components/New components/ServicesTabs";
import CTAForms from "src/components/New components/CTAForms";
import CTASection from "src/components/New components/CTASection";
import { Helmet } from "react-helmet";
import { BASE_URL } from "src/apiClients/config";

function SchoolManagement() {
  return (
    <div>
      <Helmet>
        <title>Smart School Management System - ERP, LMS & Virtual Class Integration | Atlearn</title>
        <meta
          name="description"
          content="Discover Atlearn's all-in-one school management software combining ERP, LMS, online classes & white-label solutions. Automate operations & simplify teaching today."
        />
        <link rel="canonical" href={`${BASE_URL}/school-management`} />
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
                  All-in-One ERP & LMS for Smarter School Management
                  <span className="text-secondaryColor">.</span>
                </h1>
                <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                  Streamline operations, enhance communication, and drive
                  academic excellence with India's leading cloud-based School
                  Management Software.
                </p>
                <div>
                  <button
                    onClick={() =>
                      window.open("https://school.atlearn.in/", "_blank")
                    }
                    className=" text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                  >
                    School Management Software
                  </button>
                </div>
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
        <SplitSection data={Why_Schools_Choose_Atlearn} headingTop={true} descriptionTop={true} />
      </section>
      <section>
        <SectionHeading
          data={{ heading: "Atlearn Vs. Competitors: Key Advantages" }}
          center={true}
        />
        <ComparisonTable />
      </section>
      <section>
        <CTAForms data={schoolmangementCTA} />
      </section>
      <section className="bg-whiteColor py-10px">
        <SectionHeading
          data={{ heading: "Key Features of Atlearn’s School ERP Software" }}
          center={true}
        />
        <ServicesTabs tabs={School_ERP_Software} />
      </section>
      <section>
        <SplitSection data={Outperforms_Competitors} rightImage={true} />
      </section>
      <section>
        <SplitSection data={Access_Anytime_Anywhere} />
      </section>
      <section>
        <CTASection data={schoolCTA} />
      </section>
    </div>
  );
}

export default SchoolManagement;
