import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import {
  aboutAtlearn,
  aboutAtlearntabs,
  White_Label,
  experience_dynamic_online_class,
  AI_Powered_Course,
  homeCTAForms,
  zoomVirtualMeeting,
  homeCTA,
} from "src/Page_Content/Home";
import ScheduleRoomSection from "../Online_Classes/ScheduleRoomSection";
import { useNavigate } from "react-router-dom";
import apiClients from "src/apiClients/apiClients";
import { useDispatch } from "react-redux";
import { UseAuth } from "src/utils/UseAuth/UseAuth";
import { setUser } from "src/Redux/userSlice";
import { toast } from "react-toastify";
import RoleModal from "src/components/userProfile/modal/RoleModal";
import SocialMediaCarousel from "./SocialMediaCarousel";
import Banner from "./Banner";
import { useAuth0 } from "@auth0/auth0-react";
// import LMSCourses from "./LMSCourses";
import { Helmet } from "react-helmet";
import ServicesTabs from "src/components/New components/ServicesTabs";
import HomeSlider from "./HomeSlider";
import AISection from "./AISection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainHeaderText from "src/components/New components/MainHeaderText";
import ParagraphText from "src/components/New components/ParagraphText";
import Testimonials from "src/components/New components/Testimonials/Testimonials";
import CTAForms from "src/components/New components/CTAForms";
import VideoSection from "src/components/New components/VideoSection";
import shareImage from "src/assets/images/home/atlearn_home.png";
import AtlearnReviews from "src/components/New components/Review/AtlearnReviews";
import SectionHeading from "src/components/New components/SectionHeading";
import SplitSection from "src/components/New components/SplitSection";
import Tilt from "src/components/JS/VanillaTilt";
import NotificationPopup from "src/components/Notification/NotificationPopup";
import SendeFormModal from "src/components/New components/Modal/SendeFormModal";
import CTASection from "src/components/New components/CTASection";
import MeetingDemoModal from "src/components/New components/Modal/MeetingDemoModal";

function Home() {
  const auth = UseAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth0();
  const searchParams = new URLSearchParams(window.location.search);
  const authValue = searchParams.get("auth");
  const message = searchParams.get("message");
  const isDemo = searchParams.get("demo");
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [demoErrorPopup, setDemoErrorPopup] = useState(false);
  const [demoPopupOpen, setDemoPopupOpen] = useState(false);
  const {
    loginWithRedirect,
    // logout,
    // user: authUser,
    // isAuthenticated,
    // isLoading,
  } = useAuth0();
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (auth.user) {
      dispatch(setUser(auth.user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  // const [searchParams] = useSearchParams();

  useEffect(() => {
    if (isDemo === "true") {
      if (auth.user) {
        setDemoErrorPopup(true);
      } else {
        localStorage.removeItem("access_token");
        handleLogin();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDemo, auth.user]);

  useEffect(() => {
    if (user) {
      const url = new URL(window.location.href);
      const afterSlash = url.pathname.substring(1);
      // const queryParams = Object.fromEntries(new URLSearchParams(url.search).entries());

      if (afterSlash === "callback") {
        navigate(`/callback?${url.searchParams.toString()}`);
      } else {
        console.log("Path is not 'callback'. No navigation.");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (authValue) {
      handleAuth(authValue);
    } else if (message) {
      toast.success(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authValue, message]);

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

  const handleAuth = async (token) => {
    try {
      const response = await apiClients.verifyToken(token);
      if (response?.token) {
        if (response.data) {
          if (!response?.data?.role) {
            setUserId(response?.data?.id);
            setRoleModalOpen(true);
          } else {
            // dispatch(setUser(response.data));
            setRoleModalOpen(false);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem(
              "access_token",
              JSON.stringify(response.token)
            );
            if (response?.data?.role?.name === "Administrator") {
              navigate("/organization/dashboard", { replace: true });
            } else {
              navigate("/room", { replace: true });
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = () => {
    setDemoErrorPopup(false);
    // navigate("/settings/mysubscription");
  };

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: `/callback`,
      },
      authorizationParams: {
        prompt: "login",
        login_hint: "demo_teacher@atlearn.in",
      },
    });
  };

  const handleFreeDemoClose = () => {
    setDemoPopupOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>Best Online Courses & Teaching Platforms | ATLEARN LMS</title>
        <meta
          name="description"
          content="Boost e-learning with Atlearn's AI-driven LMS—a top online teaching platform for students & educators. Enhance courses with smart tools & SEO-friendly features"
        />
        <link rel="canonical" href="https://www.atlearn.in" />

        <meta
          property="og:title"
          content="Powerful Learning Management Systems | ATLEARN LMS"
        />
        <meta
          property="og:description"
          content="Explore Atlearn's AI-driven LMS, online classes, and Storylane for kids. Empower students, teachers, and institutes with innovative e-learning tools."
        />
        <meta property="og:image" content={shareImage} />
        <meta property="og:url" content="https://www.atlearn.in" />
        <meta property="og:site_name" content="Atlearn" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="Explore Atlearn's AI-driven LMS, online classes, and Storylane for kids. Empower students, teachers, and institutes with innovative e-learning tools."
        />
        <meta
          name="twitter:title"
          content="Powerful Learning Management Systems | ATLEARN LMS"
        />
        <meta
          name="twitter:description"
          content="Explore Atlearn's AI-driven LMS, online classes, and Storylane for kids. Empower students, teachers, and institutes with innovative e-learning tools."
        />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>

      <div className="bg-transparent">
        {/* banner section */}

        <Banner />

        <section>
          <SplitSection
            data={White_Label}
            headingTop={true}
            descriptionTop={true}
          />
        </section>

        <VideoSection
          data={zoomVirtualMeeting}
          rightSideVideo={true}
          headingTop={true}
        />

        <div className="py-4 bg-[#f5f5f5] dark:dark:bg-lightGrey10-dark">
          <HomeSlider />
        </div>
        <div>
          <CTAForms data={homeCTAForms} />
        </div>

        <AISection />

        <SectionHeading data={aboutAtlearn} center={true} />

        <ServicesTabs tabs={aboutAtlearntabs} />

        <div className="mt-2 mb-4">
          <SplitSection
            data={experience_dynamic_online_class}
            headingTop={true}
          />
          {/* <SliderSection data={experience_dynamic_online_class} /> */}
          <ScheduleRoomSection />
        </div>

        <SplitSection
          data={AI_Powered_Course}
          rightImage={true}
          headingTop={true}
        />
        {/* <SliderSection data={AI_Powered_Course} rightImage={true}  /> */}

        {/* <LMSCourses /> */}

        <AtlearnReviews />

        <Testimonials />

        <section>
          <SocialMediaCarousel />
        </section>

        <section>
          <CTASection data={homeCTA} />
        </section>

        <RoleModal
          open={roleModalOpen}
          handleClose={() => setRoleModalOpen(false)}
          userId={userId}
        />
        <NotificationPopup
          open={demoErrorPopup}
          handleClose={handleModalClose}
          heading={"Welcome back!"}
          message={"You're already logged in to your account"}
        />
        <MeetingDemoModal
          open={demoPopupOpen}
          handleClose={handleFreeDemoClose}
        />
        <SendeFormModal
          open={isOpenModal}
          handleClose={setIsOpenModal}
          formId={
            White_Label?.embedPopupFormId ? White_Label?.embedPopupFormId : ""
          }
        />
      </div>
    </div>
  );
}

export default Home;
