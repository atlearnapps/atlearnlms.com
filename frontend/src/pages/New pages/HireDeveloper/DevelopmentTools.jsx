// import phpIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/php.png";
// import htmlImage from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/html5-60x60xc.png";
// import laravelIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/laravel_logo-60x60xc.png";
// import sqlIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/sql_logo.png";
// import VueIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/vue.png";
// import cssIcon from "src/assets/images/CaseStudies/CaseStudy_AtlearnOnlineClasses/css_icon.png";
// import PHP_icon from "src/assets/images/StackIcons/php.webp";
// import JavaScript_icon from "src/assets/images/StackIcons/js.webp";
// import Python_icon from "src/assets/images/StackIcons/Python.webp";
// import React_icon from "src/assets/images/StackIcons/reactjs.webp";
// import Angular_icon from "src/assets/images/StackIcons/Angular.webp";
// import Laravel_icon from "src/assets/images/StackIcons/Laravel.webp";
// import Node_icon from "src/assets/images/StackIcons/Node JS.webp";
// import Express_icon from "src/assets/images/StackIcons/expressjs.webp";
// import Django_icon from "src/assets/images/StackIcons/django.webp";
// import MySQL_icon from "src/assets/images/StackIcons/mysql.webp";
// import PostgreSQL_icon from "src/assets/images/StackIcons/postgresql.webp";
// import MongoDB_icon from "src/assets/images/StackIcons/mongodb.webp";
// import AWS_icon from "src/assets/images/StackIcons/aws.webp";
// import Azure_icon from "src/assets/images/StackIcons/azure.webp";
// import google_cloud_icon from "src/assets/images/StackIcons/gc.webp";
// import xapiapps_icon from "src/assets/images/StackIcons/xapiapps.webp";

import HeaderText from "src/components/New components/HeaderText";
import ParagraphText from "src/components/New components/ParagraphText";

import Canvas from "src/assets/images/platformsLogo/canvas_1_5x.webp";
import Blackboard from "src/assets/images/platformsLogo/blackboard_1_5x.webp";
import BuddyBoss from "src/assets/images/platformsLogo/buddyboss.webp";
import Moodle from "src/assets/images/platformsLogo/moodle.webp";
import Sakai from "src/assets/images/platformsLogo/sakai_1_5x.webp";
import Docebo from "src/assets/images/platformsLogo/docebo_1_5x.webp";
import LearnWorlds from "src/assets/images/platformsLogo/learnworlds_1_5x.webp";
import WebCT from "src/assets/images/platformsLogo/webct.webp";
import Thinkific from "src/assets/images/platformsLogo/thinkific.webp";
import Kajabi from "src/assets/images/platformsLogo/kajabi_1_5x.webp";
import HighLevel from "src/assets/images/platformsLogo/highlevel_1_5x.webp";
import LearnDash from "src/assets/images/platformsLogo/learn_dash_1_5x.webp";
import Articulate from "src/assets/images/platformsLogo/articulate360_1_5x.webp";
import AdaptLearning from "src/assets/images/platformsLogo/adaptlearning.webp";
import Teachable from "src/assets/images/platformsLogo/teachable.webp";
import Podia from "src/assets/images/platformsLogo/podia_1_5x.webp";
import iSpring from "src/assets/images/platformsLogo/ispring_1_5x.webp";
import Elucidat from "src/assets/images/platformsLogo/elucidat_1_5x.webp";
import H5P from "src/assets/images/platformsLogo/h5p_1_5x.webp";

const tools = [
  {
    category: "Full-Fledged LMS Platforms (Academic + Corporate)",
    icons: [
      Moodle,
      Canvas,
      Blackboard,
      Sakai,
      WebCT,
      Docebo,
      LearnWorlds,
      Thinkific,
      Kajabi,
      HighLevel,
    ],
  },
  {
    category: "WordPress-Based LMS Platforms",
    icons: [LearnDash, BuddyBoss],
  },
  {
    category: "E-Learning Authoring Tools",
    icons: [Articulate, AdaptLearning],
  },
  {
    category: "Course Management Tools",
    icons: [Thinkific, LearnWorlds, Kajabi, Teachable, Podia, HighLevel],
  },
  {
    category: "Course Authoring Tools",
    icons: [Articulate, AdaptLearning, iSpring, Elucidat, H5P],
  },
];

export default function DevelopmentTools() {
  return (
    <div className="container py-10 text-center">
      <HeaderText>Our Technology Stack</HeaderText>
      <ParagraphText>
        We use the latest technologies and frameworks to build and integrate
        robust LMS platforms:
      </ParagraphText>
      <div className="space-y-6">
        {tools.map((section, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow">
            <div className="flex flex-col md:flex-row items-center justify-center ">
              <div className="md:w-1/4 font-semibold text-lg">
                {section.category}
              </div>
              <div className="md:w-3/4 flex flex-wrap gap-8">
                {section.icons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt={section.category}
                    title={section.category}
                    className="h-12"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
