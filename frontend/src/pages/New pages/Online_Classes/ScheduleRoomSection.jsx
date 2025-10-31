import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClients from "src/apiClients/apiClients";
import { formatDateRange } from "src/utils/formateDateRange";
import { calculateTimeDifference } from "src/utils/FormateDateUtils";
import coverImage from "src/assets/images/online-classes/New/Classroom_Content_Online_Courses_Cover.webp";
import tutorCoverImage from "src/assets/images/online-classes/New/tutorCoverImage1.jpg";
import { SECOND_BASE_URL } from "src/apiClients/config";
function ScheduleRoomSection() {
  const navigate = useNavigate();
  const [scheduleRoom, setScheduleRoom] = useState([]);
  useEffect(() => {
    // fetchLiveRooms();
    fetchScheduleRoom();
  }, []);

  const fetchScheduleRoom = async () => {
    try {
      const response = await apiClients.sheduledMeetings();
      // const response = await apiClients.scheduleCount(true);
      if (response?.data) {
        setScheduleRoom(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {scheduleRoom?.length > 0 && (
        <section>
          <div>
            <div className="container-fluid">
              {/* heading */}
              <div data-aos="fade-up">
                <h3
                  className="text-center text-3xl md:text-[35px] lg:text-size-42 leading-[45px] 2xl:leading-[45px] md:leading-[50px] font-bold mb-5 md:mb-10 text-blackColor dark:text-blackColor-dark"
                  data-aos="fade-up"
                >
                  Join Our Online Meetings
                </h3>
              </div>
              {/* featured cards */}
              {/*meeting cards section */}
              <section>
                <div
                  className="flex flex-wrap justify-center gap-6 pt-10 md:pt-0 pb-24"
                  data-aos="fade-up"
                >
                  {scheduleRoom?.slice(0, 4)?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        // navigate(
                        //   `/Join-meeting?roomId=${item?.room?.friendly_id}&scheduleId=${item?.id}`
                        // )
                        {
                          const url = `${SECOND_BASE_URL}/Join-meeting?roomId=${item?.room?.friendly_id}&scheduleId=${item?.id}`;
                          window.open(url, "_blank");
                        }
                      }
                      className="w-[301px] flex"
                      data-aos="fade-up"
                    >
                      <div className="flex flex-col flex-grow bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark border-2 border-transparent hover:border-secondaryColor hover:rounded-md p-[15px] w-full transition-all duration-300 hover:-translate-y-[5px] cursor-pointer">
                        {/* Card Image */}
                        <div className="mb-4 flex justify-center items-center h-[150px] overflow-hidden">
                          <img
                            loading="lazy"
                            src={
                              item?.room?.cover_image_url
                                ? `${process.env.REACT_APP_OVERRIDE_HOST}/api/images/${item?.room?.cover_image_url}`
                                : coverImage
                            }
                            alt="cover"
                            title="Atlearn"
                            className="w-full h-full object-contain border rounded-md"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="flex-grow">
                          <div className="flex flex-wrap justify-between items-center mb-[15px]">
                            <div className="flex items-center">
                              <i className="icofont-calendar pr-[5px] text-primaryColor text-lg" />
                              <span className="text-sm text-black dark:text-blackColor-dark">
                                {
                                  formatDateRange(
                                    item?.startDate,
                                    item?.endDate
                                  ).formattedStartDate
                                }
                              </span>
                            </div>
                            <div className="flex items-center">
                              <i className="icofont-clock-time pr-[5px] text-primaryColor text-lg" />
                              <span className="text-sm text-black dark:text-blackColor-dark">
                                {calculateTimeDifference(
                                  item.startDate,
                                  item.endDate
                                )}
                              </span>
                            </div>
                          </div>
                          <a
                            href={`${SECOND_BASE_URL}/Join-meeting?roomId=${item?.room?.friendly_id}&scheduleId=${item?.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item?.title}
                            className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-secondaryColor dark:hover:text-primaryColor"
                          >
                            {item?.title}
                          </a>
                        </div>

                        <p className="text-sm text-contentColor dark:text-contentColor-dark flex items-center">
                          Starting Time:
                          <span className="text-xl  font-bold text-primaryColor ml-[10px] dark:text-blackColor-dark">
                            {
                              formatDateRange(item.startDate, item.endDate)
                                .formattedStartTime
                            }
                          </span>
                        </p>
                        {/* Speaker Section */}
                        <div className="pt-[15px] border-t border-borderColor mt-4">
                          <div className="text-xs flex items-center text-contentColor hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
                            <img
                              loading="lazy"
                              className="w-[50px] h-[50px] rounded-full mr-[15px] object-cover"
                              src={
                                item?.room?.user?.avatar
                                  ? `${process.env.REACT_APP_OVERRIDE_HOST}/api/images/${item?.room?.user?.avatar}`
                                  : tutorCoverImage
                              }
                              alt="speaker"
                              title="Speaker"
                            />
                            <div>
                              <span>Speaker:</span>
                              <h3 className="text-lg font-bold text-blackColor dark:text-blackColor-dark">
                                {item?.room?.user?.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {scheduleRoom?.length > 4 && (
                  <div className="flex justify-center" data-aos="fade-up">
                    <a
                      href={`${SECOND_BASE_URL}/join-meetings`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Online Classes"
                      className="text-size-15 px-47px py-15px bg-primaryColor text-whiteColor border border-primaryColor hover:text-primaryColor hover:bg-whiteColor dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor mt-10 rounded uppercase"
                    >
                      More Online Meetings
                    </a>
                  </div>
                )}
              </section>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ScheduleRoomSection;
