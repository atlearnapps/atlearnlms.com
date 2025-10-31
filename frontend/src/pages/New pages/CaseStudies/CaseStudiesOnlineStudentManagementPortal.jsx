import React, { useState } from "react";
import HeaderTextMedium from "src/components/New components/HeaderTextMedium";
import ParagraphText from "src/components/New components/ParagraphText";
import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import mainImage from "src/assets/images/CaseStudies/OnlineStudentManagementPortal/Group-890920.webp";
import laravelIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/laravel_logo-60x60xc.png";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { online_student_management_portal_CTA } from "src/Page_Content/CaseStudies";
import { BASE_URL } from "src/apiClients/config";

function CaseStudiesOnlineStudentManagementPortal() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description" },
    { name: "Challenges" },
    { name: "Solutions" },
    { name: "Results" },
  ];

  const features = [
    {
      id: 1,
      title: "Admin Module to create, update, and delete School programs",
    },
    { id: 2, title: "Search Functionality" },
    { id: 3, title: "Social Login" },
    { id: 4, title: "Profile Management" },
    { id: 5, title: "Attendance" },
    { id: 6, title: "Digital Logbook" },
    { id: 7, title: "Progress Tracking" },
    { id: 8, title: "Messages" },
    { id: 9, title: "Notifications" },
    { id: 10, title: "Student Dashboard & Reports" },
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
          Atlearn Online Student Management Portal | Smart & Efficient Student
          Administration
        </title>
        <meta
          name="description"
          content="Discover how Atlearn's Student Management Portal simplifies administration with AI automation, real-time tracking, and seamless communication for educators."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/case-studies/online-student-management-portal`}
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
                  className="text-3xl md:text-size-40 leading-11 md:leading-13.5 text-blackColor dark:text-blackColor-dark mb-15px font-bold"
                  data-aos="fade-up"
                >
                  Online Student Management Portal
                </h2>
              </div>
              {/* event 1 */}
              <div data-aos="fade-up" className="mt-35px mb-30px">
                {/* blog thumbnail */}
                <div className="overflow-hidden relative mb-35px">
                  <img
                    // src="./assets/images/event/event__6.png"
                    src={mainImage}
                    alt="Online Student Management Portal"
                    title="Online Student Management Portal"
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
                            The future of education is here, and it's all about
                            online student management portals. Know how our
                            student management online portals are
                            revolutionizing the online education system in
                            schools and colleges.
                          </ParagraphText>
                          <ParagraphText>
                            With the rise of technology, online student
                            management portals are becoming the new norm in
                            education. Our portals offer a range of benefits for
                            both students and educators, from easy access to
                            course materials to streamlined communication and
                            collaboration.
                          </ParagraphText>
                          <ParagraphText>
                            We have developed a student management online portal
                            for students. There are four different user types in
                            the “online Student management portal”, Super Admin,
                            School Admin, Instructor, and Students. Each of
                            these users has its own duties and functionality on
                            the website.
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
                              <ParagraphText strong={"Super Admin"}>
                                The system Super Administrators are allowed to
                                perform all admin activities. The Super
                                Administrator role also has the privilege to
                                configure user administration. The super admin
                                can view the overview of all user types and
                                manage them. The super admin can manage the
                                courses and the schools that are in the website
                                database.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"School Admin"}>
                                The school admin can be also defined as a normal
                                admin who has all the rights of an admin. They
                                can add, update or remove instructor and their
                                details from the database. The school admin can
                                add a student and edit their details such as
                                their personal data. The school admin can add
                                new course details and further edit or delete
                                any course from the system.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Instructor"}>
                                The instructor has restricted rights in the
                                system. They can only modify the
                                teaching/learning material for the students. The
                                instructor can update the course as well as the
                                chapters within the courses which can be viewed
                                by the students. The instructor can also view
                                the student’s progress by viewing the student
                                list and further viewing their individual
                                progress.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Student"}>
                                The user will have read-only access to all
                                components of the product. The student will be
                                able to view all the courses in one interface
                                and further be able to access the courses and
                                mark them complete/incomplete as they move
                                forward within the course. This particular user
                                type also has to mark their attendance and
                                update their logbook which can be viewed by the
                                instructors.
                              </ParagraphText>
                            </li>
                          </ul>

                          <HeaderTextMedium>
                            The search features:
                          </HeaderTextMedium>

                          <ParagraphText>
                            We have developed the search features for Super
                            Admin, Instructor, and School admin User types.
                          </ParagraphText>
                          <ParagraphText>
                            Each user type has its own list of features they can
                            use the search filter for
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
                              <ParagraphText strong={"Super Admin"}>
                                Super Admin can use the search filter in
                                Courses, Schools, Users, and Invoices
                                components.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Instructor"}>
                                The instructor can use the search filter to
                                search to find a particular student in the
                                student list as well as find a course from the
                                list of courses.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"School Admin"}>
                                The school admin can search for an individual
                                instructor from the instructor's list, search
                                for an individual student from the student's
                                list, search for a course from the list of
                                courses, or search for invoices.
                              </ParagraphText>
                            </li>
                          </ul>
                          <ParagraphText>
                            We have created a tracking system for Student Users
                            and instructors. Students can mark and track their
                            progress by marking the chapters within the course
                            as complete. This will help to track the overall
                            progress of the course with a percentage rate. And
                            the same can be done by instructors. The Instructor
                            can view and track individual students progress.
                          </ParagraphText>
                          <HeaderTextMedium>
                            Content Management
                          </HeaderTextMedium>
                          <ParagraphText>
                            We have provided an integrated authoring environment
                            for content creators i.e Super Admin, School Admin,
                            and Instructors of Testflight, with a wide range of
                            features with all required formatting to publish
                            content for the students.
                          </ParagraphText>
                          <ParagraphText>
                            The users can perform CRUD operations i.e. Create
                            new courses or chapters, read those courses or
                            chapters, update the existing course or chapters as
                            well as delete the unneeded content.
                          </ParagraphText>
                          <HeaderTextMedium>Status</HeaderTextMedium>
                          <ParagraphText>
                            This module has been used for different purposes in
                            School Admin, Super Admin, and Instructor interface.
                            There are two types of status in the application
                            i.e. Active and Inactive. If any of these users set
                            any course or chapter on inactive status, it will
                            reflect in the student’s dashboard and the students
                            won't be able to see the particular course or
                            chapter anymore
                          </ParagraphText>
                          <ParagraphText>
                            The instructors can add chapters and keep the status
                            of the chapter and keep the status of chapter as
                            inactive then that chapter will act as a draft that
                            will be only visible to the instructor.
                          </ParagraphText>
                          <HeaderTextMedium>Notifications</HeaderTextMedium>
                          <ParagraphText>
                            In this module the users will get notified if there
                            is any action taken within the system like if/when a
                            course or chapters are updated. This module helps
                            students, the school, and the instructor to stay in
                            sync with each other's activitie
                          </ParagraphText>
                          <HeaderTextMedium>
                            Clients' experiences with our student management:
                          </HeaderTextMedium>

                          <ul data-aos="fade-up">
                            <li className="flex items-center gap-2">
                              <i className="icofont-check text-primaryColor" />
                              <ParagraphText>
                                Create virtual meetings on the fly enabling you
                                to share presentations
                              </ParagraphText>
                            </li>
                            <li className="flex items-center gap-2">
                              <i className="icofont-check text-primaryColor" />
                              <ParagraphText>
                                Students and teachers benefited from having a
                                single location to coordinate academic
                                activities
                              </ParagraphText>
                            </li>
                            <li className="flex items-center gap-2">
                              <i className="icofont-check text-primaryColor" />
                              <ParagraphText>
                                it gives students the freedom to access course
                                materials and communicate with professors and
                                peers from any location with an internet
                                connection.
                              </ParagraphText>
                            </li>
                            <li className="flex items-center gap-2">
                              <i className="icofont-check text-primaryColor" />
                              <ParagraphText>
                                For educators, Our portals streamlined
                                administrative tasks such as grading and
                                communication, freeing up more time for teaching
                                and student engagement.
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
        <CTASection data={online_student_management_portal_CTA} />
      </section>
    </div>
  );
}

export default CaseStudiesOnlineStudentManagementPortal;
