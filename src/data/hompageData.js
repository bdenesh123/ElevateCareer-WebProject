import oracleLogo from "../assets/Logo/oracleLogo.png";
import atlassianLogo from "../assets/Logo/atlassianLogo.png";
import cloudflareLogo from "../assets/Logo/cloudflareLogo.png";
import microsoftLogo from "../assets/Logo/microsoftLogo.png";
import vmwareLogo from "../assets/Logo/vmwareLogo.png";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const headerItems = [
  { name: "For jobseekers", href: "jobseekers" },
  { name: "For clients", href: "clients" },
  { name: "Sectors", href: "sectors" },
  { name: "Resources", href: "resources" },
];

export const companyLogos = [
  { src: microsoftLogo, alt: "Microsoft Logo" },
  { src: oracleLogo, alt: "Oracle Logo" },
  { src: atlassianLogo, alt: "Atlassian Logo" },
  { src: cloudflareLogo, alt: "Cloudflare Logo" },
  { src: vmwareLogo, alt: "vmware Logo" },
];

export const jobCards = [
  {
    background: "#FBD774",
    textColor: "#064EA4",
    tagColor: "#064EA4",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    postedDate: "29/11/2025",
  },
  {
    background: "#064EA4",
    textColor: "#ffffff",
    tagColor: "#064EA4",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    postedDate: "29/11/2025",
  },
  {
    background: "#F29973",
    textColor: "#4A2A07",
    tagColor: "#064EA4",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    postedDate: "29/11/2025",
  },
  {
    background: "#FBD774",
    textColor: "#064EA4",
    tagColor: "#064EA4",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    postedDate: "29/11/2025",
  },
];

export const jobSlides = [
  // Slide Set 1
  [
    {
      ...jobCards[0],
      title: "Python Developer",
      tag: "Python",
      location: "Berlin",
      salary: "€70,000",
    },
    {
      ...jobCards[1],
      title: "React Developer",
      tag: "JavaScript",
      location: "Amsterdam",
      salary: "€68,000",
    },
    {
      ...jobCards[2],
      title: "Node.js Backend Engineer",
      tag: "Java",
      location: "Remote",
      salary: "£72,000",
    },
    {
      ...jobCards[3],
      title: "C# Software Engineer",
      tag: "C#",
      location: "Dublin",
      salary: "€75,000",
    },
  ],

  // Slide Set 2
  [
    {
      ...jobCards[0],
      title: "Senior Python Engineer",
      tag: "Python",
      location: "London",
      salary: "£85,000",
    },
    {
      ...jobCards[1],
      title: "Full Stack Engineer",
      tag: "JavaScript",
      location: "Berlin",
      salary: "€78,000",
    },
    {
      ...jobCards[2],
      title: "DevOps Engineer",
      tag: "Java",
      location: "Amsterdam",
      salary: "€80,000",
    },
    {
      ...jobCards[3],
      title: "Frontend React Developer",
      tag: "C#",
      location: "Remote",
      salary: "£70,000",
    },
  ],

  // Slide Set 3
  [
    {
      ...jobCards[0],
      title: "AI Software Engineer",
      tag: "AI",
      location: "London",
      salary: "£90,000",
    },
    {
      ...jobCards[1],
      title: "React Native Developer",
      tag: "Mobile",
      location: "Berlin",
      salary: "€68,000",
    },
    {
      ...jobCards[2],
      title: "Cybersecurity Engineer",
      tag: "Security",
      location: "Amsterdam",
      salary: "€85,000",
    },
    {
      ...jobCards[3],
      title: "Cloud Solutions Architect",
      tag: "Cloud",
      location: "Remote",
      salary: "£92,000",
    },
  ],
];

export const footerLinks = {
  branding: {
    title: "Software Recruitment co.",
    socials: [
      { icon: faLinkedinIn, href: "#" },
      { icon: faFacebook, href: "#" },
      { icon: faInstagram, href: "#" },
      { icon: faTwitter, href: "#" },
    ],
  },

  sections: [
    {
      title: "Explore",
      items: [
        "Homepage",
        "For jobseekers",
        "For clients",
        "Our sectors",
        "Resources",
        "Contact us",
      ],
    },
    {
      title: "Sectors",
      items: [
        "Software engineering",
        "DevOps",
        "Cloud",
        "Infrastructure",
        "Testing",
        "Security",
      ],
    },
    {
      title: "Services",
      items: [
        "Executive search",
        "Project-based hiring",
        "Remote talent hiring",
        "HR advisory",
        "Workforce planning",
      ],
    },
  ],
};
