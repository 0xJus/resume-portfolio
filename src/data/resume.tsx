import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "justin stennett",
  initials: "JS",
  url: "https://dillion.io",
  location: "Rochester, NY",
  locationLink: "https://www.google.com/maps/place/rochester",
  description:
    "Junior Software Engineer & Creative Designer. ",
  summary:
    "As a recent college graduate, I spend my free time creating digital applications and services that merge technology, design, and marketing into one. Over the years, I have acquired experience in web development, automation, brand strategy, and content creation and I am highly skilled in leading projects from concept to execution, whether developing web applications, or designing compelling visuals. I always find myself seeking new challenges that spark new creativity and innovation.",
  avatarUrl: "/me.jpg",
  skills: [
    "Full-Stack Development",
    "Version Control",
    "Adobe Creative Suite",
    "Technical Drawings",
    "Project Management",
    "Database Management",
    "Video Editing & Motion Graphics",
    "UI/UX Design & Prototyping",
    "API Development & Integration",
    "Textile & Fabric Knowledge",
    "Social Media Marketing & Automation",
    "SDLC, Scrum and Agile Methodologies",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "stennettjustin55@gamil.com",
    tel: "+1-845-775-1543",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xJus",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/justin-stennett-20a56b247/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Linktree: {
        name: "Linktree",
        url: "https://linktr.ee/0xjusto",
        icon: Icons.globe,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "United Parcel Service",
      href: "https://www.ups.com/us/en/home",
      badges: [],
      location: "Newburgh, NY",
      title: "Seasonal Driver Helper",
      logoUrl: "/ups.svg",
      start: "September 2019",
      end: "February 2020",
      description:
        "Responsibilities were loading and unloading the truck, contacting clients, collecting payments, communicating with dispatchers and completing a minimal amount of paperwork. Developed strong organization skills, due to being in a fast-paced environment (Christmas Season). Cultivated relationships with workers who were from various backgrounds and cultures. Managed delivery efficiency and outperformed expectation, which created a successful work environment.",
    },
    {
      company: "No More Promises LLC",
      href: "https://nomorepromisesny.com/",
      badges: [],
      location: "Rochester, NY",
      title: "Creative Designer / Marketing Manager",
      logoUrl: "/nmp.png",
      start: "June 2020",
      end: "Present",
      description:
        "Managed social media content using marketing tools like Meta Business Suite, which created a consistent and engaging online presence between social media accounts. Schedule and coordinated paid marketing and advertising campaigns via Meta Business Suite. Designed quality graphic advertisements for various companies and businesses. Directed photo-shoots and designed multi media assets, to further enhance the company's brand/identity on social media platforms amassing a total following of over 3.000 users on all social media platforms combined. Over $10,000 in net sales in my Shopify store during a period of 2 years while pursuing my Bachelors degree",
    },
  ],
  education: [
    {
      school: "State University of New York at Brockport",
      href: "https://www.brockport.edu/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/bport.jpg",
      start: "2019",
      end: "2025",
    },
    {
      school: "Newburgh Free Academy",
      href: "https://ibo.org",
      degree: "High School Diploma",
      logoUrl: "https://image.maxpreps.io/school-mascot/8/1/9/81971639-97c7-4404-9a23-07cb153324f0.gif?version=636956550600000000&width=128&height=128&auto=webp&format=pjpg%22",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "PTCGP Database ( Latest )",
      href: "https://wonder-packs.onrender.com",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Designed and developed a quick web service that achieved it's functionality as a community database for the Pokemon Trading Card Game Pocket in-game God Packs and implemented Discord OAuthV2 to protect API routes",
      technologies: [
        "HTML",
        "CSS",
        "Nodes.js",
        "PostgreSQL",
        "Postman",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://wonder-packs.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xJus/wonder-packs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/software-projects/ptcgp.png",
    },
    {
      title: "Automated Greenhouse System",
      href: "",
      dates: "January 2023 - February 2023",
      active: true,
      description:
        "Designed and developed an automated greenhouse control system to monitor and regulate environmental conditions, using a Raspberry Pi as a host server. I developed a responsive web interface using React to provide users with remote access to system data and controls of their greenhouse.",
      technologies: [
        "React",
        "CSS",
        "Python",
        "JavaScript",
        "Raspberry Pi",
        "Internet-of-Things"
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Online Learning Web Service",
      href: "",
      dates: "September 2024 - December 2024",
      active: true,
      description:
        "Created a online learning  web service that acted as a tool / platform for students to learn online with. Created the basic UX implementation and create / review any API documentation pertaining to the back-end.",
      technologies: [
        "React",
        "CSS",
        "Node.js",
        "PostgreSQL",
        "Postman",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rfanns/423-Project/tree/master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Kahoot Replica ( work in progress )",
      href: "",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "In the process of re-creating a personal Kahoot Replica to make custom quizzes so I can play with family and friends using WebSockets.",
      technologies: [
        "React",
        "CSS",
        "PostgreSQL",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/software-projects/kahoot.png",

    },
    {
      title: "Old School RuneScape Script ", 
      href: "https://magicui.design",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "This simple Python script that automates flipping items in the OSRS Grand Exchange using the OSRS RuneLite client application along with the Flipping CoPilot RuneLite plugin. ",
      technologies: [
        "Python",
        "CLI",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xJus/jFlipper-OSRS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/software-projects/jflipper.png",

    },
    {
      title: "Instagram Follower Bot ", 
      href: "https://magicui.design",
      dates: "September 2022 - May 2023",
      active: true,
      description:
        "A Java application that used headless browsers to login and generate organic activity on Instagram allowing for organic follower growth for the account. ",
      technologies: [
        "Java",
        "CLI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xJus/instabot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",

    },
  ],
} as const;


