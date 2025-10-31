
import AI_Powered_Quiz_Cover_Image from "src/assets/images/Apps/AI_Powered_Quiz/AI Powered Quiz.png";
import custom_lMS_mvp_app_cover_image from "src/assets/images/Apps/custom-lMS-mvp-app/Custom LMS MVP.png";
import TutorAICoverImage from "src/assets/images/Apps/Tutor_AI/Tutor_AI_CoverImage.png";
import Tutor_LMS_Cover_Image from "src/assets/images/Apps/Tutor_LMS/Tutor LMS.png";

export const Application_Images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761115032/1_tc7wng.png",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761115031/2_x5zm7x.png",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761115031/3_d7q50z.png",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761115030/4_ztzm6q.png",
  }
];

export const About = {
  headerText: "Empower Your Classrooms with AI-Driven Insights",
  description: [
    `Leverage advanced AI to analyze classroom interactions, provide personalized feedback, and uncover data-driven insights that enhance both teaching quality and student engagement. This adaptive system transforms raw audio into actionable intelligence — helping educators focus on what matters most: impactful learning.`,
  ],
  points: [
  "AI-powered transcription and emotional tone analysis of classroom audio",
  "Automatic speaker detection and timestamped dialogue segmentation",
  "Comprehensive AI-generated feedback with actionable teaching insights",
  "Visual analytics for engagement patterns, emotion timelines, and speaking ratios",
  "Benchmarking and comparison with organizational performance averages",
  "Interactive transcript viewer with timestamp navigation and keyword search",
  "Secure audio upload system with real-time progress and status tracking",
  "Admin tools for managing users, roles, and organizational policies",
  "Customizable report templates with version control and activation toggles",
  "Automated data retention management with configurable expiry settings"
]
  // imageSrc: Interactive_Learning_image,
  // imageAlt: "Why Schools Choose Atlearn?",
  // linkText: "Join a Meeting",
  // linkHref: "/join-meetings",
};

export const Audio_Analysis_CTA = {
  // label: "Transform Learning, Simplify Teaching",
  heading: "Transform Your Classroom with AI-Powered Insights",
  description:
    "Unlock the full potential of your teaching and learning experience. Our platform leverages AI to analyze classroom audio, provide real-time feedback, and deliver actionable insights that enhance student engagement and instructional effectiveness.",
  // ctaName: "Claim Your LMS",
  // embedPopupFormId: "mbambgcjdr6kv0zhhvt",
};

export const moreApps = [
  {
    id: 1,
    src: AI_Powered_Quiz_Cover_Image,
    title: "AI Quiz Platform",
    link: "/ai-powered-quiz-app",
  },
  {
    id: 2,
    src: custom_lMS_mvp_app_cover_image,
    title: "Custom LMS Platform",
    link: "/custom-lMS-mvp-app",
  },
  {
    id: 3,
    src: TutorAICoverImage,
    title: "Tutor AI ",
    link: "/tutor-ai-app",
  },
    {
    id: 4,
    src: Tutor_LMS_Cover_Image,
    title: "Tutor LMS Application",
    link: "/tutor-web-app",
  },
];

export const Audio_Analysis_bottom_CTA = {
  // label: "Transform Learning, Simplify Teaching",
  heading: "Empower Learning with Your Own AI-Powered Platform",
  description:
    "Deliver personalized education experiences with adaptive lessons, progress tracking, and AI-driven insights. We’ll customize this platform for your organization — making smart learning simple, scalable, and effective.",
  ctaName: "Book a Demo Session",
  embedPopupFormId: "mbambgcjdr6kv0zhhvt",
};

export const coreFeatures = [
  {
    description:
      "Secure login, registration, session handling, and role-based access with Supabase Auth and RLS.",
    title: "Authentication ",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117446/authentication-icon---modern-style_b785uh.svg",
  },
  {
    title: "Lesson Management",
    description:
      "Audio upload (MP3/WAV/M4A), progress tracking, metadata management, and secure storage.",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117446/lesson-management-icon---modern-style_newfm5.svg",
  },
  {
    description:
      "Automated transcription, emotion tracking, keyword extraction, and AI-based feedback generation.",
    title: "AI Analysis & Reporting ",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117445/ai-analysis-and-reporting-icon---modern-style_vszeeh.svg",
  },
  {
    description:
      "Interactive reports with transcript navigation, emotion charts, and PDF export capabilities.",
    title: "Report Viewing ",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117445/report-viewing-icon---modern-style_mswmet.svg",
  },
  {
    description:
      "Organization-wide analytics, user management, report template control, and retention policy settings.",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117444/admin-dasboard-icon---modern-style_mdwmwf.svg",
    title: "Admin Dashboard ",
  },
  {
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117444/user-profile--icon---modern-style_nlakuj.svg",
    description:
      "Editable profile information with success/error notifications and secure data handling.",
    title: "User Profile ",
  },
  {
    description:
      "Public access demo accounts for Teacher and Admin roles with direct login functionality.",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117444/demo--icon---modern-style_jb2nvg.svg",
    title: "Demo ",
  },
  {
    title: "Database & Security ",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1761117444/database-and-security---icon_1_nw5cil.svg",
    description:
      "Structured schema with encrypted storage, RLS enforcement, and audit logging.",
  },
];

export const frd=
"# **AI-Powered Classroom Audio Analysis Platform**\n\n---\n\n## **1. Executive Summary**\n\nThis platform enables educational institutions to analyze classroom audio recordings using AI to provide insights on teaching effectiveness, student engagement, and communication patterns.\n\n---\n\n## **2. User Roles & Access Levels**\n\n### **2.1 Teacher Role**\n\n- Default role assigned to new users  \n- Can upload and manage their own lessons  \n- View analysis reports for their lessons  \n- Update personal profile settings  \n\n### **2.2 Admin Role**\n\n- Full organizational access  \n- Manage users and assign roles  \n- Configure organization settings  \n- Access all lessons within organization  \n- Manage report templates  \n- View organizational statistics  \n\n---\n\n## **3. Core Modules**\n\n### **3.1 Authentication Module**\n\n**Features:**\n\n- Email/password registration  \n- Secure login with session management  \n- Password recovery flow  \n- Automatic profile creation on signup  \n- Organization assignment (default organization for MVP)  \n- Session persistence with auto-refresh tokens  \n\n**Security:**\n\n- Row-Level Security (RLS) policies  \n- Separate user_roles table for role management  \n- Secure password hashing via Supabase Auth  \n\n---\n\n### **3.2 Lesson Management Module**\n\n#### **3.2.1 Lesson Upload (Teachers)**\n\n**Features:**\n\n- Drag-and-drop audio file upload  \n- Supported formats: MP3, WAV, M4A  \n- File size validation  \n- Lesson title input with validation  \n- Real-time upload progress tracking  \n- Automatic duration calculation  \n- Storage in secure audio bucket  \n\n**Business Logic:**\n\n- Files stored in lesson-audio bucket  \n- Lesson status workflow: queued → processing → ready/failed  \n- Automatic retention expiration date calculation based on org settings  \n\n---\n\n#### **3.2.2 Lesson Dashboard (Teachers)**\n\n**Features:**\n\n- View all personal lessons  \n- Display lesson metadata:  \n  - Title  \n  - Upload date/time  \n  - Duration (mm:ss format)  \n  - Processing status (queued/processing/ready/failed)  \n- Filter/sort capabilities  \n- Quick access to lesson reports  \n- Status badges with visual indicators  \n\n**Access Control:**\n\n- Teachers can only view their own lessons  \n- Admins can view all lessons in organization  \n\n---\n\n### **3.3 AI Analysis & Reporting Module**\n\n#### **3.3.1 Transcript Generation**\n\n**Features:**\n\n- Automatic audio-to-text transcription  \n- Speaker diarization (unique speaker identification)  \n- Timestamped segments  \n- Full raw text output  \n\n---\n\n#### **3.3.2 Analysis Components**\n\n**Emotional Analysis:**\n\n- Emotion tracking over time  \n- Emotion types: neutral, positive, negative, questioning  \n- Time-series visualization  \n\n**Keyword Extraction:**\n\n- Automatic identification of key terms  \n- Frequency counting  \n- Relevance scoring  \n\n**Communication Patterns:**\n\n- Question types analysis (open vs closed questions)  \n- Speaking time ratios per speaker  \n- Teacher-student interaction metrics  \n\n**Feedback Generation:**\n\n- AI-generated feedback points  \n- Category-based insights  \n- Actionable improvement suggestions  \n\n**Comparative Analysis:**\n\n- Benchmark against organizational averages  \n- Historical performance comparison  \n\n---\n\n#### **3.3.3 Report Viewing (Lesson Detail Page)**\n\n**Features:**\n\n- Executive summary with key metrics  \n- Interactive transcript with timestamp navigation  \n- Emotion over time chart  \n- Keyword cloud/list  \n- Speaking time breakdown  \n- Question type distribution  \n- Detailed feedback sections  \n- PDF export functionality  \n- Report sharing capabilities  \n\n---\n\n### **3.4 Admin Dashboard Module**\n\n#### **3.4.1 Overview Statistics**\n\n**Metrics Displayed:**\n\n- Total users in organization  \n- Total lessons uploaded  \n- Lessons uploaded this month  \n- Average processing time  \n- Visual metric cards with icons  \n\n---\n\n#### **3.4.2 User Management**\n\n**Features:**\n\n- View all users in organization  \n- User profile display (name, email, join date)  \n- Role assignment/modification  \n- Search/filter users by name or email  \n- Role options: admin, teacher  \n\n**Access Control:**\n\n- Only admins can access  \n- Scoped to organization membership  \n\n---\n\n#### **3.4.3 Report Templates Management**\n\n**Features:**\n\n- View all report templates  \n- Template versioning  \n- Activate/deactivate templates  \n- Template metadata (name, version, last updated)  \n- Toggle template status  \n\n**Future Capabilities:**\n\n- Create custom templates  \n- Edit template configuration  \n\n---\n\n#### **3.4.4 Organization Settings**\n\n**Data Retention Policy:**\n\n- Configure retention period (days)  \n- Automatic lesson deletion after retention expires  \n- Update retention policy for organization  \n- Default: 14 days  \n\n---\n\n### **3.5 User Profile Module**\n\n**Features:**\n\n- View/edit full name  \n- Display email (read-only)  \n- Update profile information  \n- Success/error notifications  \n\n---\n\n### **3.6 Demo Module**\n\n**Features:**\n\n- Public access (no authentication required)  \n- Pre-configured demo accounts for testing  \n- Display demo credentials for:  \n  - Teacher account  \n  - Admin account  \n- One-click copy credentials  \n- Direct login integration  \n\n---\n\n## **4. Database Schema**\n\n### **4.1 Core Tables**\n\n- **profiles:** User profile information, organization membership  \n- **user_roles:** Role assignments (admin, teacher)  \n- **organizations:** Organization settings, retention policies  \n- **lessons:** Lesson metadata, status, audio references  \n- **transcripts:** Audio transcriptions with segments  \n- **analyses:** AI-generated analysis results  \n- **report_templates:** Report configuration templates  \n- **audit_logs:** System activity tracking  \n\n### **4.2 Storage Buckets**\n\n- **lesson-audio:** Private bucket for audio files  \n\n---\n\n## **5. Security Features**\n\n### **5.1 Row-Level Security Policies**\n\n- Users can only access data within their organization  \n- Teachers can only modify their own lessons  \n- Admins have full organizational access  \n- System functions can insert analysis data  \n- Separate role-checking function to prevent RLS recursion  \n\n### **5.2 Data Protection**\n\n- Encrypted storage for audio files  \n- Secure session management  \n- Protected routes requiring authentication  \n- Database functions with security definer  \n- Input validation on all forms  \n\n---\n\n## **6. Technical Architecture**\n\n### **6.1 Frontend Stack**\n\n- React 18 with TypeScript  \n- Vite build system  \n- TailwindCSS for styling  \n- Shadcn/ui component library  \n- React Router for navigation  \n- TanStack Query for data fetching  \n- React Hook Form with Zod validation  \n\n### **6.2 Backend Stack**\n\n- Supabase (PostgreSQL database)  \n- Supabase Authentication  \n- Supabase Storage  \n- Row-Level Security policies  \n- Database triggers and functions  \n\n### **6.3 Key Integrations**\n\n- OpenAI API for AI analysis (configured via secrets)  \n- HTML2Canvas for report rendering  \n- jsPDF for PDF generation  \n- React Dropzone for file uploads  \n\n---\n\n## **7. User Workflows**\n\n### **7.1 Teacher Workflow**\n\n1. Sign up / Log in  \n2. Navigate to Dashboard  \n3. Upload lesson audio  \n4. Wait for AI processing  \n5. View generated report  \n6. Export/share findings  \n\n### **7.2 Admin Workflow**\n\n1. Log in with admin credentials  \n2. Access Admin Portal  \n3. View organizational metrics  \n4. Manage users and roles  \n5. Configure report templates  \n6. Adjust retention policies  \n7. Monitor audit logs  \n\n---\n\n## **8. Future Enhancements (Not Yet Implemented)**\n\n- Custom report template creation  \n- Template editing interface  \n- SSO integration  \n- Advanced filtering on lessons  \n- Bulk lesson operations  \n- Real-time processing notifications  \n- Email notifications  \n- Advanced analytics dashboard  \n- Multi-language support  \n\n---\n\n## **9. System Limitations**\n\n- Single organization per user (MVP constraint)  \n- Maximum audio file size restrictions  \n- Processing time depends on audio length  \n- Demo accounts require manual Supabase setup  \n- Limited to audio formats (no video)  \n\n---\n\n**Document Version:** 1.0  \n**Last Updated:** Based on current codebase analysis  \n**Status:** Active Development  \n\n\n\n"