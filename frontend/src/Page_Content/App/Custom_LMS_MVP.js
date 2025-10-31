import AI_Powered_Quiz_Cover_Image from "src/assets/images/Apps/AI_Powered_Quiz/AI Powered Quiz.png";
import Tutor_LMS_Cover_Image from "src/assets/images/Apps/Tutor_LMS/Tutor LMS.png";
import TutorAICoverImage from "src/assets/images/Apps/Tutor_AI/Tutor_AI_CoverImage.png";
import customLMSImage_1 from "src/assets/images/Apps/custom-lMS-mvp-app/CustomLMSImage1.png";
import customLMSImage_2 from "src/assets/images/Apps/custom-lMS-mvp-app/CustomLMSImage2.png";
import customLMSImage_3 from "src/assets/images/Apps/custom-lMS-mvp-app/CustomLMSImage3.png";
import customLMSImage_4 from "src/assets/images/Apps/custom-lMS-mvp-app/CustomLMSImage4.png";
import customLMSImage_5 from "src/assets/images/Apps/custom-lMS-mvp-app/CustomLMSImage5.png";

export const About = {
  headerText:
    "Enterprise-Ready LMS with Instructor Tools and Secure Video Streaming",
  description: [
    `This custom LMS platform is built for modern e-learning needs — complete with instructor dashboards, drag-and-drop syllabus creation, adaptive video delivery, and payment management. Host hundreds of courses, empower instructors to self-publish, and control the platform via an admin dashboard.`,
  ],
  points: [
    {
      heading: "All-Access Subscription",
      description:
        "Charge monthly or annually for full course access using Stripe or PayPal.",
    },
    {
      heading: "Instructor Panel",
      description: `Instructors can register, upload videos, and publish their own courses via a self-service builder.`,
    },
    {
      heading: "Course Migration Support",
      description:
        "Bulk import of up to 600+ existing courses, ready to be categorized and streamed.",
    },
    {
      heading: "Media Manager",
      description:
        "Upload videos up to 5 GB and convert to secure HLS streaming. Files are auto-organized per course/lesson.",
    },
    {
      heading: "Responsive Course Player",
      description:
        "Clean and modern UI for browsing courses, watching lessons, and tracking progress.",
    },
    {
      heading: "Admin Dashboard",
      description:
        "View sales, users, courses, and manage pricing plans from a centralized backend panel.",
    },
    {
      heading: "Token-Protected Streaming",
      description:
        " Video URLs expire automatically to prevent unauthorized sharing.",
    },
    {
      heading: "SEO Optimized",
      description:
        "Built to be fully indexable with proper metadata and structure for discoverability.",
    },
  ],
  // imageSrc: Interactive_Learning_image,
  // imageAlt: "Why Schools Choose Atlearn?",
  // linkText: "Join a Meeting",
  // linkHref: "/join-meetings",
};

export const Custom_LMS_MVP_CTA = {
  // label: "Transform Learning, Simplify Teaching",
  heading: "Launch Your Learning Platform in Weeks — Not Months",
  description:
    "This LMS MVP is just the beginning. We'll tailor it to your brand, content, and business model. Whether you're launching a learning portal or selling online courses, we've got the foundation ready.",
  // ctaName: "Claim Your LMS",
  // embedPopupFormId: "mbambgcjdr6kv0zhhvt",
};

//   export const moreApps = [
//   {
//     title: "AI Quiz Platform",
//     link: "https://knowledge-arcade-ads.lovable.app/",
//     image: ONLINE_CLASSROOM_image,
//     description:
//       "This is a working MVP designed to show what's possible with LLM technology. Want your own branded quiz app? We'll customize this in days, features, design, logic and more.",
//   },
//   {
//     title: "Tutor LMS Application",
//     link: "https://scholar-feedback-platform.lovable.app/",
//     image: Student_conselling_image,
//     description:
//       "This working MVP helps tutors manage exam prep online — from assigning papers to marking submissions. Designed to streamline small tutoring businesses. Need your own version? We'll customize it fast.",
//   },
// ];
export const moreApps = [
  {
    id: 1,
    src: AI_Powered_Quiz_Cover_Image,
    title: "AI Quiz Platform",
    link: "/ai-powered-quiz-app",
  },
  {
    id: 2,
    src: Tutor_LMS_Cover_Image,
    title: "Tutor LMS Application",
    link: "/tutor-web-app",
  },
  {
    id: 3,
    src: TutorAICoverImage,
    title: "Tutor AI ",
    link: "/tutor-ai-app",
  },
];

export const Custom_LMS_MVP_bottom_CTA = {
  // label: "Transform Learning, Simplify Teaching",
  heading: "Let’s Build Your Branded LMS Platform",
  description:
    "From secure streaming to instructor controls, this LMS can be customized end-to-end for your content strategy. Start with this foundation and scale your education business with confidence.",
  ctaName: "Book a Demo Session",
  embedPopupFormId: "mbambgcjdr6kv0zhhvt",
};

export const Application_Images = [
  {
    id: 1,
    src: customLMSImage_1,
  },
  {
    id: 2,
    src: customLMSImage_2,
  },
  {
    id: 3,
    src: customLMSImage_3,
  },
  {
    id: 4,
    src: customLMSImage_4,
  },
  {
    id: 5,
    src: customLMSImage_4,
  },
];

export const coreFeatures = [
    {
      "image": "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760596588/student----icon_zupd7w.svg",
      "title": "Student",
      "description": "Homepage,Course Discovery,Course Detail,My Learning,Video Player,Assessment Module,My Scores"
    },
    {
      "image": "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760596587/instructor---icon_wqfymn.svg",
      "description": "Instructor Dashboards,My Courses, Students, Analytics, Earnings, Messages",
      "title": "Instructor"
    },
    {
      "image": "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760596586/-admin-icon---nice-modern-style-_lje8u9.svg",
      "title": "Admin",
      "description": "Admin Dashboard, Overview, Users, Courses, Payments, Settings"
    }
  ]
export const frd=
"# **E-Learning Management System**\n\n---\n\n## **1. Executive Summary**\n\nThis document outlines the functional specifications for a comprehensive E-Learning Management System built with React, featuring role-based access control, course management, video learning, assessment systems, and administrative capabilities.\n\n---\n\n## **2. User Roles & Access Control**\n\n### **2.1 Role Types**\n\n- **Student:** Primary learners with access to courses and assessments  \n- **Instructor:** Content creators and course managers  \n- **Admin:** System administrators with full platform control  \n\n### **2.2 Authentication System**\n\n- Email/password-based authentication (mock implementation)  \n- Session persistence via `localStorage`  \n- Role-based routing and component access  \n- Avatar generation using Dicebear API  \n\n---\n\n## **3. Module Specifications by Role**\n\n### **3.1 STUDENT ROLE**\n\n#### **3.1.1 Homepage Module**\n\n**Features:**\n\n- Hero section with platform introduction  \n- Course catalog preview  \n- Call-to-action for registration/login  \n- Responsive navigation  \n\n---\n\n#### **3.1.2 Course Discovery Module**\n\n**Features:**\n\n- Browse all available courses  \n- Course cards displaying:\n  - Course title and description  \n  - Instructor information  \n  - Difficulty level  \n  - Duration  \n  - Enrollment count  \n  - Rating  \n- Filter and search capabilities  \n- Category-based browsing  \n\n---\n\n#### **3.1.3 Course Detail Module**\n\n**Features:**\n\n- Comprehensive course information  \n- Curriculum/syllabus view  \n- Instructor profile  \n- Course preview  \n- Enrollment functionality  \n- Wishlist management  \n- Student reviews and ratings  \n- Prerequisites display  \n- Learning objectives  \n\n**Actions:**\n\n- Enroll in course (with toast notification)  \n- Add to wishlist  \n- Preview course content  \n\n---\n\n#### **3.1.4 My Learning Module**\n\n**Features:**\n\n- Dashboard of enrolled courses  \n- Progress tracking per course  \n- Continue learning functionality  \n- Course completion status  \n- Quick access to active courses  \n- Learning statistics  \n\n---\n\n#### **3.1.5 Video Player Module**\n\n**Features:**\n\n- Enhanced video playback  \n- Playback controls (play, pause, seek)  \n- Volume control  \n- Fullscreen mode  \n- Progress tracking  \n- Resume from last position  \n- Course navigation sidebar  \n- Next/previous lesson navigation  \n\n---\n\n#### **3.1.6 Assessment Module (Quiz Interface)**\n\n**Features:**\n\n- Multiple choice questions  \n- Single and multi-select answers  \n- Question navigation  \n- Timer functionality  \n- Progress indicator  \n- Submit assessment  \n- Instant feedback  \n- Score calculation  \n- Review incorrect answers  \n\n---\n\n#### **3.1.7 My Scores Module**\n\n**Features:**\n\n- Assessment history  \n- Score overview per course  \n- Detailed results view  \n- Performance analytics  \n- Course-wise score breakdown  \n- Grade visualization  \n- Certificate eligibility status  \n\n---\n\n### **3.2 INSTRUCTOR ROLE**\n\n#### **3.2.1 Instructor Dashboard**\n\n**Navigation Tabs:**\n\n- My Courses  \n- Students  \n- Analytics  \n- Earnings  \n- Messages  \n\n---\n\n#### **3.2.2 My Courses Module**\n\n**Features:**\n\n- Course listing with statistics  \n- Create new course functionality  \n- Edit existing courses  \n- Delete courses (with confirmation)  \n- Preview courses  \n- View enrolled students  \n- Course performance metrics  \n\n**Course Statistics:**\n\n- Total enrolled students  \n- Course rating  \n- Revenue generated  \n- Completion rate  \n\n**Actions:**\n\n- Create Course (opens course creation form)  \n- Edit Course (with toast notification)  \n- Preview Course  \n- View Students  \n- Delete Course (with confirmation dialog)  \n\n---\n\n#### **3.2.3 Students Module**\n\n**Features:**\n\n- Student enrollment list  \n- Student performance tracking  \n- Communication with students  \n- Student progress monitoring  \n- Filter by course  \n- Search students  \n- Export student data  \n\n**Student Information:**\n\n- Name and email  \n- Enrolled courses  \n- Progress percentage  \n- Last active date  \n- Overall performance  \n\n**Actions:**\n\n- View student profile  \n- Send message  \n- View detailed progress  \n\n---\n\n#### **3.2.4 Analytics Module**\n\n**Features:**\n\n- Course performance dashboard  \n- Student engagement metrics  \n- Completion rates  \n- Revenue analytics  \n- Popular courses tracking  \n- Enrollment trends  \n- Rating analysis  \n\n**Metrics Displayed:**\n\n- Total students taught  \n- Total courses created  \n- Average course rating  \n- Total revenue  \n- Monthly growth trends  \n\n---\n\n#### **3.2.5 Earnings Module**\n\n**Features:**\n\n- Revenue dashboard  \n- Transaction history  \n- Payout requests  \n- Payment method management  \n- Revenue breakdown by course  \n- Monthly/yearly earnings view  \n- Tax document generation  \n\n**Financial Information:**\n\n- Total earnings  \n- Available balance  \n- Pending payments  \n- Course-wise revenue  \n- Payment history  \n\n**Actions:**\n\n- Request payout  \n- View transaction details  \n- Download invoice  \n\n---\n\n#### **3.2.6 Messages Module**\n\n**Features:**\n\n- Inbox/outbox management  \n- Compose new messages  \n- Reply to student inquiries  \n- Message filtering  \n- Search conversations  \n- Mark as read/unread  \n- Archive messages  \n\n**Message Features:**\n\n- Student name and subject  \n- Message preview  \n- Timestamp  \n- Read/unread status  \n- Attachment support  \n\n**Actions:**\n\n- Compose message  \n- Reply to message  \n- View conversation  \n\n---\n\n### **3.3 ADMIN ROLE**\n\n#### **3.3.1 Admin Dashboard**\n\n**Navigation Tabs:**\n\n- Overview  \n- Users  \n- Courses  \n- Payments  \n- Settings  \n\n---\n\n#### **3.3.2 Overview Module**\n\n**Features:**\n\n- Platform-wide statistics dashboard  \n- Key performance indicators  \n- User growth metrics  \n- Revenue overview  \n- Course statistics  \n- Recent activity feed  \n\n**Metrics Displayed:**\n\n- Total users (students/instructors)  \n- Total courses  \n- Active enrollments  \n- Total revenue  \n- Platform growth rate  \n- Popular courses  \n\n---\n\n#### **3.3.3 Users Module**\n\n**Features:**\n\n- Complete user management system  \n- User listing with filters  \n- Role management  \n- User search functionality  \n- User status management (active/suspended)  \n- Bulk actions support  \n\n**User Information:**\n\n- User ID and name  \n- Email address  \n- Role (student/instructor/admin)  \n- Registration date  \n- Last active  \n- Account status  \n\n**Actions:**\n\n- Add new user (opens creation form)  \n- Edit user details (with toast notification)  \n- View user profile  \n- Change user role  \n- Suspend/activate account  \n- Delete user (with confirmation)  \n\n---\n\n#### **3.3.4 Courses Module**\n\n**Features:**\n\n- Platform-wide course management  \n- Course approval workflow  \n- Course status management  \n- Quality control  \n- Featured course selection  \n- Course categorization  \n\n**Course Information:**\n\n- Course title and ID  \n- Instructor name  \n- Category  \n- Enrollment count  \n- Status (draft/published/archived)  \n- Creation date  \n- Revenue generated  \n\n**Actions:**\n\n- Add new course  \n- Edit course details  \n- Approve/reject courses  \n- Feature/unfeature courses  \n- Archive courses  \n- Delete courses  \n\n---\n\n#### **3.3.5 Payments Module**\n\n**Features:**\n\n- Complete payment tracking system  \n- Transaction history  \n- Refund management  \n- Revenue analytics  \n- Payment disputes  \n- Financial reporting  \n\n**Payment Information:**\n\n- Transaction ID  \n- User details  \n- Course purchased  \n- Amount  \n- Payment method  \n- Transaction date  \n- Status (completed/pending/refunded)  \n\n**Financial Analytics:**\n\n- Total revenue  \n- Revenue by period  \n- Revenue by course category  \n- Payment method distribution  \n- Refund rate  \n- Average transaction value  \n\n**Actions:**\n\n- View transaction details  \n- Process refund  \n- Export financial reports  \n- Filter by date/status/amount  \n\n---\n\n#### **3.3.6 Settings Module**\n\n**Features:**\n\n- Platform configuration management  \n- System settings  \n- Email template management  \n- Payment gateway configuration  \n- Security settings  \n- Backup management  \n\n**Configuration Categories:**\n\n- General Settings (site name, logo, timezone)  \n- Email Settings (SMTP, templates, notifications)  \n- Payment Settings (gateway credentials, currency)  \n- Security Settings (password policy, 2FA)  \n- Appearance Settings (theme, branding)  \n- Integration Settings (third-party APIs)  \n\n**Actions:**\n\n- Update platform settings (with toast notification)  \n- Test email configuration  \n- Backup database  \n- Restore from backup  \n- View system logs  \n- Clear cache  \n\n---\n\n## **4. Common Features Across All Roles**\n\n### **4.1 Navigation System**\n\n- Responsive navbar with role-based menu items  \n- User profile dropdown  \n- Theme toggle (light/dark mode)  \n- Search functionality  \n- Notifications center  \n- Quick access links  \n\n### **4.2 Theme Management**\n\n- Light/dark mode support  \n- Persistent theme preference  \n- System theme detection  \n- Smooth theme transitions  \n- Custom color schemes  \n\n### **4.3 Responsive Design**\n\n- Mobile-first approach  \n- Tablet optimization  \n- Desktop layouts  \n- Touch-friendly interfaces  \n- Adaptive navigation  \n\n### **4.4 Notification System**\n\n- Toast notifications for actions  \n- Success/error/warning messages  \n- Real-time updates  \n- Persistent notification center  \n\n### **4.5 Footer**\n\n- Company information  \n- Quick links  \n- Social media links  \n- Contact information  \n- Legal pages (Privacy, Terms)  \n\n---\n\n## **5. Technical Specifications**\n\n### **5.1 Technology Stack**\n\n- **Frontend:** React 18.3.1 with TypeScript  \n- **Build Tool:** Vite  \n- **Styling:** Tailwind CSS with custom design system  \n- **UI Components:** Shadcn/ui + Radix UI  \n- **Routing:** React Router DOM v6  \n- **State Management:** React Context API  \n- **Form Handling:** React Hook Form with Zod validation  \n- **Icons:** Lucide React  \n\n### **5.2 Design System**\n\n- HSL-based color tokens  \n- Semantic CSS variables  \n- Consistent component variants  \n- Responsive breakpoints  \n- Accessibility standards (WCAG 2.1)  \n\n### **5.3 Authentication Flow**\n\n- Mock authentication (ready for backend integration)  \n- `localStorage` session persistence  \n- Role-based access control  \n- Protected route implementation  \n- Automatic redirects  \n\n---\n\n## **6. Future Enhancement Opportunities**\n\n### **6.1 Backend Integration**\n\n- Lovable Cloud/Supabase integration  \n- Real authentication system  \n- Database persistence  \n- File storage for course materials  \n- Real-time features  \n\n### **6.2 Advanced Features**\n\n- Live class functionality  \n- Certificate generation  \n- Discussion forums  \n- Peer review system  \n- Advanced analytics  \n- Mobile app  \n\n### **6.3 Payment Integration**\n\n- Stripe payment processing  \n- Subscription management  \n- Coupon system  \n- Affiliate program  \n\n---\n\n## **7. Security Considerations**\n\n### **7.1 Current Implementation**\n\n- Client-side role validation  \n- Protected routes  \n- Input sanitization ready  \n\n### **7.2 Production Requirements**\n\n- Server-side authentication  \n- Row-level security (RLS)  \n- API rate limiting  \n- HTTPS enforcement  \n- CSRF protection  \n- XSS prevention  \n\n---\n\n## **8. Compliance & Standards**\n\n- GDPR compliance ready  \n- Accessibility (ARIA labels, keyboard navigation)  \n- SEO optimization  \n- Performance optimization  \n- Browser compatibility (modern browsers)  \n\n---\n\n**Document Version:** 1.0  \n**Last Updated:** 2025-10-06  \n**Status:** Current Implementation\n\n  \n\n"