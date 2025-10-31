import React from "react";
import SectionHeading from "src/components/New components/SectionHeading";
import { socialMediaSlider } from "src/Page_Content/OutreachProgram";
import Instagram_sldeshow from "src/assets/images/OutreachProgram/video/Instagram sldeshow.mp4";
import Youtube from "src/assets/images/OutreachProgram/video/YT slideshow.mp4";
import Linkedin from "src/assets/images/OutreachProgram/video/linkedin slideshow.mp4";
import FB from "src/assets/images/OutreachProgram/video/FB slideshow.mp4";
import Pinterest from "src/assets/images/OutreachProgram/video/Pinterest slideshow.mp4";

function SocialMedia() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800  py-6 ">
        <SectionHeading data={socialMediaSlider} center={true} />
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* image - start */}

            <a
              href="/"
              className="bg-red-500 group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:min-h-80"
            >
              <video
                autoPlay
                muted
                loop
                className="w-full h-48 md:h-64 lg:h-80 rounded-lg shadow-lg"
              >
                <source src={Instagram_sldeshow} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
            </a>

            {/* image - end */}
            {/* image - start */}
            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:min-h-80"
            >
              <video
                autoPlay
                muted
                loop
                className="w-full h-48 md:h-64 lg:h-80 rounded-lg shadow-lg"
              >
                <source src={Youtube} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>

            {/* image - end */}
            {/* image - start */}
            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:min-h-80"
            >
              <video
                autoPlay
                muted
                loop
                className="w-full h-48 md:h-64 lg:h-80 rounded-lg shadow-lg"
              >
                <source src={Linkedin} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>

            <a
              href="/"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:min-h-80"
            >
              <video
                autoPlay
                muted
                loop
                className="w-full h-48 md:h-64 lg:h-80 rounded-lg shadow-lg"
              >
                <source src={FB} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>

            <div className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:min-h-80">
            <video
                autoPlay
                muted
                loop
                className="w-full h-48 md:h-64 lg:h-80 rounded-lg shadow-lg"
              >
                <source src={Pinterest} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* image - end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
