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
import HeaderTextSmall from "src/components/New components/HeaderTextSmall";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { Student_counselling_portal_CTA } from "src/Page_Content/CaseStudies";
import { BASE_URL } from "src/apiClients/config";

function StudentCounsellingPortal() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description" },
    { name: "Challenges" },
    { name: "Solutions" },
    { name: "Results" },
  ];

  const features = [
    { id: 1, title: "User Role Management" },
    { id: 2, title: "Share resources, services, and notes" },
    { id: 3, title: "Easy Communication via Email, SMS, and Call" },
    { id: 4, title: "User-Friendly and responsive interface" },
    { id: 5, title: "Resource and Providers Repository" },
    { id: 6, title: "Staff Collaboration" },
    { id: 7, title: "SSO Integration" },
    { id: 8, title: "Scheduling" },
    { id: 9, title: "Surveys" },
    { id: 10, title: "Student and Parents Profile Management" },
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
          Atlearn Student Counselling Portal | AI-Driven Guidance for Students
        </title>
        <meta
          name="description"
          content="Explore how Atlearn's AI-powered Counselling Portal offers personalized guidance, streamlines career counseling, and enhances student support services."
        />
        <link
          rel="canonical"
          href={`${BASE_URL}/case-studies/student-counselling-portal`}
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
                  Student Counselling Portal
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
                            The Student Counselling Portal that we developed for
                            our client provides counseling 360-degree view of
                            the students in the school community by utilizing
                            both non-academic and academic data
                          </ParagraphText>
                          <ParagraphText>
                            This is a list of the challenges that students and
                            tutors were having, and our client was looking for a
                            solution.
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
                                Mental Health Support
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Academic Support</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Safe and Confidential Space
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Accessibility</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>Early Intervention</ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Improved Student Success
                              </ParagraphText>
                            </li>
                          </ul>

                          <ParagraphText>
                            Let's See how we helped the client to solve the
                            problem statements:
                          </ParagraphText>

                          <HeaderTextSmall>Calendar</HeaderTextSmall>
                          <ParagraphText>
                            The Calendar feature has many modules which include
                            Event creation and meeting link addition. Users can
                            add important events and manage their meetings using
                            this feature. The calendar can be referred to
                            quickly and is very useful for the User to note
                            down.
                          </ParagraphText>
                          <HeaderTextSmall>Communication</HeaderTextSmall>
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
                              <ParagraphText strong={"Call"}>
                                The communication module has been efficiently
                                developed so that the user can effectively make
                                calls to students/guardians. Users can also find
                                the full call log list here.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"SMS"}>
                                The user can view the SMS shared via the Share
                                module here. Also, the responses received for
                                the SMS can be viewed here by the user.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Email"}>
                                The user can view the Email shared via the Share
                                module here. Also, the responses received for
                                the Email can be viewed here by the user.
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>Share & Follow up</HeaderTextSmall>
                          <ParagraphText>
                            This feature has been developed so that the user can
                            access the following modules:
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
                              <ParagraphText strong={"Follow-up"}>
                                Follow-up notifications that are lined up can be
                                viewed in this section.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Share"}>
                                Information/content shared from the Share module
                                can be viewed here.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Done"}>
                                Follow-ups that have been completed successfully
                                are displayed here. The User can refer to the
                                Share history here.
                              </ParagraphText>
                            </li>
                          </ul>

                          <HeaderTextSmall>Notes</HeaderTextSmall>
                          <ParagraphText>
                            This module has 4 sections:
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
                              <ParagraphText strong={"My Notes"}>
                                The admin can use this section to add notes for
                                their reference and use in the future. These
                                notes can be shared with other users such as
                                students, guardians, or providers.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Student's Notes"}>
                                Here, the admin can add notes specific to any
                                student.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Guardian's Notes"}>
                                Here, the admin can add notes specific to any
                                guardian.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Provider's Notes"}>
                                Providers are third-party organizations who are
                                willing to extend their help for various issues
                                faced by students. In this section, the admin
                                can add notes which are specific to Providers.
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>Providers</HeaderTextSmall>

                          <ParagraphText>
                            This module has 2 sections:
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
                              <ParagraphText strong={"View Providers"}>
                                In this module the user can find the full list
                                of providers who are willing to extend their
                                help for various issues faced by students. The
                                provider list can be filtered by different
                                categories based on the type of service provided
                                by them.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Add Provider"}>
                                Here, the user can add new providers to the list
                                by filling up all the details & information of
                                the provider.
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>Students</HeaderTextSmall>
                          <ParagraphText>
                            This module has 4 sections:
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
                              <ParagraphText strong={"All Students "}>
                                Here, the user can find the full list of
                                students enrolled in our platform. The user can
                                select and add students into different groups.
                                An option where survey forms can also be sent
                                directly to students from this page is also
                                available.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Add Student"}>
                                The user can add new students to the existing
                                list of students. All information pertaining to
                                the student needs to be entered and saved.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Import"}>
                                Student information can be imported and
                                integrated into our platform in this section.
                                Users can attach CSV files & import them
                                accordingly.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText strong={"Export"}>
                                A list of students can be selected and exported
                                by the user, from the option available here.
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>Guardian</HeaderTextSmall>
                          <ParagraphText>
                            We have developed the Guardian feature so that the
                            user can easily access and store information about
                            guardians. The student associated with the guardian
                            is also displayed here for reference purposes. There
                            is also an option for sending survey forms directly
                            to the guardian.
                          </ParagraphText>
                          <HeaderTextSmall>Resources</HeaderTextSmall>
                          <ParagraphText>
                            Resources are information that can be quickly
                            referred to by the user.
                          </ParagraphText>
                          <ParagraphText>
                            The admin is authorized to add new resources when
                            required which can be accessed by other users. The
                            admin can also view all the resources that are added
                            in a list view and access them in detail.
                          </ParagraphText>
                          <HeaderTextSmall>Help & Feedback</HeaderTextSmall>
                          <ParagraphText>
                            As a step to enhance the feedback mechanism, there
                            is a feature available for Help & Feedback. Any
                            queries or suggestions can be filled in and sent via
                            this module. There is also an option available for
                            attaching files while sending feedback.
                          </ParagraphText>
                          <HeaderTextSmall>Schoolwide Strategy</HeaderTextSmall>
                          <ParagraphText>
                            Establishes a holistic view of the students in your
                            school community by utilizing both non-academic and
                            academic data
                          </ParagraphText>
                          <HeaderTextSmall>
                            Organize notes, referrals, and follow up in one
                            location
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
                                Student support staff from working in isolation
                                to keep track of the needs of students,
                                families, and colleagues.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Keeps track of notes and an important follow-up
                                to ensure no child gets left behind
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Gives School Personnel one location to text,
                                email and print resources for students and
                                families
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Saves valuable time by reducing the
                                time-intensive process of finding the “right"
                                resource
                              </ParagraphText>
                            </li>
                          </ul>
                          <HeaderTextSmall>
                            Leverage data reports determining social-emotional
                            needs
                          </HeaderTextSmall>
                          <ParagraphText>
                            With this application, you will be able to tie the
                            things you know to be true with the data informing
                            you of that truth.
                          </ParagraphText>
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
                                Design graphic user interfaces elements, like
                                menus and tabs
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Illustrate design ideas using storyboards,
                                process flows
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Built page elements such as custom graphics and
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

                          <HeaderTextMedium>
                            Has the problem statement of the client been
                            addressed?
                          </HeaderTextMedium>

                          <ParagraphText>
                            The following are the changes that have occurred at
                            the school since the Student Counseling portal has
                            been implemented
                          </ParagraphText>
                          <ParagraphText>
                            Many students experienced mental health issues such
                            as anxiety, depression, and stress. Having our
                            counseling portal helped the students with a safe
                            space to discuss their concerns with a trained
                            counselor.
                          </ParagraphText>
                          <ParagraphText>
                            Students who experienced academic difficulties
                            (having trouble with a particular course or managing
                            their time) are now using our counseling portal to
                            receive academic support through counseling and
                            connecting them with the right resources.
                          </ParagraphText>
                          <ParagraphText>
                            Our counseling platform provided students with a
                            private, secure environment where they may share
                            their worries without being judged or condemned.
                          </ParagraphText>
                          <ParagraphText>
                            Our student counseling portal provides students with
                            the support and resources they need to succeed
                            academically and personally, making it an important
                            addition to any school.
                          </ParagraphText>
                        </div>
                      )}
                      {activeTab === "Challenges" && (
                        <div>
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
                                Trust and Confidentiality: Establishing trust
                                and ensuring the confidentiality of student
                                information in an online setting is a
                                significant challenge. Students may have
                                concerns about the security of their personal
                                data and the privacy of their counseling
                                interactions
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Resource Diversity and Relevance: The online
                                counseling portal may lack a diverse range of
                                resources, materials, and tools that address the
                                specific needs and challenges faced by students
                                and guardians.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Engagement with Multilingual Students: New York
                                City is a linguistically diverse environment,
                                and the portal may face challenges in
                                effectively engaging with students who speak
                                languages other than English. Ensuring
                                multilingual support is crucial to inclusivity
                                and reaching a broader student population.
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
                                Inadequate Utilization of Available Services:
                                The portal may offer a wide range of counseling
                                services, resources, and tools, but
                                students/guardians may not be aware of them or
                                might not know how to access and use them
                                effectively.
                              </ParagraphText>
                            </li>
                          </ul>
                        </div>
                      )}
                      {activeTab === "Solutions" && (
                        <div className="transition-all duration-300">
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
                                Trust and Confidentiality: Implement stringent
                                privacy policies and procedures to safeguard
                                student information.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Resource Diversity and Relevance: Expand the
                                range of resources available on the online
                                counseling portal to cater to the specific needs
                                and challenges faced by students and guardians.
                                Collaborate with counselors, educators, Virtual
                                Assistants, and relevant stakeholders to develop
                                resources that align with the educational and
                                personal goals and address the unique
                                experiences of students in the New York City
                                school system.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Multilingual Support: Offer the counseling
                                portal in multiple languages to accommodate the
                                diverse linguistic needs of students. Provide
                                multilingual counseling services and ensure that
                                resources are available in various languages
                                commonly spoken in the city.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Personalized Outreach and Support: Implement
                                personalized outreach strategies to engage
                                students based on their unique needs and
                                concerns. Utilize data analytics to identify
                                trends and patterns, allowing counselors to
                                reach out proactively to students who may
                                require assistance.
                              </ParagraphText>
                            </li>
                          </ul>
                        </div>
                      )}
                      {activeTab === "Results" && (
                        <div className="transition-all duration-300">
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
                                The application was approved and certified by
                                NYCDOE Cloud Review & Compliance Board.
                                Implemented a robust authentication system to
                                ensure user privacy and confidentiality. The
                                portal utilizes secure call, sms, and email
                                functionality, and resource libraries to deliver
                                counseling services virtually.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                Virtual Assistants and other school faculties
                                will align the resources and providers based on
                                the students/guardian's personal and educational
                                goals by communicating unique resources via
                                Call, Email, and SMS or sending Survey Responses
                                to address their needs. The portal utilizes
                                secure audio conferencing, chat functionality,
                                and resource libraries to deliver counseling
                                services virtually.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                The application allows the School Faculties to
                                communicate with the students multi-lingually.
                              </ParagraphText>
                            </li>
                            <li>
                              <ParagraphText>
                                The application allows the schools to send out
                                personalized surveys to get insight into
                                students'/guardian's needs and concerns. Based
                                on the survey responses the school can align the
                                students/guardians with the resources available
                                with personalized positive messages.
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
        <CTASection data={Student_counselling_portal_CTA} />
      </section>
    </div>
  );
}

export default StudentCounsellingPortal;
