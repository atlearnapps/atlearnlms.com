import React, { useState } from "react";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import ParagraphText from "src/components/New components/ParagraphText";
import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import mainImage from "src/assets/images/CaseStudies/AtlearnMobileApp/1-min-1.png";
import laravelIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/laravel_logo-60x60xc.png";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import HeaderTextSmall from "src/components/New components/HeaderTextSmall";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { atlearn_mobile_app_CTA } from "src/Page_Content/CaseStudies";
import { BASE_URL } from "src/apiClients/config";

function AtlearnMobileApp() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description" },
    { name: "Challenges" },
    { name: "Solutions" },
    { name: "Results" },
  ];

  const features = [
    { id: 1, title: "High-definition video conferencing" },
    { id: 2, title: "Secure live streaming" },
    { id: 3, title: "Server-side recording" },
    { id: 4, title: "Interactive whiteboard" },
    { id: 5, title: "Live screen sharing" },
    { id: 6, title: "Polls and surveys" },
    { id: 7, title: "Collaborative code editor" },
    { id: 8, title: "Easy administration" },
  ];

  const technologies = [
    { name: "HTML5", icon: htmlImage },
    { name: "CSS3", icon: cssIcon },
    { name: "MySQL", icon: sqlIcon },
    { name: "Vue.js", icon: VueIcon },
    { name: "PHP", icon: phpIcon },
    { name: "Laravel", icon: laravelIcon },
  ];

  return (
    <div>
      <Helmet>
        <title>Atlearn Mobile App | AI-Powered Learning On the Go</title>
        <meta
          name="description"
          content="Discover how the Atlearn App enhances virtual learning with AI, easy course access, and interactive tools for students and educators anytime, anywhere."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/case-studies/atlearn-mobile-app`}
        />
      </Helmet>
      {/* banner section */}
      <section>
        {/* bannaer section */}
        <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
          <div className="container">
            <div className="flex flex-col items-center text-center w-full lg:w-83% xl:w-3/4 mx-auto">
              {/* banner Left */}
              <div data-aos="fade-up" className="w-4/5">
                <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                  EDUCATION SOLUTION
                </h3>
                <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold ">
                  Case Studies
                  <span className="text-secondaryColor">.</span>
                </h1>
                <p className="text-size-15 md:text-lg text-white  font-medium">
                  Explore our success stories and discover how Atlearn
                  transforms education with innovative solutions tailored to
                  schools, tutors, and learners.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="absolute left-1/2 bottom-[15%] animate-spin-slow"
              src="./assets/images/register/register__2.png"
              alt=""
            />
            <img
              className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
              src="./assets/images/herobanner/herobanner__6.png"
              alt=""
            />
            <img
              className="absolute right-[5%] bottom-[15%]"
              src="./assets/images/herobanner/herobanner__7.png"
              alt=""
            />
            <img
              className="absolute top-[5%] left-[45%]"
              src="./assets/images/herobanner/herobanner__7.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-50px ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
            <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
              {/* event heading */}
              <div>
                <h3
                  className="text-3xl md:text-size-40 leading-11 md:leading-13.5 text-blackColor dark:text-blackColor-dark mb-15px font-bold"
                  data-aos="fade-up"
                >
                  Atlearn (Online Classroom) Mobile App
                </h3>
              </div>
              {/* event 1 */}
              <div data-aos="fade-up" className="mt-35px mb-30px">
                {/* blog thumbnail */}
                <div className="overflow-hidden relative mb-35px flex items-center justify-center w-full ">
                  <img
                    // src="./assets/images/event/event__6.png"
                    src={mainImage}
                    alt=""
                    className="w-[50%] h-[450px]"
                  />
                </div>
                {/* blog content */}
                <div className="container pb-100px">
                  <div className="tab p-30px pb-37px border border-borderColor dark:border-borderColor-dark shadow-event">
                    {/* Tab Links */}
                    <div className="tab-links flex flex-wrap md:flex-nowrap rounded">
                      {tabs.map((tab) => (
                        <button
                          key={tab.name}
                          onClick={() => setActiveTab(tab.name)}
                          className={`relative text-lg text-blackColor dark:text-blackColor-dark pb-10px mb-15px mr-8 before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 ${
                            activeTab === tab.name ? "before:w-full" : ""
                          }`}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="tab-contents">
                      {activeTab === "Description" && (
                        <div>
                          <ParagraphText>
                            ATLEARN mobile learning platform comes for Android
                            and iOS devices where learners will log in, check
                            notifications, attend live classes and access
                            self-paced online sessions from their smartphones
                            and tablets.
                          </ParagraphText>

                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              lineHeight: "1.8em",
                              marginBottom: "20px",
                            }}
                            data-aos="fade-up "
                          >
                            <li>
                              <ParagraphText>Flexible learning</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>obile browser apps</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Higher engagement</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Ease-of-use</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Custom-branding</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Enhanced collaboration
                              </ParagraphText>
                            </li>
                          </ul>

                          <ParagraphText>
                            App provides a Virtual Classroom expereince which
                            aims in building e-learning communities through
                            Online Classroom and Knowledge Sharing events on any
                            topics on one's choice. We help nurture effective
                            use of enterprise scale video conferencing features
                            to enhance collaboration, research and teaching as
                            part of an educational framework. The goal is to
                            help foster Virtual classroom communities with
                            integrated Virtual conference facility in e-learning
                            for Students & Teachers to bring in holistic and
                            quality learning experience
                          </ParagraphText>
                          <HeaderTextMedium>
                            Teach and train on-the-go with ATLEARN mobile
                            learning solution
                          </HeaderTextMedium>
                          <ParagraphText>
                            ATLEARN mobile learning solution lets you deliver
                            live classes and self-paced courses directly to your
                            learners’ smartphones or tablets. With a
                            comprehensive set of eLearning features, a
                            responsive website and native apps for iOS and
                            Android devices, ATLEARN makes mobile learning easy
                            and accessible
                          </ParagraphText>
                          <HeaderTextMedium>
                            ATLEARN seamless and synchronous cooperative
                            learning on-line
                          </HeaderTextMedium>

                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              lineHeight: "1.8em",
                              marginBottom: "20px",
                            }}
                            data-aos="fade-up "
                          >
                            <li>
                              <ParagraphText>
                                Notifications and updates
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Real-time collaboration
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Live classes on mobile
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Mobile access to courses
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Real-time messaging</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Secure streaming</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>iOS and Android app</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                eLearning tools and features
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Content format compatibility
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>Features</HeaderTextSmall>
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              lineHeight: "1.8em",
                              marginBottom: "20px",
                            }}
                            data-aos="fade-up "
                          >
                            <li>
                              <ParagraphText>
                                High-definition video conferencing
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Secure live streaming
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Server-side recording
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Interactive whiteboard
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Live screen sharing</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Polls and surveys</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Collaborative code editor
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Easy administration</ParagraphText>
                            </li>
                          </ul>
                        </div>
                      )}
                      {activeTab === "Challenges" && (
                        <div>
                          <ParagraphText>
                            We have prepared Wireframes and Front end design
                            using Adobe XD, Photoshop in coming up with the
                            initial design and mockup and followed by further
                            design revisions
                          </ParagraphText>
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              lineHeight: "1.8em",
                              marginBottom: "20px",
                            }}
                            data-aos="fade-up "
                          >
                            <li>
                              <ParagraphText>
                                Design graphic user interface elements, like
                                menus and tabs
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Illustrate design ideas using storyboards,
                                process flow
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Built page elements such custom graphics and
                                illustrations
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Developed UI mockups and prototypes that clearly
                                illustrate how sites function and look like
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Layout adjustments based on user feedback
                              </ParagraphText>
                            </li>
                          </ul>
                        </div>
                      )}
                      {activeTab === "Solutions" && (
                        <div className="transition-all duration-300">
                          <ParagraphText>
                            Our Development Team came up with the technical
                            architecture followed by data flow design, process
                            flow design, flow charts, and technical
                            documentation
                          </ParagraphText>
                          <ParagraphText>
                            We used PHP Tech Stack with Application Programming
                            Interfaces (APIs) which let “Plug in” to other
                            Useful Features. Through our highly skilled and
                            certified developers, we developed custom solutions
                            and technical services on a wide range of
                            requirements and thereby exceeding the client's
                            expectations. This has all been achieved through our
                            efficient coding best practices, development
                            processes, implementation guidelines, technical
                            maturity & end to end delivery.
                          </ParagraphText>
                        </div>
                      )}
                      {activeTab === "Results" && (
                        <div className="transition-all duration-300">
                          <ParagraphText>
                            We performed a comprehensive test strategy since
                            technology stack undergo constant changes due to
                            upgrades in web and mobile technologies. Our testing
                            included exhaustive functional and non-functional
                            testing, manual and automation testing besides
                            performance and security testing. Our automated
                            Application Testing and Performance Analysis ensured
                            testing the applications on multiple devices and
                            form factors and make the testing process quick,
                            efficient, reliable, repeatable and reusable.
                          </ParagraphText>
                          <ParagraphText>
                            Our comprehensive application testing coverage
                            included the following:
                          </ParagraphText>
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                              lineHeight: "1.8em",
                              marginBottom: "20px",
                            }}
                            data-aos="fade-up "
                          >
                            <li>
                              <ParagraphText>
                                Functional testing including UI testing for
                                native, hybrid and web applications
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Cross Browser Testing across various browser
                                platforms
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Cross platform testing: iOS, Android, Windows,
                                BlackBerry and HTML5
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Non-functional testing: Performance, stability,
                                security and compliance
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Usability and compatibility testing
                              </ParagraphText>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* blog sidebar */}
            <div className="lg:col-start-9 lg:col-span-4">
              {/* enroll section */}
              <div
                className="py-33px px-25px shadow-event mb-30px"
                data-aos="fade-up"
              >
                <div className="flex justify-between mb-50px">
                  <div className="text-size-21 font-bold text-primaryColor font-inter leading-25px">
                    FEATURES
                  </div>
                </div>
                <ul>
                  {features?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-10px mb-25px pb-22px border-b border-borderColor dark:border-borderColor-dark"
                    >
                      <div>
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark">
                          {item?.title}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* sponsored section */}
              <div
                className="py-33px px-25px shadow-event mb-30px"
                data-aos="fade-up"
              >
                <h4 className=" mb-10px text-size-21 text-blackColor dark:text-blackColor-dark font-bold leading-25px">
                  TECHNOLOGY STACK
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain mb-2"
                      />
                      {/* <span className="text-sm text-center">{tech.name}</span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CTASection data={atlearn_mobile_app_CTA} />
      </section>
    </div>
  );
}

export default AtlearnMobileApp;
