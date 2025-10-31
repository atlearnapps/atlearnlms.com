import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHandleNavigate } from "src/utils/Navigation/useHandleNavigate";

const ShowcaseSection = ({ data }) => {
  const handleNavigate = useHandleNavigate();
  const handleClick = (link) => {
    handleNavigate(link);
    // if (link === "/blog" || link === "/ai") {
    //   navigate(link);
    // } else {
    //   handleNavigate(link);
    // }
  };
  return (
    <section>
      <div className="overflow-hidden">
        <div className="container mb-25px  relative z-0">
          <div className="block opacity-100 transition-opacity duration-150 ease-linear">
            <div className="flex flex-col gap-y-6">
              {data.map((study, index) => (
                <div key={index} onClick={() => handleClick(study?.link)}>
                  <div
                    className={`flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center 
                    ${
                      index % 2 === 0 ? "md:items-start" : "md:justify-between"
                    } 
                    bg-whiteColor dark:whiteColor-dark p-15px md:p-5 
                    ${index % 2 !== 0 ? "md:pl-45px" : ""} 
                    transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor 
                    dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded`}
                    data-aos="fade-up"
                  >
                    {/* Conditional thumbnail position */}
                    {index % 2 === 0 && (
                      <div className="flex-shrink-0">
                        <img
                          src={study.image}
                          alt={study.title}
                          title={study.title}
                          className="w-170px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="py-18px">
                      <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClick(study.link);
                          }}
                          className=" cursor-pointer hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          {study.title}
                        </div>
                      </h3>
                      <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        {study.description}
                      </p>
                      <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClick(study.link);
                          }}
                          className=" cursor-pointer hover:text-secondaryColor dark:hover:text-secondaryColor"
                        >
                          Read More <i className="icofont-simple-right" />
                        </div>
                      </p>
                    </div>

                    {index % 2 !== 0 && (
                      <div className="flex-shrink-0 flex flex-col items-center md:items-end">
                        <img
                          src={study.image}
                          alt={study.title}
                          title={study.title}
                          className="w-170px"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
