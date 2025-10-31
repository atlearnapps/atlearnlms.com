import AI_Powered_Quiz_Cover_Image from "src/assets/images/Apps/AI_Powered_Quiz/AI Powered Quiz.png";
import custom_lMS_mvp_app_cover_image from "src/assets/images/Apps/custom-lMS-mvp-app/Custom LMS MVP.png";
import Tutor_LMS_Cover_Image from "src/assets/images/Apps/Tutor_LMS/Tutor LMS.png";

import TutorAIImage_1 from "src/assets/images/Apps/Tutor_AI/TutorAIImage1.png";
import TutorAIImage_2 from "src/assets/images/Apps/Tutor_AI/TutorAIImage2.png";
import TutorAIImage_3 from "src/assets/images/Apps/Tutor_AI/TutorAIImage3.png";
import TutorAIImage_4 from "src/assets/images/Apps/Tutor_AI/TutorAIImage4.png";
import TutorAIImage_5 from "src/assets/images/Apps/Tutor_AI/TutorAIImage5.png";
import TutorAIImage_6 from "src/assets/images/Apps/Tutor_AI/TutorAIImage6.png";
import TutorAIImage_7 from "src/assets/images/Apps/Tutor_AI/TutorAIImage7.png";
import TutorAIImage_8 from "src/assets/images/Apps/Tutor_AI/TutorAIImage8.png";

export const About = {
  headerText: "Revolutionary Learning Experience with Tutor AI",
  description: [
    `Discover how our AI-powered platform transforms the way students learn, making education more engaging, personalized, and effective.`,
  ],
  points: [
    "Personalized AI Tutor with real-time voice interaction.",
    "Subject-wise structured chapters and sections.",
    "Interactive video lessons with transcripts and playback controls.",
    "Practice quizzes and assessments with instant feedback.",
    "Progress tracking with points, badges, and achievements.",
    "Dynamic subject and chapter navigation.",
    "Role-based portals for students, parents, and teachers.",
    "Mobile-responsive design with one-column layout optimization.",
    "Leaderboard and gamification for motivation.",
    "Secure login, demo access, and user-friendly interface.",
  ],
  // imageSrc: Interactive_Learning_image,
  // imageAlt: "Why Schools Choose Atlearn?",
  // linkText: "Join a Meeting",
  // linkHref: "/join-meetings",
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
    src: Tutor_LMS_Cover_Image,
    title: "Tutor LMS Application",
    link: "/tutor-web-app",
  },
];

export const Application_Images = [
  {
    id: 1,
    src: TutorAIImage_1,
  },
  {
    id: 2,
    src: TutorAIImage_2,
  },
  {
    id: 3,
    src: TutorAIImage_3,
  },
  {
    id: 4,
    src: TutorAIImage_4,
  },
  {
    id: 5,
    src: TutorAIImage_5,
  },
  {
    id: 6,
    src: TutorAIImage_6,
  },
  {
    id: 7,
    src: TutorAIImage_7,
  },
  {
    id: 8,
    src: TutorAIImage_8,
  },
];

export const coreFeatures = [
  {
    title: "Authentication",
    description:
      "User Registration & Login,Privacy & Compliance,Content Moderation",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760687999/authentication---icon---modern-style_chh3oe.svg",
  },
  {
    description: "Curriculum Structure,Content Types,Progress Tracking",
    title: "LearninGg Management System",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688060/learning-management-system---icon-_h1bwop.svg",
  },
  {
    title: "Ai Tutoring System",
    description: "Conversational AI,Hint System,Knowledge Base (RAG)",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688015/ai-tutoring-system---icon-_ypmklj.svg",
  },
  {
    title: "Assessment System Test",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688047/--icon-_fpp6jr.svg",
    description: "Quiz Management,Scoring & Analytics,",
  },
  {
    description: "Points & Rewards,Progress Visualization",
    title: "Gamification System",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688021/gamification-system--icon-_l39kf5.svg",
  },
  {
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688028/student-dashboard--icon-_sjeqyz.svg",
    description: "Overview Section,Subject Navigation,Activity Feed",
    title: "Student Dashboard",
  },
  {
    title: "parent dashboard",
    description:
      "Child Monitoring,Safety & Privacy Controls,Reporting & Export",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688034/parent-dashboard--icon-_ztcqsn.svg",
  },
  {
    title: "Administrator Dashboard",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688040/administrator-dashboard--icon-_nplqfi.svg",
    description:
      "User Management,Content Management,System Monitoring,Moderation Tools",
  },
  {
    title: "Onboarding System",
    image:
      "https://res.cloudinary.com/dpz1aa6ff/image/upload/v1760688053/onboarding-system--icon-_hop2by.svg",
    description: "Student Onboarding,Parent Onboarding,",
  },
];

export const frd =
 `# Functional Specification Document\n## AI-Powered Educational Platform\n\n### 1. SYSTEM OVERVIEW\n\n**Platform Name:** AI-Powered Educational Platform\n**Purpose:** Comprehensive learning management system with AI tutoring capabilities\n**Target Audience:** Students (K-12), Parents, Administrators\n**Architecture:** React-based frontend with Supabase backend\n\n---\n\n### 2. USER ROLES & PERMISSIONS\n\n#### 2.1 Student Role\n- **Primary Users:** K-12 students\n- **Access Level:** Limited to own learning data and content\n- **Key Capabilities:**\n  - Access lessons and courses\n  - Take quizzes and assessments\n  - Interact with AI tutor\n  - Track personal progress\n  - Earn points and badges\n\n#### 2.2 Parent Role\n- **Primary Users:** Parents/Guardians of student users\n- **Access Level:** View and manage child's educational data\n- **Key Capabilities:**\n  - Monitor child's progress\n  - Manage parental consent settings\n  - Receive safety alerts\n  - Export progress reports\n  - Control privacy settings\n\n#### 2.3 Administrator Role\n- **Primary Users:** System administrators and educators\n- **Access Level:** Full system access and content management\n- **Key Capabilities:**\n  - Manage all users and content\n  - Moderate interactions\n  - Generate system reports\n  - Configure system settings\n  - Manage compliance\n\n---\n\n### 3. AUTHENTICATION & SECURITY MODULE\n\n#### 3.1 User Registration & Login\n- **Email-based authentication** with Supabase Auth\n- **Age verification system** for COPPA compliance\n- **Parental consent workflow** for users under 13\n- **Role-based access control** (RBAC)\n- **Session management** with secure tokens\n\n#### 3.2 Privacy & Compliance\n- **COPPA compliance** for children under 13\n- **Parental consent management** with email verification\n- **Data retention policies** with automated cleanup\n- **Privacy controls** for data sharing and analytics\n- **Audit logging** for compliance tracking\n\n#### 3.3 Content Moderation\n- **Real-time content filtering** for inappropriate content\n- **AI-powered moderation** with confidence scoring\n- **Parent alert system** for flagged interactions\n- **Moderation dashboard** for administrators\n- **Test case management** for moderation rules\n\n---\n\n### 4. LEARNING MANAGEMENT SYSTEM\n\n#### 4.1 Curriculum Structure\n- **Subjects:** Mathematics, Science, Language Arts, etc.\n- **Courses:** Organized by grade level and curriculum standards\n- **Lessons:** Individual learning units with multimedia content\n- **Sections:** Granular content blocks within lessons\n\n#### 4.2 Content Types\n- **Video lessons** with interactive controls\n- **Text-based content** with rich formatting\n- **Interactive quizzes** with multiple question types\n- **Practice exercises** with instant feedback\n- **Assessment tools** with scoring and analytics\n\n#### 4.3 Progress Tracking\n- **Completion tracking** for lessons and courses\n- **Time spent analytics** per lesson/course\n- **Competency mapping** against curriculum standards\n- **Performance analytics** with detailed reporting\n- **Adaptive learning paths** based on progress\n\n---\n\n### 5. AI TUTORING SYSTEM\n\n#### 5.1 Conversational AI\n- **Natural language processing** for student questions\n- **Context-aware responses** based on lesson content\n- **Multi-turn conversations** with session management\n- **Voice interaction support** with speech recognition\n- **Personalized tutoring** adapted to learning style\n\n#### 5.2 Hint System\n- **Progressive hint delivery** for problem-solving\n- **Adaptive difficulty adjustment** based on performance\n- **Learning effectiveness scoring** for hint usage\n- **Session analytics** for tutor interactions\n- **Content moderation** for all AI responses\n\n#### 5.3 Knowledge Base (RAG)\n- **Document ingestion** for curriculum materials\n- **Vector search** for relevant content retrieval\n- **Source attribution** for AI responses\n- **Content chunking** for optimized retrieval\n- **Query logging** for analytics and improvement\n\n---\n\n### 6. ASSESSMENT & QUIZ SYSTEM\n\n#### 6.1 Quiz Management\n- **Multiple question types:** Multiple choice, true/false, short answer\n- **Time-limited assessments** with countdown timers\n- **Randomized question order** for test security\n- **Instant feedback** with explanations\n- **Retake policies** with attempt tracking\n\n#### 6.2 Scoring & Analytics\n- **Automatic scoring** with configurable point values\n- **Performance analytics** with trend analysis\n- **Competency gap identification** based on results\n- **Comparative analytics** against peer groups\n- **Export capabilities** for external reporting\n\n---\n\n### 7. GAMIFICATION SYSTEM\n\n#### 7.1 Points & Rewards\n- **Point earning system** for completed activities\n- **Achievement badges** for milestones and accomplishments\n- **Streak tracking** for daily engagement\n- **Leaderboards** for competitive motivation\n- **Reward redemption** (future enhancement)\n\n#### 7.2 Progress Visualization\n- **Dashboard widgets** showing progress metrics\n- **Achievement galleries** displaying earned badges\n- **Progress charts** with historical data\n- **Goal setting tools** for self-motivation\n- **Social features** for peer interaction\n\n---\n\n### 8. STUDENT DASHBOARD\n\n#### 8.1 Overview Section\n- **Welcome message** with personalized greeting\n- **Progress summary** showing overall completion\n- **Current streak** and points display\n- **Recent achievements** and badges\n- **Quick access** to recent lessons\n\n#### 8.2 Subject Navigation\n- **Subject cards** with progress indicators\n- **Course listings** within each subject\n- **Lesson access** with status indicators\n- **Search functionality** for content discovery\n- **Bookmarking system** for favorite content\n\n#### 8.3 Activity Feed\n- **Recent activity** timeline\n- **Upcoming assignments** and deadlines\n- **Achievement notifications** and celebrations\n- **AI tutor conversation** history\n- **Progress milestones** and celebrations\n\n---\n\n### 9. PARENT DASHBOARD\n\n#### 9.1 Child Monitoring\n- **Multi-child support** with individual profiles\n- **Progress overview** for each child\n- **Time spent analytics** with detailed breakdowns\n- **Achievement tracking** and milestone alerts\n- **Performance trends** with comparative data\n\n#### 9.2 Safety & Privacy Controls\n- **Consent management** for data processing\n- **Privacy settings** configuration\n- **Content filtering** preferences\n- **Communication controls** for AI interactions\n- **Alert preferences** for safety notifications\n\n#### 9.3 Reporting & Export\n- **Progress reports** in multiple formats (PDF, HTML)\n- **Custom date ranges** for report generation\n- **Email delivery** of scheduled reports\n- **Data export** for external analysis\n- **Compliance documentation** access\n\n---\n\n### 10. ADMINISTRATOR DASHBOARD\n\n#### 10.1 User Management\n- **User account** creation and management\n- **Role assignment** and permissions\n- **Bulk operations** for user management\n- **Account status** monitoring and control\n- **Authentication** settings and policies\n\n#### 10.2 Content Management\n- **Curriculum** upload and organization\n- **Course creation** and editing tools\n- **Lesson builder** with multimedia support\n- **Assessment creation** and management\n- **Content versioning** and approval workflows\n\n#### 10.3 System Monitoring\n- **Usage analytics** and reporting\n- **Performance monitoring** and alerts\n- **Security incident** tracking\n- **Compliance reporting** and audits\n- **System health** dashboards\n\n#### 10.4 Moderation Tools\n- **Content review** queue\n- **User behavior** monitoring\n- **Incident response** tools\n- **Policy enforcement** mechanisms\n- **Escalation procedures** for serious issues\n\n---\n\n### 11. ONBOARDING SYSTEM\n\n#### 11.1 Student Onboarding\n- **Welcome tour** of platform features\n- **Profile setup** with preferences\n- **Goal setting** for learning objectives\n- **Initial assessment** for placement\n- **Tutorial completion** tracking\n\n#### 11.2 Parent Onboarding\n- **Child linking** process\n- **Consent verification** workflow\n- **Privacy settings** configuration\n- **Notification preferences** setup\n- **Feature explanation** and guidance\n\n---\n\n### 12. SETTINGS & PREFERENCES\n\n#### 12.1 Student Settings\n- **Profile management** with avatar selection\n- **Learning preferences** and goals\n- **Notification settings** for achievements\n- **Privacy controls** for personal data\n- **Accessibility options** for inclusive learning\n\n#### 12.2 Parent Settings\n- **Child management** and monitoring preferences\n- **Notification preferences** for alerts and reports\n- **Privacy controls** for family data\n- **Report scheduling** and delivery options\n- **Communication preferences** with platform\n\n#### 12.3 Administrator Settings\n- **System configuration** and policies\n- **User management** preferences\n- **Security settings** and monitoring\n- **Compliance configuration** and reporting\n- **Integration settings** for external systems\n\n---\n\n### 13. COMMUNICATION SYSTEM\n\n#### 13.1 Notifications\n- **In-app notifications** for achievements and updates\n- **Email notifications** for important events\n- **Push notifications** for mobile engagement\n- **Parental alerts** for safety concerns\n- **System announcements** for updates\n\n#### 13.2 Messaging\n- **AI tutor chat** with natural language processing\n- **Help desk** integration for support\n- **Feedback collection** from users\n- **Announcement delivery** to user groups\n- **Emergency communication** capabilities\n\n---\n\n### 14. REPORTING & ANALYTICS\n\n#### 14.1 Student Analytics\n- **Personal progress** tracking and visualization\n- **Performance trends** over time\n- **Competency mapping** against standards\n- **Time usage** patterns and insights\n- **Achievement history** and milestones\n\n#### 14.2 Parent Reports\n- **Child progress** summaries\n- **Detailed activity** logs\n- **Safety incident** reports\n- **Usage statistics** and time tracking\n- **Comparative analysis** with peers\n\n#### 14.3 Administrative Reports\n- **System usage** metrics\n- **User engagement** analytics\n- **Content effectiveness** analysis\n- **Safety and compliance** reporting\n- **Financial and operational** metrics\n\n---\n\n### 15. TECHNICAL SPECIFICATIONS\n\n#### 15.1 Frontend Architecture\n- **React 18** with TypeScript\n- **Tailwind CSS** for styling with design system\n- **React Router** for navigation\n- **React Query** for state management\n- **Responsive design** for all devices\n\n#### 15.2 Backend Architecture\n- **Supabase** as Backend-as-a-Service\n- **PostgreSQL** database with Row Level Security\n- **Edge Functions** for serverless computing\n- **Real-time subscriptions** for live updates\n- **File storage** for multimedia content\n\n#### 15.3 External Integrations\n- **OpenAI API** for AI tutoring capabilities\n- **HeyGen** for video generation\n- **Speech Recognition API** for voice interactions\n- **Email services** for notifications\n- **Analytics platforms** for usage tracking\n\n---\n\n### 16. SECURITY CONSIDERATIONS\n\n#### 16.1 Data Protection\n- **Encryption at rest** and in transit\n- **Row Level Security** for database access\n- **API authentication** with JWT tokens\n- **Input validation** and sanitization\n- **CORS policies** for cross-origin security\n\n#### 16.2 Privacy Compliance\n- **COPPA compliance** for children's privacy\n- **GDPR considerations** for data rights\n- **Data retention** policies and automated cleanup\n- **Consent management** with audit trails\n- **Right to deletion** implementation\n\n---\n\n### 17. FUTURE ENHANCEMENTS\n\n#### 17.1 Planned Features\n- **Mobile applications** for iOS and Android\n- **Offline mode** for content access\n- **Advanced analytics** with ML insights\n- **Peer collaboration** tools\n- **Teacher portal** for classroom management\n\n#### 17.2 Integration Roadmap\n- **LMS integrations** with popular platforms\n- **Single Sign-On** (SSO) capabilities\n- **Third-party content** providers\n- **Assessment tools** integration\n- **Parent-teacher** communication portal\n\n---\n\nThis specification serves as a comprehensive guide to the platform's current capabilities and provides a foundation for future development and enhancement efforts.\n\n`;
