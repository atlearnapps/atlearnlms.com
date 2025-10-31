import { useState } from "react";
import dashboard_image from "src/assets/images/Kids-platforms/storylane1.webp";
// import student_management_image from "src/assets/images/Kids-platforms/student-management.webp";
import student_management_image from "src/assets/images/Kids-platforms/storylane3.webp";

// import add_assignment_image from "src/assets/images/Kids-platforms/add-assignment.webp";
import add_assignment_image from "src/assets/images/Kids-platforms/storylane2.webp";

import Guardian_Dashboard_image from "src/assets/images/Kids-platforms/Guardian-Dashboard.webp";
import child_management_mage from "src/assets/images/Kids-platforms/child-management.webp";
import our_library_image from "src/assets/images/Kids-platforms/our-library.webp";
import publisher_library_image from "src/assets/images/Kids-platforms/publisher-library.webp";
import PublisherImg from "src/assets/images/Kids-platforms/PublisherImg.webp";

const OverviewSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="container pt-70px">
        {/* Overview Heading */}
        <div className="mb-5 md:mb-10 mt-30px" data-aos="fade-up">
          <div className="text-center">
            <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
              Features
            </span>
          </div>
          <h3 className="text-3xl md:text-[35px] lg:text-size-38 3xl:text-size-42 leading-10 mf:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark text-center">
          Kids’ Writing Journey: First Words to First Book 
          </h3>
        </div>

        {/* Overview Tabs */}
        <div data-aos="fade-up" className="tab">
          <div className="tab-links flex flex-wrap md:flex-nowrap justify-center mb-10px lg:mb-50px rounded gap-10px lg:gap-35px">
            {["about", "mission", "vision", "award"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase  shadow-overview-button k before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 ${
                  activeTab === tab
                    ? "active bg-primary text-white dark:bg-secondaryColor dark:text-blackColor-dark"
                    : "text-blackColor dark:bg-whiteColor-dark dark:text-blackColor-dark "
                }`}
              >
                {tab === "about"
                  ? "Teachers Toolkit"
                  : tab === "mission"
                  ? "Home Learning"
                  : tab === "vision"
                  ? "Publishers Hub"
                  : "Authors & Illustrators"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-contents">
            {activeTab === "about" && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Experience our interactive dashboard
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      A dashboard, where you can access a wealth of student
                      activity history, a detailed student list, and captivating
                      graphical representations that track average words and
                      assignments completed by each student. With this
                      comprehensive tool at your fingertips, staying informed
                      and effortlessly tracking student progress becomes a
                      breeze. Dive into insightful analytics and visualizations
                      to gain valuable insights into student performance and
                      engagement, empowering educators to make informed
                      decisions and support student success effectively.
                    </p>
                  </div>

                  <img src={dashboard_image} alt=" Experience our interactive dashboard" title=" Experience our interactive dashboard" className="w-full " />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <img src={add_assignment_image} alt=" Simplify Student Management with Storylane" title=" Simplify Student Management with Storylane" className="" />
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Simplify Student Management with Storylane
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      Teachers benefit from the ease of seamlessly adding and
                      organizing students within their classes. With the ability
                      to modify student information and closely monitor
                      individual progress, educators can stay fully engaged in
                      each student's academic journey. This convenient feature
                      empowers teachers to efficiently manage their classroom
                      dynamics while providing personalized support and guidance
                      to students as they navigate their educational paths.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Storylane Simplifies Class Management.
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      Teachers have the capability to add students to their
                      classes and supervise the roster efficiently. This
                      functionality allows educators to maintain control over
                      class enrollment and keep track of student attendance
                      seamlessly. With this convenient feature, teachers can
                      ensure that their classrooms are well-organized and that
                      all students are accounted for, optimizing the learning
                      environment for everyone involved.
                    </p>
                  </div>

                  <img src={student_management_image} alt="Storylane Simplifies Class Management." title="Storylane Simplifies Class Management." className="" />
                </div>
              </>
            )}

            {activeTab === "mission" && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Experience our interactive dashboard
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      Get ready to dive into an amazing Interactive Dashboard
                      that offers a wide range of books to explore. It's a
                      fantastic opportunity for you and your child to embark on
                      a literary journey together. With story writing for kids
                      in English, you can discover new stories and genres that
                      are carefully selected to captivate young minds and
                      inspire a love for reading. Stay connected and witness
                      your child's progress as they delve into this enriching
                      adventure. This captivating platform will unleash their
                      imagination and ignite a lifelong passion for learning
                      through the power of books.
                    </p>
                  </div>

                  <img src={Guardian_Dashboard_image} alt="" className="" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <img src={child_management_mage} alt="" className="" />
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Child Management
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      Easily incorporate one or multiple children and
                      authenticate their information with our intuitive platform
                      for parents. Monitor your child's development, manage
                      their details, and maintain a comprehensive record of the
                      books they're engaging with—all seamlessly integrated for
                      effortless tracking and updates.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Discover the Latest Books in Our Library
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      Embark on an exploration through a wide variety of
                      collections sourced from numerous publishers, allowing you
                      to curate the perfect selection of books for your child's
                      dashboard. Preview, purchase, and assign books
                      effortlessly, while seamlessly monitoring your child's
                      reading journey at every turn. With user-friendly tools
                      and extensive monitoring capabilities, you can guarantee a
                      customized and rewarding reading journey that perfectly
                      suits your child's interests and developmental
                      requirements.
                    </p>
                  </div>

                  <img src={our_library_image} alt="" className="" />
                </div>
              </>
            )}

            {activeTab === "vision" && (
              <>
                <div>
                  <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Unlock Your Publishing Potential
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    We're exploring potential collaborations with publishers to
                    showcase their books in our library. Through Storylane,
                    guardians and teachers gain access to browse and select
                    books to assign to children. Moreover, children are
                    empowered to independently choose books and utilize images
                    as prompts to inspire their own storytelling adventures.
                    This partnership enhances the breadth of available
                    literature while offering a dynamic platform for children to
                    engage with stories creatively.
                  </p>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    This partnership offers significant benefits to publishers
                    by offering children a platform for creative writing.
                    Moreover, users have the convenience of purchasing books
                    directly from the library, which contributes to increased
                    sales for publishers featured on our platform. This
                    collaborative approach promotes both literacy and commerce,
                    creating a win-win situation for all stakeholders involved.
                  </p>
                  <img
                    src={publisher_library_image}
                    alt=""
                    className="w-1/2 mx-auto"
                  />
                </div>
                <div>
                  <h3 className="mt-2 mb-2 text-center text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Overview on Storylane/Publisher Relationship
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 mb-25px">
                    <ul className="space-y-3 ">
                      <p className="text-contentColor dark:text-contentColor-dark mb-25px text-center">
                        Publisher
                      </p>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Provide secure transmission of stories and
                          illustrations in InDesign format that the publisher
                          has sufficient IP rights to allow for scriptive use.
                        </p>
                      </li>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Provide links for customer purchase path.
                        </p>
                      </li>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Keep Scriptive informed of best-estimate value
                          delivery.
                        </p>
                      </li>
                    </ul>

                    {/* Scriptive */}

                    <ul className="space-y-3 ">
                      <p className="text-contentColor dark:text-contentColor-dark mb-25px text-center">
                        Scriptive
                      </p>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Make accepted partner stories & illustrations
                          available to families through Scriptive products
                          (currently WriteStories and DrawStories).
                        </p>
                      </li>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Protect partner IP through customer contracts and
                          security & monitoring tools.
                        </p>
                      </li>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Set up customer accessible systems of favoriting and
                          purchase click-throughs with metrics visible to
                          IP-owning partners.
                        </p>
                      </li>
                      <li className="flex items-center group">
                        <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                        <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                          Provide free access to early adopting publisher
                          partners.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Opportunities for Book Publishers
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    Freemium is a business model in which a company offers
                    limited features to users at no cost and then charges a
                    premium for supplemental or advanced features
                  </p>
                  <ul className="space-y-3 ">
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Children And Parents Get Direct Exposure To Either
                        Beautiful Illustrations (WriteStories) or Compelling
                        Stories (DrawStories) -- But Never Together.
                      </p>
                    </li>
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        If They Are Moved By One Or the Other, They Can Have the
                        Full Book Experience Only Through Purchasing the Book
                        Through A Readily Available Link.
                      </p>
                    </li>
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        No Longer Dependent On Retailers, Contests, Library
                        Committees, etc. to Reach the Targeted Audience With
                        Moving Stories and Illustrations.
                      </p>
                    </li>
                  </ul>
                  <img src={PublisherImg} alt="" className="w-1/2 mx-auto" />
                </div>
              </>
            )}

            {activeTab === "award" && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Empowering Creators
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      At Storylane, we invite self-published authors and
                      illustrators to collaborate with us and showcase their
                      books on our platform. By partnering with us, your work
                      will gain global visibility, allowing you to reach a
                      broader audience while inspiring children's creativity.
                    </p>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      Together, we can create a vibrant community where young
                      minds flourish through storytelling. Your contributions
                      will not only enhance the literary landscape but also play
                      a vital role in nurturing the imagination of the next
                      generation. Join us in our mission to empower children and
                      watch your work thrive in a supportive and engaging
                      environment.
                    </p>
                  </div>

                  <img src={student_management_image} alt="" className="" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                  <img src={student_management_image} alt="" className="" />
                  <div>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Why Work with Storylane?
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      By partnering with Storylane, you'll have the opportunity
                      to support and nurture children's creative writing
                      abilities. Your stories will gain increased visibility,
                      allowing users to easily discover and purchase your books.
                      Together, we can inspire young minds and foster a love for
                      storytelling!
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Here's how to get started: Solution
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    Do you have a story or illustrated book you'd like to share
                    with us?
                  </p>
                  <ul className="space-y-3 ">
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Connect with Us: Reach out to our team and share your
                        folder containing your stories or illustrations.
                      </p>
                    </li>
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Review Process: Our dedicated Storylane team will review
                        your submissions to ensure they align with our mission
                        and standards.
                      </p>
                    </li>
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Upload & Share: Once approved, your work will be
                        uploaded to our platform, making it accessible to
                        children worldwide.
                      </p>
                    </li>
                  </ul>
                  <p className=" mt-2 text-contentColor dark:text-contentColor-dark mb-25px">
                    Be a part of our journey to cultivate creativity and unleash
                    imagination! Your books will be cherished by young readers
                    around the globe, helping to cultivate a new generation of
                    storytellers. Together, we can make a lasting impact on
                    children's lives through the magic of storytelling. Call us
                    now!
                  </p>
                  <img src={PublisherImg} alt="" className="w-1/2 mx-auto" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
