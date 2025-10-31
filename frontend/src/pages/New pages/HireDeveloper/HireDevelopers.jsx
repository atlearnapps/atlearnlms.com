import React, { useEffect, useState } from "react";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainHeaderText from "src/components/New components/MainHeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import {
  accordionData,
  Hire_Our_Expert_LMS_Developer,
  HireDevelopersCTA,
  LMS_Services,
  Our_Hiring_Process,
  Our_LMS_Development_services,
  subjectSectoion,
  testimonials,
  Why_Choose_LMS_Developers,
  why_hire_Atlearns_LMS,
} from "src/Page_Content/Hire_Developers";
import SliderSection from "src/components/New components/SliderSection";
import FeaturesCard from "src/components/New components/FeaturesCard";
import SectionHeading from "src/components/New components/SectionHeading";
import DevelopmentTools from "./DevelopmentTools";
import { PopupModal } from "react-calendly";
import LaravelIcon from "src/assets/images/StackIcons/Laravel.webp";
import { FaCheckCircle } from "react-icons/fa";
import HeaderText from "src/components/New components/HeaderText";
import image2 from "src/assets/images/HireDeveloper/2-FHnl2DdK.png";
import image1 from "src/assets/images/HireDeveloper/1-VuStFO36.png";
import "./HireDeveloper.css";
import CaseStudySection from "./CaseStudySection";
import { Helmet } from "react-helmet";
import Testimonials from "src/components/New components/Testimonials/Testimonials";
import FAQSection from "src/components/New components/FAQSection";
import CTASection from "src/components/New components/CTASection";
import SendeFormModal from "src/components/New components/Modal/SendeFormModal";
import { BASE_URL } from "src/apiClients/config";
// import { useSenderPopup } from "src/hooks/useSenderPopup";
// import SendeFormModal from "src/components/New components/Modal/SendeFormModal";
function HireDevelopers() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpen1, setIsOpen1] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // useSenderPopup();

  // useEffect(() => {
  //   const renderForm = () => {
  //     if (typeof window.senderForms !== 'undefined') {
  //       window.senderForms.render();
  //     } else {
  //       console.error('senderForms is still not defined');
  //     }
  //   };

  //   const onSenderLoad = () => {
  //     if (typeof window.senderForms !== 'undefined') {
  //       window.senderForms.render();
  //     } else {
  //       console.error('senderForms is still not defined');
  //     }
  //   };

  //   if (typeof window.senderForms !== 'undefined') {
  //     renderForm();
  //   } else {
  //     window.addEventListener('SenderLoaded', onSenderLoad);
  //   }

  //   // Load the Sender script
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.sender.net/accounts_resources/universal.js?explicit=true';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // Call sender with ID
  //   window.sender = window.sender || function () {
  //     (window.sender.q = window.sender.q || []).push(arguments);
  //   };
  //   window.sender('1b7b4ea2a06741');

  //   return () => {
  //     window.removeEventListener('SenderLoaded', onSenderLoad);
  //   };
  // }, []);

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
        <title>Hire Expert LMS Developers | Atlearn</title>
        <meta
          name="description"
          content="Hire expert LMS developers from Atlearn. Get seamless integration, customization, and scalable solutions for Moodle and other platforms."
        />
        <link rel="canonical" href={`${BASE_URL}/hire-developers`} />
      </Helmet>
      {/* banner */}
      <section>
        <div
          // style={{
          //   backgroundImage: `url(${StorylaneBanner})`,
          // }}
          className="hero machine-learning bg-darkdeep1 relative z-0 overflow-hidden py-50px "
        >
          <div className=" container 2xl:container-secondary-md relative overflow-hidden">
            <div data-aos="fade-up" className="flex flex-col  items-center  ">
              <div className="text-center">
                <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                  LMS Developers
                </h3>
                <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-whiteColor md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                  Hire LMS Developers & LMS Integrators
                </h1>
                <p className="text-size-15 md:text-lg text-whiteColor font-medium">
                  Build Smart, Scalable Learning Management Solutions with
                  Atlearn
                </p>
                <div>
                  <button
                    // id="hire_lms_developer"
                    onClick={() => setIsOpenModal(true)}
                    className=" mt-2 text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                  >
                    Hire LMS Developers
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              //   className="absolute left-1 bottom-[15%] animate-spin-slow"
              //   src="./assets/images/register/register__2.png"
              className="absolute left-1 bottom-[15%] animate-move-hor"
              src={phpIcon}
              alt="Spinning registration icon"
              title="Spinning Registration Icon"
            />
            <img
              className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
              //   src="./assets/images/herobanner/herobanner__6.png"
              src={htmlImage}
              alt="Graphic in hero banner showcasing platform features"
              title="Hero Banner Graphic"
            />
            <img
              className="absolute right-[5%] bottom-[15%] hidden md:block"
              //   src="./assets/images/herobanner/herobanner__7.png"
              src={cssIcon}
              alt="Decorative graphic in the hero banner"
              title="Hero Banner Decorative Graphic"
            />
            <img
              className="absolute top-[5%] left-[25%]"
              //   src="./assets/images/herobanner/herobanner__7.png"
              src={sqlIcon}
              alt="Central graphic in the hero banner"
              title="Hero Banner Central Graphic"
            />
            <img
              className="absolute top-[5%] right-[25%] w-[60px] h-[60px]"
              //   src="./assets/images/herobanner/herobanner__7.png"
              src={LaravelIcon}
              alt="Central graphic in the hero banner"
              title="Hero Banner Central Graphic"
            />
          </div>
        </div>
      </section>

      <div className="bg-gray-900 text-white py-12 px-6 ">
        {/* Heading */}
        <h2 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-2xl font-bold text-center mb-8">
          We are Akratech Team
        </h2>

        {/* Main Container */}
        <div className=" container flex flex-col md:flex-row gap-6 items-start justify-center">
          {/* Testimonial Card */}
          <div className=" custom-swiper-container w-full md:w-1/2 bg-gray-800 p-6 rounded-lg relative">
            {/* Navigation Buttons at Top-Right */}
            <div className="absolute top-8 right-10 flex gap-3 z-10">
              <button className="custom-swiper-button swiper-button-next">
                ❮
              </button>
              <button className="custom-swiper-button swiper-button-prev">
                ❯
              </button>
            </div>

            <Swiper
              slidesPerView={1} // Show one Swiper slide at a time
              spaceBetween={20} // Adjust spacing between slides
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              loop={true} // Enable infinite loop
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
              modules={[Navigation, Pagination, Autoplay]}
              className="w-full"
            >
              {testimonials
                .reduce((result, _, index) => {
                  if (index % 2 === 0) {
                    result.push(testimonials.slice(index, index + 2));
                  }
                  return result;
                }, [])
                .map((pair, index) => (
                  <SwiperSlide key={index} className="flex flex-col gap-6">
                    {pair.map((testimonial, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-start p-4 bg-gray-800 rounded-lg shadow-md"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            title={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-gray-400"
                          />
                          <div>
                            <h3 className="text-lg font-semibold">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">
                          {testimonial.feedback}
                        </p>
                        <p className="text-gray-400 text-sm font-semibold">
                          {testimonial.author} <br /> {testimonial.position}
                        </p>
                      </div>
                    ))}
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          {/* Right Side Images */}
          <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-4">
            <img
              src={image1}
              alt="Social Media Posts"
              title="Atlearn Social Media Posts"
              className="rounded-lg shadow-lg lg:mt-60 "
            />
            <img
              src={image2}
              alt="Team Celebration"
              title="Atlearn Team Celebration"
              className="rounded-lg shadow-lg lg:mb-60"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:dark:bg-lightGrey10-dark py-2">
        <div className=" relative container  mt-10px ">
          <div className=" py-50px ">
            <div className="text-center">
              <MainHeaderText>
                {Hire_Our_Expert_LMS_Developer?.headerText}
              </MainHeaderText>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
              {/* about right */}

              <div className="flex justify-center items-center flex-col  ">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  {Hire_Our_Expert_LMS_Developer?.slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                      <div style={{ textAlign: "center" }}>
                        <img
                          src={slide?.image}
                          alt={slide?.title}
                          title={slide?.title}
                          className="w-full h-full  rounded-lg"
                          fetchpriority={index === 0 ? "high" : "auto"}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
{/* <div style={{ position: "relative", width: "100%", paddingBottom: "120%" }}>
  <iframe
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAtlearn.in%2Fposts%2Fpfbid02x2Hpa5uU44K8y1SJzJ4vKYkp5xKPq6L213khzVJcCcxo7fqZfVomvdydJQS9BEtvl&show_text=true&width=500"
    style={{
      border: "none",
      overflow: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
    scrolling="no"
    frameBorder="0"
    allowFullScreen={true}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    title="Atlearn Facebook Post"
  />
</div> */}

              </div>
              {/* about left */}
              <div className="flex flex-col justify-center items-center">
                <div data-aos="fade-up" className="">
                  {Hire_Our_Expert_LMS_Developer?.description?.map(
                    (sentence, index) => (
                      <ParagraphText key={index} mainText={sentence} />
                    )
                  )}
                  {Hire_Our_Expert_LMS_Developer?.points?.length > 0 && (
                    <ul className="space-y-5">
                      {Hire_Our_Expert_LMS_Developer?.points?.map(
                        (item, index) => (
                          <li key={index} className="flex items-center group">
                            <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                            <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                              {item.heading && (
                                <strong>{item.heading} - </strong>
                              )}
                              {item.description}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {Hire_Our_Expert_LMS_Developer?.ctaName?.length && (
                    <div className="mt-30px">
                      <button
                        id="hire_lms_developer"
                        // onClick={()=>handleClick(data?.linkHref)}
                        // to={data?.linkHref}
                        // title={data.linkText}
                        className="text-sm md:text-size-15 text-whiteColor bg-primaryColor border border-primaryColor px-25px py-15px hover:text-primaryColor hover:bg-whiteColor rounded inline-block mr-6px md:mr-30px dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                      >
                        {Hire_Our_Expert_LMS_Developer.ctaName}{" "}
                        <i className="icofont-long-arrow-right" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          data={{ heading: "Industries We Serve" }}
          center={true}
        />
        <section>
          <div className="container mt-8">
            <div className="flex flex-wrap justify-center gap-6 pt-10 md:pt-0 pb-24">
              {subjectSectoion?.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] lg:w-[30%] pt-5 pb-4 px-2 rounded-lg bg-white text-center hover:bg-primaryColor dark:bg-borderColor-dark dark:hover:bg-secondaryColor group shadow-dropdown-secodary"
                  data-aos="fade-up"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={item?.icon}
                      alt={item?.title}
                      title={item?.title}
                      className="w-12 h-12 group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <h4 className="text-blackColor text-lg font-medium group-hover:text-blackColor-dark dark:text-blackColor-dark">
                      {item?.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <SliderSection
        data={Why_Choose_LMS_Developers}
        rightImage={true}
        headingTop={true}
      />
  

      {/* <button
        onClick={() => setIsOpen1(true)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Open Sende Form
      </button> */}
      <div>
        <section className="bg-cover bg-center bg-no-repeat  register-section">
          <div className=" bg-secondaryColor bg-opacity-90   lg:pb-0 relative z-0 ">
            <div className="container ">
              <div className="grid grid-cols-1 lg:grid-cols-12 pt-30px gap-x-30px">
                <div
                  className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 lg:col-start-1 lg:col-span-12"
                  data-aos="fade-up"
                >
                  <div className="relative flex items-center w-full flex-col lg:flex-row justify-center  ">
                    {/* <div style="text-align: left" class="sender-form-field" data-sender-form-id="m86ybxeiepyrgnzdaiu"></div> */}
                    <div
                      className="sender-form-field w-full lg:w-1/2"
                      data-sender-form-id="m86ybxeiepyrgnzdaiu"
                      style={{ textAlign: "center" }}
                    ></div>
                    <div className="lg:w-1/2 flex flex-col items-center">
                      <span className=" text-center text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                        LMS Developers
                      </span>
                      <h3 className=" text-center text-3xl md:text-[35px] 2xl:text-size-42 leading-[45px] 2xl:leading-2xl font-bold text-whiteColor pb-25px">
                        Hire Dedicated LMS Developers & Integrators Today!
                      </h3>
                      <div className=" text-center flex gap-x-5 items-center w-full flex-col">
                        <p className="text-size-15 md:text-[22px] lg:text-lg 2xl:text-[22px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-white">
                          Enhance your learning and training capabilities with
                          custom LMS solutions and integrations tailored to your
                          needs. Whether you need a new LMS platform,
                          integration with existing tools, or optimization of
                          your current system, Atlearn has the expertise to
                          deliver.
                        </p>
                        {/* <div
                          onClick={() => setIsOpen(true)}
                          className=" cursor-pointer mt-5 text-sm md:text-size-15 font-semibold text-darkdeep2 bg-whiteColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none mb-8"
                        >
                          Schedule a Consultation
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SectionHeading data={Our_LMS_Development_services} center={true} />
      <FeaturesCard data={LMS_Services} row={3} />

      <SliderSection
        data={why_hire_Atlearns_LMS}
        rightImage={true}
        headingTop={true}
      />

      <div className="bg-white ">
        <div className="max-w-5xl mx-auto p-8  ">
          <div className="text-center">
            <HeaderText>{Our_Hiring_Process?.heading}</HeaderText>
            <ParagraphText>{Our_Hiring_Process?.description}</ParagraphText>
          </div>

          <div className="space-y-8">
            {Our_Hiring_Process?.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <FaCheckCircle className="w-7 h-7 text-green-500 mr-5" />
                <div>
                  <h3 className="capitalize text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px  font-hind dark:transition-all dark:duration-300">{`Step ${
                    index + 1
                  }: ${step.title}`}</h3>
                  <p className="text-contentColor group-hover:text-whiteColor leading-29px">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center flex flex-col gap-2 items-center ">
            <button
              id="hire_lms_developer"
              // to={data?.linkHref}
              // title={data?.linkText}

              className="text-sm md:text-size-15 text-whiteColor bg-primaryColor border border-primaryColor px-25px py-15px hover:text-primaryColor hover:bg-whiteColor rounded inline-block mr-6px md:mr-30px dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
            >
              Book a Consultation Today{" "}
              <i className="icofont-long-arrow-right" />
            </button>
            <ParagraphText>
              Hire expert LMS developers and integrators with ease!
            </ParagraphText>
          </div>
        </div>
      </div>

      <DevelopmentTools />

      <CaseStudySection />

      <FAQSection data={accordionData} />

      <Testimonials />

      <section>
        <CTASection data={HireDevelopersCTA} />
      </section>

      <PopupModal
        url="https://calendly.com/atlearn-lms/atlearn-demo"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />

      <SendeFormModal
        open={isOpenModal}
        handleClose={setIsOpenModal}
        formId={"m86ybxeiepyrgnzdaiu"}
      />
      {/* <SendeFormModal open={isOpen1} handleClose={setIsOpen1} formId={"m86ybxeiepyrgnzdaiu"}/> */}
    </div>
  );
}

export default HireDevelopers;
