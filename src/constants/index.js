import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Quick Learner",
    icon: backend,
  },
  {
    title: "Pentester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Agile Methodology Virtual Experience Program",
    company_name: "Cognizant",
    icon: meta,
    iconBg: "#383E56",
    date: "Sep 2022 - Oct 2022",
    points: [
      "Completed practical task modules in",
      "Waterfall vs Agile",
      "User Stories",
      "Role Assignments and Ceremonies",
      "Agile Tools and Concepts",
      "Agile Curve Balls",
      "Agile Methodology Review and",
      "Additional Resources.",
    ],
  },
  {
    title: "Technology Consulting Virtual Internship",
    company_name: "Deloitte",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Over the period of October 2021 to",
      "August 2022,I have completed",
      "practical task modules in:",
      "Design a Business Case",
      "Considerations For Mobilisation",
      "Define the project approach",
      "Further analysis & solution",
      "presentation",
      "Understanding Cloud Computing",
      "Cloud Feasibility Assessment",
      "Cloud Readiness Assessment",
    ],
  },
  {
    title: "Cybersecurity Virtual Experience Program",
    company_name: "Mastercard",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2022 - Mar 2022",
    points: [
      "Over the period of March 2022, I",
      "have completed practical task",
      "modules in:",
      "Design a phishing email simulation",
      "Interpret phishing simulation results",
    ],
  },
  {
    title: " Web Development InternWeb Development Intern ",
    company_name: " Suven Consultants and Technology Pvt.Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2021",
    points: [
      "Directed and shaped a 365 Entertainment using HTML5 and CSS3",
      "Designed and developed a Blogging Frontend Website using HTML5 and CSS3",
      "Developed a 1 page CSS Static Website and Voter Registration page with basic stylings",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "My favourite works of SriBalaji are Pixel Plus UI and ProjectElixir, two Custom Rom projects. Both are incredibly smooth. I appreciate your help because I haven't come across such a nice smooth in any other rom. In the future, I wish to acquire such a refined rom light.",
    name: "Rajbir Singh",
    designation: "India",
    company: "",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "He's the maintainer of one of my most favorite Custom ROMs (i.e. ProjectElixir), which runs significantly better as compared to other ROMs, thereby giving me one of the best experiences that I've gotten from my particular device. I will wager that his builds will give you the best use of your device if you can wait for them to pull up with enough patience. ",
    name: "Mr.ミニマル",
    designation: "Germany",
    company: "",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Thanks to the incredible work of the maintainer, my device now runs smoother and faster than ever before. The UI is absolutely stunning, and I can't imagine going back to using any other ROM. If you're looking for the best possible experience for your device, I highly recommend giving Elixir a try. Trust me, you won't be disappointed!",
    name: "Lisa Wang",
    designation: "",
    company: "Bangladesh",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project Elixir",
    description:
      "The main goal of Project Elixir is to offer users a smooth and stable ROM that doesn't compromise on performance or battery life. The ROM achieves this by focusing on minimal UI enhancements that are designed to improve the overall user experience, without adding unnecessary bloat or features.",
    tags: [
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "bash",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://sribalaji.eu.org/",
  },
  {
    name: "Droid-ify",
    description:
      "Designed and developed a website to promote an app with over 50K downloads, increasing its visibility and reach among potential users. Collaborated with the app development team to ensure a seamless user experience between the app and the website. Implemented a modern and responsive design, utilizing NextJS, Tailwind CSS, to enhance the overall aesthetic and functionality of the website.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Droif-ify",
  },
  {
    name: "PixelPlus UI",
    description:
      "PixelPlusUI is an open-source custom ROM based on the AOSP (Android Open Source Project) with a minimal UI that closely resembles the Stock Android experience. The ROM is designed to provide users with great performance and stability, as well as several useful features that enhance the overall user experience.",
    tags: [
      {
        name: "AOSP",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "bash",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sribalaji.eu.org/",
  },
];

export { services, technologies, experiences, testimonials, projects };
