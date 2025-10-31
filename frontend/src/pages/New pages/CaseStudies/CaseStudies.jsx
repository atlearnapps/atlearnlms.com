import React from "react";
import { Link } from "react-router-dom";
import ONLINE_CLASSROOM_image from "src/assets/images/CaseStudies/New-Macbook-Pro-Mockup-Front-View-4.webp";
import Student_conselling_image from "src/assets/images/CaseStudies/Student-conselling-left-img.webp";
import Online_student_image from "src/assets/images/CaseStudies/Online-student-management-portal.webp";
import Teach_Courses_Live_image from "src/assets/images/CaseStudies/Teach_Courses_Live..webp";
import Online_Classroom_image from "src/assets/images/CaseStudies/Online_Classroom.webp";
import content_creator_image from "src/assets/images/CaseStudies/content-creator.webp";
import { Helmet } from "react-helmet";
import CTASection from "src/components/New components/CTASection";
import { BASE_URL } from "src/apiClients/config";

function CaseStudies() {
  const CTA = {
    // label: "Transform Learning, Simplify Teaching",
    heading: "Real Results, Real Impact",
    description:
      "See how institutions are transforming their education experience with Atlearn tools.",
    ctaName: "Read Case Studies",
    embedPopupFormId: "mbambgcjdr6kv0zhhvt",
  };
  return (
    <div>
      <Helmet>
        <title>Explore Atlearn's Educational Innovations in Case Studies</title>
        <meta
          name="description"
          content="Uncover Atlearn's groundbreaking educational strategies in case studies. Learn how innovation drives better learning outcomes for all."
        />
        <link rel="canonical" href={`${BASE_URL}/case-studies`} />
      </Helmet>
      {/* banner section */}

      <section>
        {/* bannaer section */}
        <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
          <div className="container">
            <div className="flex flex-col items-center text-center w-full lg:w-83% xl:w-3/4 mx-auto">
              {/* banner Left */}
              <div data-aos="fade-up" className="w-4/5">
                <h2 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                  EDUCATION SOLUTION
                </h2>
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
        <div className="overflow-hidden">
          <div className="container py-50px md:pt-60px lg:pt-50px lg:pb-20 2xl:pb-100px relative z-0">
            <div className="block opacity-100 transition-opacity duration-150 ease-linear">
              <div className="flex flex-col gap-y-6">
                {/* event 1 */}
                <Link to={"/case-studies/atlearn-online-classRoom"} title="Atlearn Online Classroom">
                  <div
                    className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:items-star bg-whiteColor dark:whiteColor-dark p-15px md:p-5 transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
                    data-aos="fade-up"
                  >
                    {/* event thumb */}

                    <div className="flex-shrink-0">
                      <img
                        // src="./assets/images/event/event__1.png"
                        src={ONLINE_CLASSROOM_image}
                        alt=" Atlearn Online Classroom"
                        title=" Atlearn Online Classroom"
                        className="w-170px"
                      />
                    </div>
                    {/* event content */}
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <a
                          href="/"
                          title=" Atlearn Online Classroom"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Atlearn Online Classroom
                        </a>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        Our SaaS online classroom solution atlearn
                        (www.atlearn.in) helps you get connected wherever you
                        are using the best of the video conferencing features
                        that we have to offer. Whatever your type of meetings
                        you have – Business , Professional or on Field atlearn
                        is there for you to stay connected
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/atlearn-online-classRoom"}
                          title=" Atlearn Online Classroom"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Read More
                          <i className="icofont-simple-right" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </Link>

                {/* event 2 */}
                <Link to={"/case-studies/student-counselling-portal"} title="Student Counselling Portal">
                  <div
                    className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:justify-between bg-whiteColor dark:whiteColor-dark p-15px md:p-5 md:pl-45px transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
                    data-aos="fade-up"
                  >
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/student-counselling-portal"}
                          title="Student Counselling Portal"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Student Counselling Portal
                        </Link>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        The Student Counselling Portal that we developed for our
                        client provides counseling 360-degree view of the
                        students in the school community by utilizing both
                        non-academic and academic data
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                          to={"/case-studies/student-counselling-portal"}
                          title="Student Counselling Portal"
                        >
                          Read More
                          <i className="icofont-simple-right" />
                        </Link>
                      </p>
                    </div>

                    {/* event thumb */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-end">
                      <img
                        // src="./assets/images/event/event__2.png"
                        src={Student_conselling_image}
                        alt=" Student Counselling Portal"
                        title=" Student Counselling Portal"
                        className="w-170px"
                      />
                    </div>
                  </div>
                </Link>
                {/* event 3 */}
                <Link to={"/case-studies/online-student-management-portal"} title="Online student management portal">
                  <div
                    className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:items-star bg-whiteColor dark:whiteColor-dark p-15px md:p-5 transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
                    data-aos="fade-up"
                  >
                    {/* event thumb */}
                    <div className="flex-shrink-0">
                      <img
                        // src="./assets/images/event/event__3.png"
                        src={Online_student_image}
                        alt="Online student management portal"
                        title="Online student management portal"
                        className="w-170px"
                      />
                    </div>
                    {/* event content */}
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/online-student-management-portal"}
                          title="Online student management portal"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Online student management portal
                        </Link>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        The future of education is here, and it’s all about
                        online student management portals. Know how our student
                        management online portals are revolutionizing the online
                        education system in schools and colleges.With the rise
                        of technology, online student management portals are
                        becoming the new norm in education. Our portals offer a
                        range of benefits for both students and educators, from
                        easy access to course materials to streamlined
                        communication and collaboration.
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/online-student-management-portal"}
                          title="Online student management portal"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Read More
                          <i className="icofont-simple-right" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </Link>

                {/* event 4 */}
                <Link to={"/case-studies/teach-courses-live"} title="Teach Courses Live.">
                  <div
                    className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:justify-between bg-whiteColor dark:whiteColor-dark p-15px md:p-5 md:pl-45px transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
                    data-aos="fade-up"
                  >
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/teach-courses-live"}
                          title="Teach Courses Live."
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Teach Courses Live.
                        </Link>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        Our SaaS solution TEACH COURSES LIVE helps you get
                        connected wherever you are using the best of the online
                        classroom features that we have to offer. Whatever type
                        of meetings you have – Business, Professional, or the
                        field we are there for you to stay connected
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                          to={"/case-studies/teach-courses-live"}
                          title="Teach Courses Live."
                        >
                          Read More
                          <i className="icofont-simple-right" />
                        </Link>
                      </p>
                    </div>
                    {/* event thumb */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-end">
                      <img
                        // src="./assets/images/event/event__4.png"
                        src={Teach_Courses_Live_image}
                        alt="Teach Courses Live."
                        title="Teach Courses Live."
                        className="w-170px"
                      />
                    </div>
                  </div>
                </Link>

                {/* event 5 */}
                <Link to={"/case-studies/atlearn-mobile-app"} title="Atlearn (Online Classroom) Mobile App">
                  <div
                    className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:items-star bg-whiteColor dark:whiteColor-dark p-15px md:p-5 transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
                    data-aos="fade-up"
                  >
                    {/* event thumb */}
                    <div className="flex-shrink-0">
                      <img
                        // src="./assets/images/event/event__3.png"
                        src={Online_Classroom_image}
                        alt="Atlearn (Online Classroom) Mobile App"
                        title="Atlearn (Online Classroom) Mobile App"
                        className="w-170px"
                      />
                    </div>
                    {/* event content */}
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/atlearn-mobile-app"}
                          title="Atlearn (Online Classroom) Mobile App"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Atlearn (Online Classroom) Mobile App
                        </Link>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        ATLEARN mobile learning platform comes for Android and
                        iOS devices where learners will log in, check
                        notifications, attend live classes and access self-paced
                        online sessions from their smartphones and tablets.
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                          to={"/case-studies/atlearn-mobile-app"}
                          title="Atlearn (Online Classroom) Mobile App"
                        >
                          Read More
                          <i className="icofont-simple-right" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </Link>

                {/* event 6 */}
                <Link to={"/case-studies/course-management"} title="Course Management">
                  <div
                    className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:justify-between bg-whiteColor dark:whiteColor-dark p-15px md:p-5 md:pl-45px transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
                    data-aos="fade-up"
                  >
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/course-management"}
                          title="Course Management"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Course Management
                        </Link>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        We specialize in designing, setting up, and managing
                        online courses with a focus on social constructionist
                        pedagogy, encouraging collaboration, activities, and
                        critical reflection. Our courses are optimized for 100%
                        online learning or as a supplement to face-to-face
                        education. Featuring a lightweight, low-tech, and
                        efficient browser interface, our platform supports
                        multi-language localization, customizable themes, and
                        strong security measures with encrypted data and
                        validated forms. Courses are easily searchable,
                        categorized, and include guest-accessible descriptions.
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <Link
                          to={"/case-studies/course-management"}
                          title="Course Management"
                          className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Read More
                          <i className="icofont-simple-right" />
                        </Link>
                      </p>
                    </div>
                    {/* event thumb */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-end">
                      <img
                        // src="./assets/images/event/event__4.png"
                        src={content_creator_image}
                        alt="Course Management"
                        title="Course Management"
                        className="w-170px"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <CTASection data={CTA} />
      </section>
    </div>
  );
}

export default CaseStudies;
