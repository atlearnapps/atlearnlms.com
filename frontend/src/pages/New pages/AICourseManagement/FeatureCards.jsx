import React from 'react'
import ai_powered_course_creation from "src/assets/images/AICourseManagement/ai_powered_course_creation.webp"
import schedule_conduct_live_classes from "src/assets/images/AICourseManagement/schedule_conduct_live_classes.webp"

function FeatureCards() {
  return (
    <div>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6 bg-gray-100 dark:bg-bodyBg-dark">
          {/* Card 1 */}
          <div className=" group bg-white hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor   rounded-2xl p-6 w-full md:w-1/3 shadow-dropdown-secodary">
            <div className="relative w-full h-40 mb-4">
              <img
                src={ai_powered_course_creation}
                alt="AI-Powered Course Creation"
                title='AI-Powered Course Creation'
                className="w-full h-full object-cover border rounded-lg2 shadow-lg"
              />
            </div>
            <h3 className=" capitalize text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
              AI-Powered Course Creation
            </h3>
            <p className="text-contentColor group-hover:text-whiteColor leading-29px">
              Transform your teaching experience with AI-driven course
              management tools.
            </p>
            <ul className="space-y-5 mb-2 mt-2">
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong>Smart Content Suggestions - </strong>
                  AI recommends materials, quizzes, and resources based on
                  topics.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong>Create Courses in Minutes - </strong>
                  Use AI to structure engaging and interactive courses
                  effortlessly.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong>Multi-Format Support - </strong>
                  Upload videos, PDFs, interactive content, and more.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark  dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong> Real-Time Collaboration - </strong>
                  Engage with students through discussions, live sessions, and
                  feedback.
                </p>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className=" md:mt-[150px] group bg-white hover:bg-primaryColor hover:text-whiteColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor   rounded-2xl p-6 w-full md:w-1/3 shadow-dropdown-secodary">
            <div className="relative w-full h-40 mb-4">
              <img
                src={schedule_conduct_live_classes}
                alt="Schedule & Conduct Live Classes"
                title='Schedule & Conduct Live Classes'
                className="w-full h-full object-cover border rounded-lg2 shadow-lg"
              />
            </div>
            <h3 className=" capitalize text-size-22 sm:text-size-17 md:text-size-22 lg:text-size-17 2xl:text-size-22 leading-29px sm:leading-15px md:leading-29px lg:leading-15px 2xl:leading-29px font-semibold mb-5px hover:text-secondaryColor font-hind  dark:text-whiteColor dark:hover:text-secondaryColor  dark:transition-all dark:duration-300">
              Schedule & Conduct Live Classes
            </h3>
            <p className="text-contentColor group-hover:text-whiteColor leading-29px">
              Seamlessly integrate live coaching sessions into your course
              structure.
            </p>
            <ul className="space-y-5 mb-2 mt-2">
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong>Built-in Video Conferencing - </strong>
                  Integrated with Zoom, Google Meet & more.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong>Auto-Recorded Sessions - </strong>
                  Never miss a class; AI-powered auto-recording available.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong> Flexible Scheduling - </strong>
                  Manage multiple batches with different time slots.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark dark:text-whiteColor" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark group-hover:text-whiteColor">
                  <strong> Interactive Learning - </strong>
                  Conduct polls, quizzes, and live discussions for enhanced
                  engagement.
                </p>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default FeatureCards
