import React, { useState } from "react";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import ParagraphText from "src/components/New components/ParagraphText";
import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import mainImage from "src/assets/images/CaseStudies/CourseManagement/school-management3.png";
import laravelIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/laravel_logo-60x60xc.png";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import HeaderTextSmall from "src/components/New components/HeaderTextSmall";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { course_management_CTA } from "src/Page_Content/CaseStudies";
import { BASE_URL } from "src/apiClients/config";

function CourseManagement() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description" },
    { name: "Challenges" },
    { name: "Solutions" },
    { name: "Results" },
  ];

  const features = [
    { id: 1, title: "User-Friendly Login & Registration" },
    { id: 2, title: "Product Detail Management" },
    { id: 3, title: "Payment Gateway" },
    { id: 4, title: "Post, Edit – Classifieds" },
    { id: 5, title: "Manage Users" },
    { id: 6, title: "Update Posts" },
    { id: 7, title: "Alerts & Notifications" },
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
          Atlearn Course Management | Simplified & AI-Driven Course
          Administration
        </title>
        <meta
          name="description"
          content="Explore how Atlearn's AI-powered system streamlines course creation, student tracking, and content delivery, ensuring seamless course management for educators."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/case-studies/course-management`}
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
                  Course Management
                </h3>
              </div>
              {/* event 1 */}
              <div data-aos="fade-up" className="mt-35px mb-30px">
                {/* blog thumbnail */}
                <div className="overflow-hidden relative mb-35px">
                  <img
                    // src="./assets/images/event/event__6.png"
                    src={mainImage}
                    alt=""
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
                          <HeaderTextMedium>Course Design</HeaderTextMedium>

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
                                We help design, setup and manage your courses
                                online.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                We promote a social constructionist pedagogy
                                (collaboration, activities, critical reflection)
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Our courses are designed to suit 100% online
                                classes as well as supplementing face-to-face
                                learning
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Simple, lightweight, efficient, compatible,
                                low-tech browser interface
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Course listing shows descriptions for every
                                course, including accessibility to guests.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Courses can be categorized and searched
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Emphasis on strong security throughout.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Forms are all checked, data validated, cookies
                                encrypted etc
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Multi-language support
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Different themes can be applied to different
                                categories, or different courses
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Customize “themes" , Activity modules , full
                                localization to any language which can
                                customized to suit your need
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextMedium>
                            Course Development
                          </HeaderTextMedium>
                          <HeaderTextSmall>
                            Categories and Courses
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
                                Set up categories and sub-categories with
                                unlimited courses
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Import, or directly enter content into course
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Ability to have multi-media uploaded
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Range of content delivery formats with options
                                for customising deliver
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>
                            Resource and Activity templates
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
                              <ParagraphText>Lessons</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Quizes</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Assessments</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Wikis</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>WebPages</ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>
                            Collaboration & Communication Tools
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
                              <ParagraphText>Forums</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Groups</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Chat</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>WSurvey</ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>
                            Powerful Administration & Reporting Tools
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
                                Ability to set up internal and external
                                enrolments
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Each course can have its own enrolment settings
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Wide range of reports about student activity can
                                be generated
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Keeps record of student results
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Role and permission settings
                              </ParagraphText>
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
        <CTASection data={course_management_CTA} />
      </section>
    </div>
  );
}

export default CourseManagement;
