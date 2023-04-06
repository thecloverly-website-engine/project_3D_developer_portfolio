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
    title: "Backend Developer",
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
      "He's the maintainer of one of my most favorite Custom ROMs (i.e. ProjectElixir), which not only has one of the most beautiful UIs out there, but also runs significantly better as compared to other ROMs, thereby giving me one of the best experiences that I've gotten from my particular device. I will wager that his builds will give you the best use of your device if you can wait for them to pull up with enough patience. ",
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
      " Another aftermarket AOSP ROM which basically offers minimal UI enhancement and close to Stock Android experience with pixel goodies, minimal UI and customisation. Our aim is keep a perfectly balance between great.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "PixelPlus UI",
    description:
      "PixelPlusUI is minimal UI & close to Stock Android ROM which offers great performance and stability with many useful features.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
