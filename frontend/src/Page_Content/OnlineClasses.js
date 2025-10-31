import diverse_participants_icon from "src/assets/images/online-classes/New/diverse-participants.svg";
import storage_benefits_icon from "src/assets/images/online-classes/New/storage-benefits.svg";
import recordings_icon from "src/assets/images/online-classes/New/recordings.svg";
import duration_icon from "src/assets/images/online-classes/New/duration.svg";
import chat_feature_icon from "src/assets/images/online-classes/New/chat-feature.svg";
import screen_sharing_icon from "src/assets/images/online-classes/New/screen-sharing.svg";
import subscription_benefits_icon from "src/assets/images/online-classes/New/subscription-benefits.svg";
import share_room_access_icon from "src/assets/images/online-classes/New/share-room-access.svg";
import breakout_rooms_icon from "src/assets/images/online-classes/New/breakout-rooms.svg";
import shared_notes_icon from "src/assets/images/online-classes/New/shared-notes.svg";
import share_recordings_icon from "src/assets/images/online-classes/New/share-recordings.svg";
import multi_user_dashboard_icon from "src/assets/images/online-classes/New/multi-user-dashboard.svg";
// import online_clasroom_scaled from "src/assets/images/online-classes/New/online-clasroom-scaled.webp";
import create_an_account from "src/assets/images/online-classes/New/create-an-account.svg";
import setup_your_classroom from "src/assets/images/online-classes/New/setup-your-classroom.svg";
import teach_your_classes from "src/assets/images/online-classes/New/teach-your-classes.svg";
import { BASE_URL, SECOND_BASE_URL } from "src/apiClients/config";

export const onlineClaasesFeatures = [
  {
    title: "Diverse Participants",
    description:
      "The meeting room can accommodate numerous participants, and the moderator who has subscribed to specific plans will reap the advantage of an extended meeting duration.",
    image: diverse_participants_icon,
  },
  {
    title: "Storage benefits",
    description:
      "Moderators will have the advantage of utilizing storage benefits, enabling them to securely store files, recordings, and other relevant data",
    image: storage_benefits_icon,
  },
  {
    title: "Recordings",
    description:
      "The user can record their meeting room and can conveniently access it at any given time.",
    image: recordings_icon,
  },
  {
    title: "Duration",
    description:
      "Users are allotted meeting durations based on their subscription, allowing them to schedule and record meetings accordingly.",
    image: duration_icon,
  },
  {
    title: "Chat feature",
    description:
      "The participants in the meeting can utilize the Public / Private Chat feature to communicate or engage in conversation.",
    image: chat_feature_icon,
  },
  {
    title: "Screen Sharing",
    description:
      "Screen sharing allows the moderator to display their screen content to participants in a virtual meeting.",
    image: screen_sharing_icon,
  },
  {
    title: "Multi-user dashboard",
    description:
      "The multi-user dashboard on the AtLearn website enables multiple users to collaboratively access and manage educational resources, track progress, and participate in courses.",
    image: multi_user_dashboard_icon,
  },
  {
    title: "Subscription benefits",
    description:
      "The user can avail the advantage as per their subscription plan, along with a trial period of 14 days, depending on the subscription chosen",
    image: subscription_benefits_icon,
  },
  {
    title: "Share room access",
    description:
      "Share room access enables users to grant access to their rooms to other moderators and users, facilitating the creation or scheduling of shared rooms.",
    image: share_room_access_icon,
  },
  {
    title: "Breakout Rooms",
    description:
      "The moderator can utilize the Screen Sharing Multi-User Whiteboard during their presentation, enabling them to grant access to any participant for collaborative use.",
    image: breakout_rooms_icon,
  },
  {
    title: "Shared Notes",
    description:
      "Moderators can utilize breakout rooms to establish smaller internal meetings or discussions before the main meeting.",
    image: shared_notes_icon,
  },
  {
    title: "Share Recordings ",
    description:
      "The feature allows users to easily post meeting recordings to social media platforms directly from the online meeting interface.",
    image: share_recordings_icon,
  },
  // Add more subject objects as needed
];

export const BestOnlineClassroom = {
  headerText: "Top Virtual Learning Software of 2025",
  description: [
    `Seeking for best online classroom? `,
    `Unlock your learning and training potential with “Atlearn”. Our virtual classroom is a fully developed and streamlined product, ready to use. With a deep understanding of the technical components, user experience design, and educational objectives, our team of experts has created an effective system for remote learning with our interactive classroom software. This virtual class platform is designed to engage users and learn the desired learning outcomes efficiently and effectively.`
  ],
  VideoLink: `jU0N4wi8P9k`,
};

export const OnlineClassroomPlatform = {
  headerText: "Atlearn - Host, Join & Record Online Meetings in One Click",
  description: [
    `Atlearn is an innovative online meeting platform tailored for virtual meetings. The platform is designed to enhance applied learning by providing <a href=https://www.youtube.com/watch?v=XjecB3EEtGI title="participants with the tools to collaborate"  class="text-blue" target="_blank" rel="noopener noreferrer" >participants with the tools to collaborate</a> effectively and receive immediate feedback.`,
      `Our online meeting platforms are practically oriented, involving various tools and techniques in our sessions, discussions, demos, problem-solving, simulations, and instructor-led training programs. With <a href=${BASE_URL} title="Atlearn" class="text-blue" target="_blank" rel="noopener noreferrer" >Atlearn</a> , you can easily create your own virtual meetings to host interactive sessions or join others through a short, convenient link. This flexibility ensures that learning is seamless, engaging, and accessible from anywhere.`,
  ],
};

export const Benefits = {
  headerText: "The Benefits Of Using Our Virtual Classroom Platforms",
  description: [
    `Our online training platform offers many benefits including greater convenience, reduced cost, improved student and as well as employee engagement, advanced tracking capabilities, and the potential for scalability. It also provides a more interactive learning experience with quizzes, polls, and simulations to help keep learners engaged in the material. Additionally, with an online system, trainers can access their courses from any internet-enabled device at any time.`,
  ],
};

export const SeamlessVideo = {
  heading: "No More Boring Meetings - Atlearn's Interactive Features",
  paragraph:
    "Explore cutting-edge features designed to enhance your virtual classroom  experience with Atlearn",
};

export const SetUpanOnlineClassroom = {
  heading: "How to Set Up an Online Meeting in Minutes | Atlearn",
  paragraph:
    "Discover Atlearn's Virtual Meeting Features: HD Video, Live Engagement & AI-Powered Tools",
};

export const SetUpanOnlineClassroomCards = [
  {
    title: "Create an Account",
    description:
      "To start using Atlearn’s Virtual Meeting platform, sign up for a free account. You’ll receive an email with instructions on how to log in and access the system.",
    image: create_an_account,
    step: 1,
  },
  {
    title: "Set Up Your Meeting",
    description:
      "After logging in, your dashboard will display scheduled meetings and participant details. To create a new meeting, click “Create New Meeting” at the top right corner of the screen and customize settings as needed.",
    image: setup_your_classroom,
    step: 2,
  },
  {
    title: "Host Your Meeting",
    description:
      "Engage with participants in real time using interactive features such as screen sharing, live chat, and breakout rooms. You can also record sessions, share resources, and manage participant interactions seamlessly.",
    image: teach_your_classes,
    step: 3,
  },
];

export const Best_Online_Classroom_Software = {
  headerText: "#1 Online Meeting Platform - Engaging Teams & Webinars",
  description: [
    `Seeking the best online meeting solution? Unlock your collaboration and training potential with Atlearn.`,
    `Our virtual meeting platform is a fully developed and streamlined product, ready to use. With a deep understanding of the technical components, user experience design, and engagement strategies, our team of experts has created an effective system for remote meetings with our interactive meeting software. This virtual meeting platform is <a href=${SECOND_BASE_URL}/join-meetings title="designed to engage users" class="text-blue" target="_blank" rel="noopener noreferrer" >designed to engage users</a> and achieve desired outcomes efficiently and effectively.`,
  ],
  VideoLink: `K5YdF5S6yrE`,
  
};

export const Best_Online_Classroom_Software_Tabs = [
  {
    title: "The Benefits Of Using Atlearn for Virtual Classroom",
    features: [
      {
        description:
          "Experience unparalleled convenience and cost savings with our virtual classroom platforms, designed to enhance engagement for both students and employees alike.",
      },
      {
        description:
          "Enjoy advanced tracking features that allow for seamless monitoring of progress, ensuring a more personalized learning journey.",
      },
      {
        description:
          "Foster an interactive environment through quizzes, polls, and simulations, all while providing trainers the flexibility to access courses anytime, anywhere on any online classroom learning platform or internet-connected device.",
      },
    ],
  },
  {
    title: "Why Choose Atlearn?",
    paragraphs: [
      `Atlearn is among the best online e-learning platforms, offering comprehensive features for educators and learners`,
    ],
    features: [
      {
        description:
          "Experience unparalleled convenience and cost savings with our virtual classroom platforms, designed to enhance engagement for both students and employees alike.",
      },
      {
        description:
          "Enjoy advanced tracking features that allow for seamless monitoring of progress, ensuring a more personalized learning journey.",
      },
      {
        description:
          "Foster an interactive environment through quizzes, polls, and simulations, all while providing trainers the flexibility to access courses anytime, anywhere on any online classroom learning platform or internet-connected device.",
      },
    ],
    end_paragraphs: [
      `Our online training platforms for businesses are specifically designed to meet organizational needs, while our online digital learning platforms and e-learning platforms for students are perfect for academic purposes.`,
    ],
  },
  {
    title: "Key Advantages of Atlearn",
    features: [
      {
        description:
          "Atlearn is a digital platform for learning, making it one of the top 5 online teaching platforms for schools and businesses.",
      },
      {
        description:
          "Explore online skill learning platforms and free virtual learning platforms to enhance personal growth and professional development.",
      },
    ],
    end_paragraphs: [
      `Atlearn combines flexibility, innovation, and efficiency to deliver an outstanding virtual learning experience.`,
    ],
  },
];

export const meetingCTAForms ={
  label:"Elevate Your Virtual Meetings",
  heading:"Ready to Upgrade Your Virtual Classroom with AI?",
  description:"Tell us how to contact you and we’ll show you how Atlearn empowers your teaching with smart, interactive tools.",
  // ctaName:"Try It Now",
  // ctaLink:"/room"
}

export const MeetingCTA = {
  // label: "Transform Learning, Simplify Teaching",
  heading: "Next-Gen Virtual Classrooms",
  description:
    "Experience smart, interactive, and secure virtual meetings designed specifically for educational needs.",
  ctaName: "Try Atlearn Meetings",
  embedPopupFormId: "elY645",
};
