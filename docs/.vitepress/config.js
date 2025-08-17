export default {
  title: "Tech Job Preparation",
  description: "Complete guide for landing your first tech job",
  base: "/tech-job-preparation-bd/",
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#10b981" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Tech Job Preparation" }],
    ["meta", { name: "og:image", content: "/og-image.png" }],
  ],

  themeConfig: {
    logo: "/logo.png",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "General Career Guides",
        items: [
          { text: "Resume Building", link: "/swe/resume-building" },
          { text: "Interview Tips", link: "/career/interview-tips" },
        ],
      },
      {
        text: "SWE",
        items: [
          { text: "Resume Building", link: "/swe/resume-building" },
          {
            text: "Introduction to BD Companies",
            link: "/swe/introduction-to-bd-companies",
          },
          { text: "Problem-Solving + DSA", link: "/swe/problem-solving-dsa" },
          { text: "Object Oriented Programming", link: "/swe/oop" },
          { text: "Database", link: "/swe/database" },
          { text: "Operating System", link: "/swe/os-basics" },
          // { text: 'Technical Skills', link: '/technical-skills' },
        ],
      },
      {
        text: "SQA",
        items: [
          { text: "Resume Building", link: "/sqa/resume-building" },
          { text: "Manual Testing", link: "/sqa/manual-testing" },
          { text: "Automation Testing", link: "/sqa/automation-testing" },
          { text: "Test Strategy", link: "/sqa/test-strategy" },
          { text: "Database", link: "/sqa/database" },
        ],
      },
      {
        text: "DevOps",
        items: [{ text: "Resume Building", link: "/devops/resume-building" }],
      },
      {
        text: "UI/UX",
        items: [
          { text: "Resume Building", link: "/uiux/resume-building" },
          { text: "Design Principles", link: "/uiux/design-principles" },
          { text: "Prototyping", link: "/uiux/prototyping" },
          { text: "Usability Testing", link: "/uiux/usability-testing" },
        ],
      },
      {
        text: "ML/AI",
        items: [
          { text: "Resume Building", link: "/mlai/resume-building" },
          { text: "Math Foundations", link: "/mlai/math-foundations" },
          { text: "ML Models", link: "/mlai/ml-models" },
          { text: "Deployment", link: "/mlai/deployment" },
        ],
      },
      {
        text: "Companies",
        link: "https://tamimehsan.github.io/interview-questions-bangladesh/",
      },
    ],

    sidebar: {
      "/career/": [
        {
          text: "General Career Guides",
          base: "/career",
          items: [
            { text: "Resume Building", link: "/resume-building" },
            { text: "Interview Tips", link: "/interview-tips" },
            { text: "Salary Negotiation", link: "/salary-negotiation" },
          ],
        },
      ],
      "/technical/": [
        {
          text: "Core Technical Skills",
          base: "/technical",
          items: [
            { text: "OOP", link: "/oop" },
            { text: "Databases", link: "/databases" },
            { text: "Git & Version Control", link: "/git-version-control" },
            { text: "Networking Basics", link: "/networking-basics" },
            { text: "APIs & HTTP", link: "/apis-http" },
          ],
        },
      ],
      "/swe/": [
        {
          text: "Software Engineering",
          base: "/swe",
          items: [
            { text: "Resume Building", link: "/resume-building" },
            {
              text: "Introduction to BD Companies",
              link: "/introduction-to-bd-companies",
            },
            { text: "Problem-Solving + DSA", link: "/problem-solving-dsa" },
            { text: "Object Oriented Programming", link: "/oop" },
            { text: "Database", link: "/database" },
            { text: "Operating System", link: "/os-basics" },
            // { text: 'Technical Skills', link: '/technical-skills' },
          ],
        },
      ],
      "/sqa/": [
        {
          text: "Software Quality Assurance",
          base: "/sqa",
          items: [
            { text: "Resume Building", link: "/resume-building" },
            { text: "Manual Testing", link: "/manual-testing" },
            { text: "Automation Testing", link: "/automation-testing" },
            { text: "Test Strategy", link: "/test-strategy" },
            { text: "Database", link: "/database" },
          ],
        },
      ],
      "/devops/": [
        {
          text: "DevOps",
          base: "/devops",
          items: [{ text: "Resume Building", link: "/resume-building" }],
        },
      ],
      "/uiux/": [
        {
          text: "UI/UX",
          base: "/uiux",
          items: [
            { text: "Design Principles", link: "/design-principles" },
            { text: "Prototyping", link: "/prototyping" },
            { text: "Usability Testing", link: "/usability-testing" },
          ],
        },
      ],
      "/mlai/": [
        {
          text: "ML/AI",
          base: "/mlai",
          items: [
            { text: "Math Foundations", link: "/math-foundations" },
            { text: "ML Models", link: "/ml-models" },
            { text: "Deployment", link: "/deployment" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tanb33r/tech-job-preparation-bd",
      },
    ],

    footer: {
      message: "Built with ❤️ for job seekers in 🇧🇩",
      copyright: "Copyright © 2025 Tech Job Preparation",
    },

    editLink: {
      pattern:
        "https://github.com/tanb33r/tech-job-preparation-bd/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },

  markdown: {
    theme: "github-dark",
    lineNumbers: true,
  },

  sitemap: {
    hostname: "https://tanb33r.github.io/tech-job-preparation-bd/",
  },
};
