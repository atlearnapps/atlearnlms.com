import React, { useEffect, useState } from "react";
import { blogContent } from "src/Page_Content/blogData";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_URL } from "src/apiClients/config";
function Blog() {
  const itemsPerPage = 3;
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const { searchQuery } = useSelector((state) => state.searchBlog);

  const filteredContent = blogContent
  .filter((section) =>
    section.heading.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .reverse(); // Reverse order after filtering

const [currentPage, setCurrentPage] = useState(1);

// Calculate total pages
const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

// Slice courses based on pagination (already reversed)
const paginatedBlogs = filteredContent
  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  .reverse();



  return (
    <div>
      <Helmet>
        <title>Atlearn Blogs | Insights into Learning, AI, and Education</title>
        <meta
          name="description"
          content="Explore expert insights on AI-powered LMS, virtual learning, and education trends. Discover how Atlearn revolutionizes teaching and learning experiences."
        />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
      </Helmet>
      <div id="explore_blogs">
        {/* blogs */}
        {filteredContent.length > 0 ? (
          paginatedBlogs
            .slice()
            .reverse()
            .map((section, index) => (
              <div key={index} className="group shadow-blog2" data-aos="fade-up">
                {/* blog thumbnail */}
                <div className="overflow-hidden relative">
                  <img src={section?.image} alt="" className="w-full" />
                  {/* <div className="text-size-22 leading-6 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 right-5">
                              <h3>
                                24 <br />
                                Feb
                              </h3>
                            </div> */}
                </div>
                {/* blog content */}
                <div className="pt-26px pb-5 px-30px">
                  <h3 className="text-2xl md:text-size-32 lg:text-size-28 2xl:text-size-34 leading-34px md:leading-10 2xl:leading-13.5 font-bold text-blackColor2 hover:text-primaryColor dark:text-blackColor2-dark dark:hover:text-primaryColor">
                    {section?.heading}
                  </h3>
                  <div className="mb-14px pb-19px border-b border-borderColor dark:border-borderColor-dark">
                    <ul className="flex flex-wrap items-center gap-x-15px">
                      <li>
                        <span className="text-contentColor text-sm hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
                          <i className="icofont-calendar" /> {section?.date}
                        </span>
                      </li>
                      <li>
                        <span className="text-contentColor text-sm hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
                          <i className="icofont-speech-comments" /> 0 Comments
                        </span>
                      </li>
                    </ul>
                  </div>
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base text-blackColor2 dark:text-blackColor2-dark mb-15px !leading-30px"
                      dangerouslySetInnerHTML={{
                        __html: paragraph,
                      }}
                    />
                  ))}
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        to={`/blog/${section?.heading?.replace(/\s+/g, "-")}`}
                        // onClick={() =>
                        //   navigate(`/blog/${section?.heading?.replace(/\s+/g, '-')}`)
                        // }
                        // to={`/blog-details`}

                        className="uppercase text-secondaryColor hover:text-primaryColor"
                      >
                        READ MORE <i className="icofont-double-right" />
                      </Link>
                    </div>
                    {/* <div className="text-primaryColor hover:text-secondaryColor space-y-1">
                                <a href="/">
                                  <i className="icofont-share bg-whitegrey1 dark:bg-whitegrey1-dark hover:text-whiteColor hover:bg-primaryColor w-8 h-7 leading-7 text-center inline-block rounded transition-all duration-300" />
                                </a>
                                <a href="/">
                                  <i className="icofont-heart bg-whitegrey1 dark:bg-whitegrey1-dark hover:text-whiteColor hover:bg-primaryColor w-8 h-7 leading-7 text-center inline-block rounded transition-all duration-300" />
                                </a>
                              </div> */}
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="flex items-center justify-center min-h-64 ">
            <h1 className="text-2xl font-bold text-gray-800 p-2">
              No blog posts found for "{searchQuery}"
            </h1>
          </div>
        )}

        {/* pagination */}
        {filteredContent?.length > 0 && (
          <div>
            <ul className="flex items-center justify-center gap-4 mt-10 mb-6">
              {/* Previous Button */}
              <li>
                <button
                  className={`w-10 h-10 md:w-12 md:h-12 text-center bg-whitegrey1 dark:bg-whitegrey1-dark ${
                    currentPage === 1
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-primaryColor hover:text-whiteColor"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <i className="icofont-double-left" />
                </button>
              </li>

              {/* Page Numbers with Ellipsis */}
              {totalPages <= 7 ? (
                // Show all pages if there are 7 or fewer
                Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      className={`w-10 h-10 md:w-12 md:h-12 text-center ${
                        currentPage === i + 1
                          ? "bg-primaryColor text-whiteColor"
                          : "bg-whitegrey1 text-blackColor2 hover:bg-primaryColor hover:text-whiteColor"
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))
              ) : (
                <>
                  {/* First Page */}
                  <li>
                    <button
                      className={`w-10 h-10 md:w-12 md:h-12 text-center ${
                        currentPage === 1
                          ? "bg-primaryColor text-whiteColor"
                          : "bg-whitegrey1 text-blackColor2 hover:bg-primaryColor hover:text-whiteColor"
                      }`}
                      onClick={() => setCurrentPage(1)}
                    >
                      1
                    </button>
                  </li>

                  {/* Left Ellipsis */}
                  {currentPage > 4 && <li>...</li>}

                  {/* Middle Page Numbers */}
                  {Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
                    .filter((page) => page > 1 && page < totalPages)
                    .map((page) => (
                      <li key={page}>
                        <button
                          className={`w-10 h-10 md:w-12 md:h-12 text-center ${
                            currentPage === page
                              ? "bg-primaryColor text-whiteColor"
                              : "bg-whitegrey1 text-blackColor2 hover:bg-primaryColor hover:text-whiteColor"
                          }`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      </li>
                    ))}

                  {/* Right Ellipsis */}
                  {currentPage < totalPages - 3 && <li>...</li>}

                  {/* Last Page */}
                  <li>
                    <button
                      className={`w-10 h-10 md:w-12 md:h-12 text-center ${
                        currentPage === totalPages
                          ? "bg-primaryColor text-whiteColor"
                          : "bg-whitegrey1 text-blackColor2 hover:bg-primaryColor hover:text-whiteColor"
                      }`}
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      {totalPages}
                    </button>
                  </li>
                </>
              )}

              {/* Next Button */}
              <li>
                <button
                  className={`w-10 h-10 md:w-12 md:h-12 text-center bg-whitegrey1 dark:bg-whitegrey1-dark ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-primaryColor hover:text-whiteColor"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <i className="icofont-double-right" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
