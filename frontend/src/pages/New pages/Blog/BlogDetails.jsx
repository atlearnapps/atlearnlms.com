import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "src/apiClients/config";
import SendeFormModal from "src/components/New components/Modal/SendeFormModal";
import { blogContent } from "src/Page_Content/blogData";
import { useHandleNavigate } from "src/utils/Navigation/useHandleNavigate";

function BlogDetails() {
  // const location = useLocation();
  const blog_id = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const handleNavigate = useHandleNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (typeof window.senderForms !== "undefined") {
        window.senderForms.render();
      } else {
        window.addEventListener("SenderLoaded", () => {
          if (typeof window.senderForms !== "undefined") {
            window.senderForms.render();
          } else {
            console.error("senderForms is still not defined");
          }
        });
      }
    }, 0);
  }, [isOpenModal]);

  // const queryParams = new URLSearchParams(location.search);
  // const name = queryParams.get("name") || "";
  const name = blog_id.id;
  const modifiedname = name.toLowerCase().replace(/-+/g, " ");

  const { searchQuery } = useSelector((state) => state.searchBlog);

  // const matchingSection = blogContent?.find((section) => {
  //   const query = (searchQuery || name).toLowerCase();
  //   return query && section.heading.toLowerCase().includes(query);
  // });
  const matchingSection = blogContent?.find((section) => {
    const query = searchQuery ? searchQuery.toLowerCase() : modifiedname;

    return query && section.heading.toLowerCase().includes(query);
  });

  const handleClick = (link) => {
    if (link === "/blog" || link === "/ai" || link === "/contact") {
      navigate(link);
    } else {
      handleNavigate(link);
    }
  };
  const handleCTA = (cta) => {
    const { ctaLink, ctaId } = cta || {};

    if (ctaLink) {
      handleClick(ctaLink);
    } else if (ctaId === "calendly") {
      setIsOpen(true);
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          {matchingSection?.meta_title ||
            "Gain Insights with Atlearn's Thought-Provoking Blogs"}
        </title>
        <meta
          name="description"
          content={
            matchingSection?.meta_description ||
            "Explore Atlearn's blogs for valuable insights and tips. Stay informed, inspired, and engaged with thought-provoking educational content."
          }
        />
        <link rel="canonical" href={`${BASE_URL}/blog/${name}`} />
      </Helmet>
      {matchingSection ? (
        <div data-aos="fade-up">
          {/* blog thumbnail */}
          <div className="overflow-hidden relative mb-30px">
            <img
              src={matchingSection?.image}
              alt={matchingSection?.heading}
              title={matchingSection?.heading}
              className="w-full"
            />
          </div>
          {/* blog content */}
          <div>
            <h3
              data-aos="fade-up"
              className="text-2xl md:text-size-32 lg:text-size-28 2xl:text-size-34 leading-34px md:leading-10 2xl:leading-13.5 font-bold text-blackColor2 hover:text-primaryColor dark:text-blackColor2-dark dark:hover:text-primaryColor"
            >
              {matchingSection?.heading}
            </h3>
            {matchingSection.paragraphs?.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-lg text-blackColor2 dark:text-blackColor2-dark mb-25px !leading-30px"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{
                  __html: paragraph,
                }}
              />
            ))}
            {matchingSection.subSections?.map((subSection, subIndex) => (
              <div key={subIndex}>
                <h4
                  className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark  !leading-30px"
                  data-aos="fade-up"
                >
                  {subSection.subHeading}
                </h4>

                <h4 className=" mb-25px text-xl font-bold text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                  {subSection.minHeading}
                </h4>

                {subSection.paragraphs?.map((subParagraph, spIndex) => (
                  <p
                    key={spIndex}
                    className="text-lg text-blackColor2 dark:text-blackColor2-dark mb-25px !leading-30px mt-4"
                    data-aos="fade-up"
                    dangerouslySetInnerHTML={{
                      __html: subParagraph,
                    }}
                  />
                ))}
                {subSection?.image && (
                  <div className="overflow-hidden relative mb-30px">
                    <img
                      src={subSection?.image}
                      alt={subSection.subHeading || "Atlearn"}
                      title={subSection.subHeading || "Atlearn"}
                      className="w-full"
                    />
                  </div>
                )}
                {subSection.features && (
                  <ul
                    data-aos="fade-up"
                    className="text-blackColor2 dark:text-blackColor2-dark mt-4"
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      lineHeight: "1.8em",
                      marginBottom: "20px",
                    }}
                  >
                    {subSection.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        {feature.heading && (
                          <strong
                            dangerouslySetInnerHTML={{
                              __html: feature.heading,
                            }}
                          />
                        )}
                        {feature.heading && ":"}

                        <span
                          dangerouslySetInnerHTML={{
                            __html: feature.description,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {subSection.cta && (
                  <div className="bg-secondaryColor text-white text-center py-10  px-4 flex  flex-col items-center mb-4">
                    <h2 className="text-3xl font-semibold mb-2">
                      {subSection.cta.heading}
                    </h2>
                    <p className="text-lg mb-6">{subSection.cta.description}</p>
                    <div
                      onClick={() => handleCTA(subSection.cta)}
                      className=" cursor-pointer bg-white text-primaryColor flex items-center gap-2 px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                      {/* <div className="bg-pink-500 text-white p-2 rounded-full">
                    📢
                  </div> */}
                      {subSection.cta.ctaName}
                    </div>
                  </div>
                )}

                {subSection.VideoLink && (
                  <div className="relative overflow-hidden mb-30px">
                    <iframe
                      width="100%"
                      height="315"
                      // src={`https://www.youtube.com/embed/${subSection.VideoLink}`}
                      src={`https://www.youtube.com/embed/${subSection.VideoLink}?autoplay=1&loop=1&playlist=${subSection.VideoLink}&mute=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-64 ">
          <h1 className="text-2xl font-bold text-gray-800 p-2">
            No blog posts available at this time. Please check back later!
          </h1>
        </div>
      )}
      <PopupModal
        // url="https://calendly.com/atlearn-lms/30min"
        url="https://calendly.com/atlearn-lms/atlearn-demo"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
      <SendeFormModal
        open={isOpenModal}
        handleClose={setIsOpenModal}
        formId={
          matchingSection?.embedPopupFormId
            ? matchingSection?.embedPopupFormId
            : "m86ybxeiepyrgnzdaiu"
        }
      />
    </div>
  );
}

export default BlogDetails;
