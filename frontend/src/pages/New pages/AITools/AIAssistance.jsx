import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { getAIAssistants } from "src/apiClients/aiAssessmentsApiService";
import { Atbridges_BASE_URL, SECOND_BASE_URL } from "src/apiClients/config";
import SkeletonLoader from "src/components/New components/Loader/SkeletonLoader";
import MainHeaderText from "src/components/New components/MainHeaderText";
import MeetingDemoModal from "src/components/New components/Modal/MeetingDemoModal";
import ParagraphText from "src/components/New components/ParagraphText";
import PrimaryButton from "src/components/New components/PrimaryButton";
import SectionHeading from "src/components/New components/SectionHeading";
import TagLabel from "src/components/New components/TagLabel";
// import { AIAssistanceProfiles } from "src/Page_Content/AI_Assistance";
import { Why_Choose_AI_Assistance } from "src/Page_Content/AI_tools";
// import { useHandleNavigate } from "src/utils/Navigation/useHandleNavigate";

function AIAssistance() {
  // const { user } = useSelector((state) => state.user);
  // const handleNavigate = useHandleNavigate();
  const [AIAssistants, setAIAssistants] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [demoPopupOpen, setDemoPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    handleGetAissistance();
  }, []);
  const handleGetAissistance = async () => {
    setIsLoading(true);
    try {
      const response = await getAIAssistants();
      if (response?.chat_assistant) {
        setAIAssistants([
          ...response.chat_assistant,
          ...(response.custom_chats || []),
        ]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const visibleItems = showAll ? AIAssistants : AIAssistants?.slice(0, 6);

  const handleFreeDemoOpen = (id) => {
    navigate(`/ai-assistance-chat/${id}`);
    // if (user) {
    //   // handleNavigate("/room?role=Moderator");
    //   handleNavigate(`/ai-assistance-chat/${id}`);
    // } else {
    //   setDemoPopupOpen(true);
    // }
  };

  const handleFreeDemoClose = () => {
    setDemoPopupOpen(false);
  };
  return (
    <div className="container  py-10">
      {isLoading ? (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-whiteColor-dark rounded-2xl p-5 max-w-md w-full shadow-dropdown-secodary"
              >
                <div className="flex-col items-center  gap-4">
                  <div className="flex items-center justify-center mb-2">
                    <SkeletonLoader
                      height="h-20"
                      width="w-20"
                      className="circle"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <SkeletonLoader height="h-4" width="w-[80%]" />
                  </div>
                </div>
                <div className="mt-4">
                  <SkeletonLoader />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        AIAssistants?.length > 0 && (
          <>
            <div className="text-center">
              <TagLabel text={"AI Assistants"} />

              <MainHeaderText>Chat with Smart AI Assistants and Learn Smarter</MainHeaderText>

              <ParagraphText>We Can Help Create Your Custom AI</ParagraphText>
            </div>
            <div className="tab-contents">
              {/* grid ordered cards */}
              <div className="">
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-30px">
                  {visibleItems?.map((item, index) => (
                    <div key={index} className="group ">
                      <div
                        className="tab-content-wrapper h-full flex flex-col group-hover:shadow-container "
                        data-aos="fade-up"
                      >
                        <div
                          // onClick={() => handleFreeDemoOpen(item.chat_code)}
                          onClick={() => {
                            const url = `${SECOND_BASE_URL}/ai-chat/${item?.chat_code}`;
                            window.open(url, "_blank");
                          }}
                          className="cursor-pointer p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-col h-full text-center"
                        >
                          <div className="flex justify-center mt-4">
                            <img
                              className="w-24 h-24 rounded-full object-cover transition-all duration-300 group-hover:scale-110  "
                              src={`${Atbridges_BASE_URL}/${item?.logo}`}
                              alt="Coach Avatar"
                              title={item?.sub_name}
                            />
                          </div>

                          <div className="">
                            <div
                              // onClick={() => handleFreeDemoOpen(item.chat_code)}
                              className="  cursor-pointer text-lg font-semibold text-blackColor mb-2px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              {item?.name}
                            </div>
                          </div>
                          <div>
                            <ParagraphText>{item?.sub_name}</ParagraphText>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {AIAssistants?.length > 6 && (
                  <div className="flex items-center justify-center mt-4">
                    <PrimaryButton
                      onClick={() => setShowAll(!showAll)}
                      primary={true}
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </PrimaryButton>
                  </div>
                )}
              </div>
            </div>
          </>
        )
      )}

      <div className="mt-4">
        <SectionHeading
          data={{
            heading: "Top Reasons to Use Atlearn's AI Learning Assistants",
          }}
          center={true}
        />
        <section>
          <div className=" mt-8">
            <div className="flex flex-wrap justify-center gap-6 pt-10 md:pt-0 pb-24">
              {Why_Choose_AI_Assistance?.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] lg:w-[30%] pt-5 pb-4 px-2 rounded-lg bg-white text-center hover:bg-primaryColor dark:bg-borderColor-dark dark:hover:bg-secondaryColor group shadow-dropdown-secodary"
                  data-aos="fade-up"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={item?.icon}
                      alt={item?.title}
                      title={item?.title}
                      className="w-12 h-12 group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <h4 className="text-blackColor text-lg font-medium group-hover:text-blackColor-dark dark:text-blackColor-dark">
                      {item?.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <MeetingDemoModal
        open={demoPopupOpen}
        handleClose={handleFreeDemoClose}
      />
    </div>
  );
}

export default AIAssistance;
