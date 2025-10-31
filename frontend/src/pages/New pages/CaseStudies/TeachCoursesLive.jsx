import React, { useState } from "react";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import ParagraphText from "src/components/New components/ParagraphText";
import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import mainImage from "src/assets/images/CaseStudies/StudentCounsellingPortal/Student-conselling.webp";
import laravelIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/laravel_logo-60x60xc.png";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { teach_courses_live_CTA } from "src/Page_Content/CaseStudies";
import { BASE_URL } from "src/apiClients/config";

function TeachCoursesLive() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description" },
    { name: "Challenges" },
    { name: "Solutions" },
    { name: "Results" },
  ];

  const features = [
    { id: 1, title: "Student Profile Management" },
    { id: 2, title: "Course Management" },
    { id: 3, title: "Paid and Free Classes" },
    { id: 4, title: "Interactive Whiteboards" },
    { id: 5, title: "Estimation and Test Platform" },
    { id: 6, title: "Assessment and Test Platform" },
    { id: 7, title: "Social Login" },
    { id: 8, title: "Newsletters" },
    { id: 9, title: "Recordings and upload to YouTube" },
    { id: 10, title: "Admin Panel" },
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
          Teach Courses Live with Atlearn | AI-Powered Virtual Teaching
        </title>
        <meta
          name="description"
          content="Learn how Atlearn's AI-driven platform empowers educators to teach live with interactive tools, seamless engagement, and a dynamic virtual classroom experience."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/case-studies/teach-courses-live`}
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
                  Teach Courses Live
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
                          <ParagraphText>
                            Our SaaS solution TEACH COURSES LIVE helps you get
                            connected wherever you are using the best of the
                            online classroom features that we have to offer.
                            Whatever type of meetings you have - Business,
                            Professional, or the field we are there for you to
                            stay connected
                          </ParagraphText>
                          <ParagraphText>
                            Our user-friendly online classroom platform helps
                            you to schedule public or private classes.
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
                              <ParagraphText strong={"Public Class"}>
                                Online Class is FREE for all participants to
                                join
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Private Class"}>
                                Online Class is only available for participants
                                for a fixed fee which has been defined by the
                                moderator
                              </ParagraphText>
                            </li>
                          </ul>

                          <ParagraphText>
                            Our smart class management tool helps teachers to
                            become more effective in the classroom by bringing
                            complex ideas to life.
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
                                Send Emails and alerts
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Send notifications for classes
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Dates for releasing announcements
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Weekly, daily, and monthly calendar views
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Messages and files can be exchanged without
                                using email.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Include files with messages
                              </ParagraphText>
                            </li>
                          </ul>
                          <ParagraphText>
                            We help teachers earn an income through our platform
                            where you can conduct live interactive LIVE sessions
                            on subjects of their choice.
                          </ParagraphText>
                          <ParagraphText>
                            Teachers can register and provide training to
                            students online for FREE. If they wish they can earn
                            an income through our platform by deciding on a FEE
                            to charge their students for their online classroom
                            services.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Actionable Teacher's Dashboard
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
                                Create an online class on the subject of your
                                choice
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Manage your classes and students through an
                                admin panel
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Decide whether you want to conduct a FREE or
                                PAID class
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Invite Students to Join their class
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Earn an income from the PAID class
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Choose to become a full-time online teacher
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Publish their Events for FREE
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Use our platform as a document repository
                              </ParagraphText>
                            </li>
                          </ul>
                          <ParagraphText>
                            The teacher dashboard enables you to support and
                            give feedback to students by pinpointing the issues
                            in which they are having difficulty. It also enables
                            you to take the initiative in delivering
                            high-quality instruction.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Create and Customize Events on the go
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
                                Schedule Events is a FREE service where Users
                                can send an invite by creating an event
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                They can also Customize the events and send them
                                via Social Media such as Facebook, Twitter, and
                                LinkedIn
                              </ParagraphText>
                            </li>
                          </ul>
                          <ParagraphText>
                            Students can join from among the stream of LIVE
                            online classes selecting subjects of their choice
                            being conducted by various qualified teachers online
                            on our platform 24 x 7.
                          </ParagraphText>
                          <ParagraphText>
                            Students are engaged when they show a high level of
                            attention as well as dedication. The most effective
                            way to involve every student in your class and give
                            them a simple way to communicate with the teacher is
                            by using Teachcources live Collaborative Tools
                          </ParagraphText>
                          <HeaderTextMedium>Learning Library</HeaderTextMedium>
                          <ParagraphText>
                            Our learning library offers educational materials in
                            the form of eBooks, PDFs, videos, and audio files
                            for the student.
                          </ParagraphText>
                          <HeaderTextMedium>Leaderboards</HeaderTextMedium>
                          <ParagraphText>
                            Your students will be inspired and motivated by a
                            great leaderboard. It's a simple technique to
                            encourage group class participation and performance
                            while allowing students to have fun and achieve
                            their objectives.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Smart scheduling tools
                          </HeaderTextMedium>
                          <ParagraphText>
                            Using our intelligent scheduling tool, you can
                            schedule your lessons, assignments, and quizzes and
                            develop a proactive plan for the class and yourself.
                          </ParagraphText>
                          <HeaderTextMedium>Inbuilt-calendar</HeaderTextMedium>
                          <ParagraphText>
                            Teachers and students can use the calendar to
                            schedule lessons, workshops, and assessments. They
                            can also use automated scheduling to be proactive
                            and remain ahead.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Messages & Notifications
                          </HeaderTextMedium>
                          <ParagraphText>
                            Students get notified every time a new course or
                            chapter is updated. This helps to keep the students
                            alert and in sync with any of the changes made by
                            the instructor and school.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Rating and comment for lessons and courses
                          </HeaderTextMedium>
                          <ParagraphText>
                            Ratings and reviews of your course might be very
                            beneficial to prospective students who are thinking
                            about enrolling.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Comments, Likes & Shares
                          </HeaderTextMedium>
                          <ParagraphText>
                            Students can comment, like, and share content about
                            the course on the social wall that is already
                            embedded into our learning management system. This
                            improves the performance and visibility of your
                            course.
                          </ParagraphText>
                          <ParagraphText>
                            Outcome: With the aforementioned capabilities,
                            Students' engagement in the online classroom has
                            been boosted and their focus has been sharpened
                            during the lesson.
                          </ParagraphText>
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
        <CTASection data={teach_courses_live_CTA} />
      </section>
    </div>
  );
}

export default TeachCoursesLive;
