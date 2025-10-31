import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import * as Pages from "src/utils/LazyImportsRoutes/lazyImports";
// import { AuthProtect } from "./utils/ProtectRoutes/AuthProtect/AuthProtect";
//Layout
// import ProfileDashboardLayout from "./layouts/dashboard/ProfileDashboardLayout";
// import OrganizationLayout from "./layouts/dashboard/OrganizationLayout";
// import ModeratorLayout from "./layouts/moderator/ModeratorLayout";
import NewLayout from "./components/New components/NewLayout";
import BlogLayout from "./pages/New pages/Blog/BlogLayout";
//------------------------------------------
// import AdminPanel from "./pages/admin-organization/Admin/AdminPanel";
import Callback from "./pages/Callback/Callback";
import Page404 from "./pages/Page404";
import Loader from "./components/New components/Loader/Loader";

// --------------------------------------------------------------------------------------

// import SignIn from "./pages/SignIn/SignIn";
// import SignUp from "./pages/SignUp/SignUp";
// import JoinRoom from "./pages/JoinRoom/JoinRoom";
// import JoinRoomLayout from "./layouts/joinRoom/JoinRoomLayout";
// import PublicRecordes from "./pages/publicRecordes/PublicRecordes";
// import VerifyEmail from "./pages/verifyEmail/VerifyEmail";
// import ForgetPasswordUser from "./pages/ForgetPassword/ForgetPassword";
// import ResetPassword from "./pages/resetPassword/ResetPassword";
// import SuccessPage from "./pages/SuccessPage/SuccessPage";
// import CancelPage from "./pages/CancelPage/CancelPage";
// import Marketplace from "./pages/New pages/Marketplace/Marketplace";

export default function Router() {
  const routes = useRoutes([
    //new template layout

    {
      path: "/",
      element: <NewLayout />,
      children: [
        {
          path: "/",
          element: <Pages.Home />,
        },
        {
          path: "lms-ai",
          element: <Pages.LMS />,
        },
        {
          path: "ai",
          element: <Pages.AI />,
        },
        // {
        //   path: "ai-assistants",
        //   element: <Pages.AITools />,
        // },
        {
          path: "ai-assistance-chat/:id",
          element: <Pages.AIAssistanceChat />,
        },
        {
          path: "kids-learning-platform",
          element: <Pages.KindsPlatform />,
        },
        {
          path: "lms-integration",
          element: <Pages.IntegrationPage />,
        },
        // {
        //   path: "pricing",
        //   element: <Pages.NewPricing />,
        // },
        // {
        //   path: "checkout",
        //   element: <Pages.Checkout />,
        // },
        {
          path: "/",
          element: <BlogLayout />,
          children: [
            {
              path: "/blog",
              element: <Pages.Blog />,
            },
            {
              path: "/blog/:id",
              element: <Pages.BlogDetails />,
            },
          ],
        },
        {
          path: "contact",
          element: <Pages.Contact />,
        },
        {
          path: "become-a-tutor",
          element: <Pages.ApplyAsInstructor />,
        },
        {
          path: "outreach-program",
          element: <Pages.OutreachProgram />,
        },
        {
          path: "case-studies",
          element: <Pages.CaseStudies />,
        },
        {
          path: "/case-studies/atlearn-online-classRoom",
          element: <Pages.CaseStudyAtlearnOnlineClasses />,
        },
        {
          path: "/case-studies/student-counselling-portal",
          element: <Pages.StudentCounsellingPortal />,
        },
        {
          path: "/case-studies/online-student-management-portal",
          element: <Pages.CaseStudiesOnlineStudentManagementPortal />,
        },
        {
          path: "/case-studies/teach-courses-live",
          element: <Pages.TeachCoursesLive />,
        },
        {
          path: "/case-studies/atlearn-mobile-app",
          element: <Pages.AtlearnMobileApp />,
        },
        {
          path: "/case-studies/course-management",
          element: <Pages.CourseManagement />,
        },
        {
          path: "hire-developers",
          element: <Pages.HireDevelopers />,
        },
        {
          path: "crm-software",
          element: <Pages.CRM />,
        },
        {
          path: "school-management",
          element: <Pages.SchoolManagement />,
        },
        // {
        //   path: "ai-use-cases",
        //   element: <Pages.AIUseCases />,
        // },
        {
          path: "ai-powered-quiz-app",
          element: <Pages.AIPoweredQuiz />,
        },
        {
          path: "custom-lMS-mvp-app",
          element: <Pages.CustomLMSMVP />,
        },
        {
          path: "tutor-web-app",
          element: <Pages.TutorsWebApp />,
        },
        {
          path: "tutor-ai-app",
          element: <Pages.TutorAIApp />,
        },
        {
          path: "ai-adaptive-learning",
          element: <Pages.AIAdaptiveLearning />,
        },
        {
          path: "ai-powered-classroom-audio-analysis",
          element: <Pages.AudioAnalysis />,
        },
        {
          path: "ai-course-management",
          element: <Pages.AICourseManagement />,
        },
      ],
    },

    { path: "404", element: <Page404 /> },

    // {
    //   element: <ModeratorLayout />,
    //   children: [
    //     {
    //       path: "room",
    //       element: (
    //         <AuthProtect>
    //           <Pages.Moderator />
    //         </AuthProtect>
    //       ),
    //     },

    //     {
    //       path: "room/:id",
    //       element: (
    //         <AuthProtect>
    //           <Pages.SingleRoom />
    //         </AuthProtect>
    //       ),
    //     },
    //     {
    //       path: "recordings",
    //       element: (
    //         <AuthProtect>
    //           <Pages.RecordingPage />
    //         </AuthProtect>
    //       ),
    //     },
    //     {
    //       path: "only-join",
    //       element: (
    //         <AuthProtect>
    //           <Pages.OnlyJoin />
    //         </AuthProtect>
    //       ),
    //     },
    //   ],
    // },

    // {
    //   path: "/settings",
    //   element: (
    //     <AuthProtect>
    //       <ProfileDashboardLayout />
    //     </AuthProtect>
    //   ),
    //   children: [
    //     { element: <Navigate to="/settings/profile" />, index: true },
    //     { path: "profile", element: <Pages.AdminProfile /> },
    //     { path: "deleteAccount", element: <Pages.DeleteAccount /> },
    //     { path: "mymeeting", element: <Pages.MyMeeting /> },
    //     { path: "mysubscription", element: <Pages.MyScbscription /> },
    //     { path: "mytransaction", element: <Pages.MyTransaction /> },
    //     { path: "app-credentials", element: <Pages.AppCredentials /> },
    //   ],
    // },
    // {
    //   path: "/organization",
    //   element: (
    //     <AuthProtect>
    //       <OrganizationLayout />
    //     </AuthProtect>
    //   ),
    //   children: [
    //     { element: <Navigate to="/organization/admin" />, index: true },
    //     { path: "admin", element: <AdminPanel /> },
    //     { path: "dashboard", element: <Pages.DashboardAppPage /> },
    //     { path: "users", element: <Pages.MangeUsers /> },
    //     { path: "server-rooms", element: <Pages.ServerRoom /> },
    //     { path: "server-recordings", element: <Pages.ServerRecordings /> },
    //     { path: "site-settings", element: <Pages.SiteSettings /> },
    //     { path: "room-configuration", element: <Pages.RoomConfiguration /> },
    //     { path: "roles", element: <Pages.Role /> },
    //     { path: "monitor", element: <Pages.Monitor /> },
    //     { path: "subscription-plans", element: <Pages.SubscriptionPlans /> },
    //     { path: "alltransactions", element: <Pages.AllTransaction /> },
    //   ],
    // },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    { path: "/callback", element: <Callback /> },
  ]);

  // return routes;

  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
}
