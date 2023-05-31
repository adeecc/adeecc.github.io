import { AboutConfig } from "types"
import { Icons } from "@/components/icons"

export const aboutConfig: AboutConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
  careerEvents: [
    {
      id: 1,
      time: "Jun 2021 - Jul 2021",
      loc: "Bengaluru, India",
      position: "Consultant Intern",
      org: "Happiest Minds",
      details: [
        "Consultant Intern in the Center of Excellence division.",
        "Developed a Deep Reinforcement Learning Solution to optimize a Multi Echelon Inventory Management System.",
        "Used PyTorch, and the Stable baselines 3 package to explore multiple policy gradient algorithms.",
        "Obtain approximately 27% better returns using the TD3 Model compared to the baseline policy",
      ],
    },
    {
      id: 2,
      time: "May 2022 - Jul 2022",
      loc: "Hyd, India",
      position: "Summer Intern",
      org: "D.E. Shaw",
      details: [
        "Monitoring framework for tracking changes on a data source",
        "Decentralized backend services in python, with MongoDB as central data store | React-Redux web application",
        "Interactive selection and parsing of various HTML elements including tables, lists and grids",
        "Alert rule framework for sanity check of parsed data",
      ],
    },
    {
      id: 3,
      time: "Aug 2022 - Jan 2023",
      loc: "Saarbrücken, Germany",
      position: "Visiting Scholar",
      org: "Max Planck Institute for Software Systems",
      details: [
        'Implement contemporary papers including "Automatic Reward Design via Learning Motivation-Consistent Intrinsic Rewards"',
        "Used PyTorch and iterated over Stable baselines 3 to create the sparse environments and the algorithms",
        "Replicated and confirmed the results obtained by the original authors ",
      ],
    },
    {
      id: 4,
      time: "Jan 2023 - Jun 2023",
      loc: "Bengaluru, India",
      position: "Intern, MTS",
      org: "Nutanix",
      details: ["Coming soon..."],
    },
  ],
  featuredProjects: [
    {
      id: 1,
      title: "B(CMS)",
      desc: "A minimal replacement for university Moodle application",
      img: "/images/bcms.png",
      stack: ["React", "Express", "Tailwind", "TypeScript", "Postgres"],
      link: "https://github.com/adeecc/bcms-client",
      ext: "https://bcms.netlify.app",
    },
    {
      id: 2,
      title: "Shiftrr",
      desc: "Freelancing platofrm for students of BITS",
      img: "/images/shiftrio.png",
      stack: ["React", "Tailwind", "TypeScript"],
      link: "https://github.com/adeecc/shiftrr-client",
    },
    {
      id: 3,
      title: "Meet Helper",
      desc: "Manage University wide Google Meet Class Links",
      img: "/images/meethelp.png",
      stack: ["Express", "MongoDB", "React", "Heroku"],
      link: "https://github.com/adeecc/meet_helper",
    },
  ],
  socials: [
    {
      title: <Icons.gitHub className="h-6 w-6" />,
      href: "https://github.com/adeecc",
    },
    {
      title: <Icons.linkedIn />,
      href: "https://www.linkedin.com/in/aditya-chopra11/",
    },
    { title: <Icons.twitter />, href: "https://twitter.com/adeecc11" },
  ],
}
