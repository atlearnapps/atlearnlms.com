import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { blogContent } from "src/Page_Content/blogData";
import { setSearchQuery } from "src/Redux/searchBlogSlice";
import { useSocialNavigate } from "src/utils/Navigation/useSocialNavigate";
function BlogLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchQuery, searchResults, loading, error } = useSelector(
    (state) => state.searchBlog
  );
  const handleSocialNavigate = useSocialNavigate();
  return (
    <div>
      <Helmet>
        <title>Atlearn Blogs | Insights into Learning, AI, and Education</title>
        <meta
          name="description"
          content="Explore expert insights on AI-powered LMS, virtual learning, and education trends. Discover how Atlearn revolutionizes teaching and learning experiences."
        />
      </Helmet>
      <section>
        {/* bannaer section */}
        <div className="container2-xl bg-darkdeep1 py-50px  rounded-2xl relative overflow-hidden shadow-brand">
          <div className="container">
            <div className="flex flex-col items-center text-center w-full lg:w-83% xl:w-3/4 mx-auto">
              {/* banner Left */}
              <div data-aos="fade-up" className="w-4/5">
                {/* <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                  EDUCATION SOLUTION
                </h3> */}
                <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold ">
                  Blogs
                  <span className="text-secondaryColor">.</span>
                </h1>
                <p className="text-size-15 md:text-lg text-white  font-medium">
                  Discover Insights and Trends Shaping the Future of Learning
                  and Education
                </p>
                {/* <div>
                  <button
                    onClick={() => navigate("/blog#explore_blogs")}
                    className=" mt-2 text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                  >
                    Explore Now
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div>
            {/* <img
              className="absolute left-1/2 bottom-[15%] animate-spin-slow"
              src="./assets/images/register/register__2.png"
              alt=""
            /> */}
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
            {/* <img
              className="absolute top-[5%] left-[45%]"
              src="./assets/images/herobanner/herobanner__7.png"
              alt=""
            /> */}
          </div>
        </div>
      </section>

      {/* News and blog section */}
      <section>
        <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
            {/* blogs */}
            <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
              {/* blog 1 */}
              <Outlet />
            </div>
            {/* blog sidebar */}
            <div className="lg:col-start-9 lg:col-span-4">
              <div className="flex flex-col">
                {/* search input */}
                <div
                  className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                  data-aos="fade-up"
                >
                  <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                    Search here
                  </h4>
                  <form className="w-full px-4 py-15px text-sm text-contentColor bg-lightGrey10 dark:bg-lightGrey10-dark dark:text-contentColor-dark flex justify-center items-center leading-26px">
                    <input
                      type="text"
                      placeholder="Search Blog"
                      value={searchQuery}
                      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                      className="placeholder:text-placeholder bg-transparent focus:outline-none placeholder:opacity-80 w-full"
                    />
                    <button type="submit">
                      <i className="icofont-search-1 text-base" />
                    </button>
                  </form>
                </div>
                {/*  Recent Post */}
                <div
                  className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                  data-aos="fade-up"
                >
                  <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                    Recent Blogs
                  </h4>
                  <ul className="flex flex-col gap-y-25px">
                    {blogContent
                      ?.slice(-4)
                      .reverse()
                      .map((item, index) => (
                        // <li key={index} className="flex items-center">
                        //   <div
                        //     onClick={() =>
                        //       navigate(`/blog/${item?.heading?.replace(/\s+/g, '-')}`)
                        //     }
                        //     className="w-full cursor-pointer"
                        //   >
                        //     <h3 className="font-bold leading-22px mb-15px">
                        //       <span className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor">
                        //         {item?.heading}
                        //       </span>
                        //     </h3>
                        //   </div>
                        // </li>

                        <li className="flex items-center">
                          <div className="w-2/5 pr-5 relative">
                            <div className="w-full  overflow-hidden flex justify-center items-center">
                              <img
                                src={item?.image}
                                alt=""
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <div className="w-3/5">
                            <span
                              className="w-full text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              {item?.date}
                            </span>
                            <div
                              onClick={() =>
                                navigate(
                                  `/blog/${item?.heading?.replace(/\s+/g, "-")}`
                                )
                              }
                              className="w-full cursor-pointer"
                            >
                              <h3 className="font-bold leading-22px mb-15px">
                                <span className="text-blackColor dark:text-blackColor-dark hover:text-secondary ">
                                  {item?.heading}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* social area */}
                <div
                  className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                  data-aos="fade-up"
                >
                  <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                    Follow Us
                  </h4>
                  <div className="flex gap-37px items-center">
                    <div>
                      <ul className="flex gap-[13px] text-[15px]">
                        <li>
                          <span
                            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-white"
                            onClick={() =>
                              handleSocialNavigate(
                                "https://www.facebook.com/Atlearn.in"
                              )
                            }
                          >
                            <i className="icofont-facebook"></i>
                          </span>
                        </li>
                        <li>
                          <span
                            className=" cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#0077b5] hover:bg-[#005582] text-white"
                            onClick={() =>
                              handleSocialNavigate(
                                "https://www.linkedin.com/company/atlearn"
                              )
                            }
                          >
                            <i className="icofont-linkedin"></i>
                          </span>
                        </li>
                        <li>
                          <span
                            className=" cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90"
                            onClick={() =>
                              handleSocialNavigate(
                                "https://www.instagram.com/atlearn_in/"
                              )
                            }
                          >
                            <i className="icofont-instagram"></i>
                          </span>
                        </li>
                        <li>
                          <span
                            className=" cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white"
                            onClick={() =>
                              handleSocialNavigate(
                                "https://www.youtube.com/@Atlearn_In/featured"
                              )
                            }
                          >
                            <i className="icofont-youtube-play"></i>
                          </span>
                        </li>
                        <li>
                          <span
                            className=" cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#E60023] hover:bg-[#b7001c] text-white"
                            onClick={() =>
                              handleSocialNavigate(
                                "https://in.pinterest.com/atlearnlms/"
                              )
                            }
                          >
                            <i className="icofont-pinterest"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogLayout;
