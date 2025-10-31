import React, { useState } from "react";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import HeaderTextSmall from "src/components/New components/HeaderTextSmall";
import ParagraphText from "src/components/New components/ParagraphText";
import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import mainImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/Group-890881.webp";
import laravelIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/laravel_logo-60x60xc.png";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { atlearn_online_classRoom_CTA } from "src/Page_Content/CaseStudies";
import { BASE_URL } from "src/apiClients/config";

function CaseStudy_AtlearnOnlineClasses() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description" },
    { name: "Challenges" },
    { name: "Solutions" },
    { name: "Results" },
  ];

  const features = [
    { id: 1, title: "Role-based access" },
    { id: 2, title: "Online Classroom's" },
    { id: 3, title: "Interactive Whiteboard" },
    { id: 4, title: "Import, upload, insert content" },
    { id: 5, title: "Integrated cloud storage" },
    { id: 6, title: "Mobile Friendly" },
    { id: 7, title: "Easy-to-use" },
    { id: 8, title: "Customizable" },
    { id: 9, title: "Content optimisation for various devices" },
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
        <title>
          Atlearn Online Classroom | Transforming Virtual Learning with AI
        </title>
        <meta
          name="description"
          content="Discover how Atlearn's AI-powered classroom enhances virtual learning with interactive tools, seamless collaboration, and an engaging experience for all."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/case-studies/atlearn-online-classRoom`}
        />
      </Helmet>
      {/* banner section */}
      <Banner />
      <section>
        <div className="container py-50px ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
            <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
              {/* event heading */}
              <div>
                <h2
                  className="text-3xl md:text-size-40 leading-11 md:leading-13.5 text-blackColor dark:text-blackColor-dark mb-15px font-bold "
                  data-aos="fade-up"
                >
                  ATLEARN ONLINE CLASSROOM
                </h2>
              </div>
              {/* event 1 */}
              <div data-aos="fade-up" className="mt-35px mb-30px">
                {/* blog thumbnail */}
                <div className="overflow-hidden relative mb-35px">
                  <img
                    // src="./assets/images/event/event__6.png"
                    src={mainImage}
                    alt="ATLEARN ONLINE CLASSROOM"
                    title="ATLEARN ONLINE CLASSROOM"
                    className="w-full"
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
                          <div>
                            {/* <h4
                              className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-30px"
                              data-aos="fade-up"
                            >
                              Description
                            </h4> */}

                            <ParagraphText
                              mainText={
                                "Our SaaS online classroom solution Atearn (www.farlanes.com) helps you get connected wherever you are using the best of the video conferencing features that we have to offer. Whatever your type of meetings you have – Business, Professional or on Field Atearn is there for you to stay connected"
                              }
                            />

                            <ParagraphText>
                              ATLEARN in an Online Virtual Conferencing platform
                              where you can quickly create
                            </ParagraphText>

                            <ul data-aos="fade-up">
                              <li className="flex items-center gap-2">
                                <i className="icofont-check text-primaryColor" />
                                <ParagraphText>
                                  Create virtual meetings on the fly enabling
                                  you to share presentations
                                </ParagraphText>
                              </li>
                              <li className="flex items-center gap-2">
                                <i className="icofont-check text-primaryColor" />
                                <ParagraphText>Share Desktop</ParagraphText>
                              </li>
                              <li className="flex items-center gap-2">
                                <i className="icofont-check text-primaryColor" />
                                <ParagraphText>
                                  Record your Meetings
                                </ParagraphText>
                              </li>
                            </ul>
                            <ParagraphText>
                              Our simple, robust, and tested solution helps you
                              to get easily connected anytime, anywhere “On
                              demand". Participants can join in through the
                              available URL shared by the presenter. We help you
                              get virtually connected anytime and anywhere
                              helping you in your business, professional or
                              personal meetings easier through our rich video
                              conferencing features
                            </ParagraphText>
                            <ParagraphText>
                              *Presenter: You perform the role of Teacher
                              (Moderator) by conducting training or Knowledge
                              sharing sessions by inviting students to
                              participate in your classes.
                            </ParagraphText>
                            <ParagraphText>
                              ATLEARN ensure seamless expertise, you need to
                              rummage around for a comprehensive online system
                              that supports all content formats by default and
                              simplifies course creation. The application
                              understands your actual desires and offers you
                              everything to make a web course in one place.
                            </ParagraphText>
                            <ParagraphText>
                              ATLEARN provides analytics through the online
                              platform for educators and company trainers
                            </ParagraphText>
                            <HeaderTextMedium>
                              Deliver result-driven eLearning with ATLEARN
                              reports and analytics module
                            </HeaderTextMedium>
                          </div>
                          <ParagraphText>
                            Let the results drive your teaching strategy with
                            farlanes reports and analytics modules. One look at
                            your class performance and attendance can give you a
                            ballpark view of how your course is fairing among
                            your learners. With a wealth of analytics data, you
                            can make an informed decision regarding your
                            teaching style, student interaction and eLearning
                            course development.
                          </ParagraphText>
                          <HeaderTextSmall>
                            Atearn virtual reports and analytics feature
                          </HeaderTextSmall>
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
                                View attendance reports
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Assess class performance
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Improve learner retention
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Check time spent in class
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Reduce cost and efforts
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Check course-wise performance
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Filter your class data
                              </ParagraphText>
                            </li>
                          </ul>

                          <ParagraphText>
                            Atearn's innovative reports and analytics feature
                            gives you an in-depth view of your course
                            performance and lets you tailor your teaching or
                            training methodology accordingly.
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
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Performance measurement
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Course content improvement
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Record keeping
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Personalized learning
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Class logistics management
                              </p>
                            </li>
                          </ul>
                          <ParagraphText>
                            We promote services on learning and Development
                            among academia and educational communities across
                            all industries at large to enhance collaboration,
                            research, and teaching which will bring continuous
                            e-learning & Virtual classroom experience. This
                            would cut across any domain/subject with an aim to
                            nurture talent, skill development, and learning
                            among students
                          </ParagraphText>
                        </div>
                      )}
                      {activeTab === "Challenges" && (
                        <div>
                          <ParagraphText>
                            We promote services on learning and Development
                            among academia and educational communities across
                            all industries at large to enhance collaboration,
                            research, and teaching which will bring continuous
                            e-learning & Virtual classroom experience. This
                            would cut across any domain/subject with an aim to
                            nurture talent, skill development, and learning
                            among students
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
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Design graphic user interface elements, like
                                menus and tabs
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Illustrate design ideas using storyboards,
                                process flows
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Built page elements such custom graphics and
                                illustrations
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Developed UI mockups and prototypes that clearly
                                illustrate how sites function and look like
                              </p>
                            </li>
                            <li>
                              <p className="text-contentColor dark:text-contentColor-dark mb-10px !leading-29px">
                                Layout adjustments based on user feedback
                              </p>
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
                            requirements and thereby exceeding the client’s
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
                        title={tech.name}
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
        <CTASection data={atlearn_online_classRoom_CTA} />
      </section>
    </div>
  );
}

export default CaseStudy_AtlearnOnlineClasses;
