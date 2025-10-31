import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
import LaravelIcon from "src/assets/images/StackIcons/Laravel.webp";
import { useNavigate } from "react-router-dom";
export default function HireLMSDevelopers() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-primary text-white py-16 px-6 md:px-8 overflow-hidden">
      {/* Main Text Content */}
      <div className="relative z-high  max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 ">
          Need a Custom LMS Integration Tailored for Your Business?
        </h1>
<p className="text-sm md:text-lg mb-6">
  Hire expert LMS developers and integrators to enhance your learning platform.
  <br />
  Get top-notch LMS customization and integration services for outstanding results.
</p>
        {/* <button className="border-2 border-white text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-white hover:text-blue-900 transition">
          Hire LMS Experts
          </button> */}
        <button
          onClick={() => navigate("/hire-developers")}
          // onClick={() => setIsOpen(true)}
          className=" text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
        >
          Hire LMS Experts
        </button>
      </div>
      {/* <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Hire the Best Contract Software Developers
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Hire Full Stack Developers from AkraTech for outstanding results.
        </p>
        <button className="border-2 border-white text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-white hover:text-blue-900 transition">
          Hire Developers
        </button>
      </div> */}

      {/* Floating Tech Logos */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <img
            src={VueIcon}
            alt="Vue"
            title="Vue"
            className="w-14 absolute top-16 left-10"
          />
          <img
            src={htmlImage}
            alt="HTML5"
            title="HTML5"
            className="w-14 absolute top-10 left-1/4"
          />
          <img
            src={cssIcon}
            alt="CSS3"
            title="CSS3"
            className="w-14 absolute top-10 right-[200px]"
          />
          <img
            src={sqlIcon}
            alt="MySQL"
            title="MySQL"
            className="w-16 absolute top-24 right-10"
          />
          {/* <img src="/path-to/bootstrap.png" alt="Bootstrap" className="w-14 absolute top-40 right-10" /> */}
          {/* <img src="/path-to/angular.png" alt="Angular" className="w-14 absolute top-40 left-10" /> */}
          <img
            src={phpIcon}
            alt="PHP"
            title="PHP"
            className="w-16 absolute bottom-10 left-1/4"
          />
          {/* <img src="/path-to/python.png" alt="Python" className="w-14 absolute bottom-16 left-12" /> */}
          {/* <img src="/path-to/nodejs.png" alt="Node.js" className="w-14 absolute bottom-16 right-16" /> */}
          <img
            src={LaravelIcon}
            alt="Laravel"
            title="Laravel"
            className="w-14 absolute bottom-10 right-1/4"
          />
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-center flex-wrap gap-4 mt-6">
          <img src={VueIcon} alt="Vue" title="Vue" className="w-10" />
          <img src={htmlImage} alt="HTML5" title="HTML5" className="w-10" />
          <img src={cssIcon} alt="CSS3" title="CSS3" className="w-10" />
          <img src={sqlIcon} alt="MySQL" title="MySQL" className="w-12" />
          {/* <img src="/path-to/bootstrap.png" alt="Bootstrap" className="w-10" />
            <img src="/path-to/angular.png" alt="Angular" className="w-10" /> */}
          <img src={phpIcon} alt="PHP" title="PHP" className="w-12" />
          {/* <img src="/path-to/python.png" alt="Python" className="w-10" />
            <img src="/path-to/nodejs.png" alt="Node.js" className="w-10" /> */}
          <img
            src={LaravelIcon}
            alt="Laravel"
            title="Laravel"
            className="w-10"
          />
        </div>
      </div>
    </div>
  );
}
