export default {
  title: 'Tech Job Preparation',
  description: 'Complete guide for landing your first tech job',
  base: "/tech-job-preparation-bd/",
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Tech Job Preparation' }],
    ['meta', { name: 'og:image', content: '/og-image.png' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'General Career Guides', 
        items: [
          { text: 'Resume Building', link: '/career/resume-building' },
          { text: 'Interview Tips', link: '/career/interview-tips' },
          { text: 'Salary Negotiation', link: '/career/salary-negotiation' }
        ]
      },
      { 
        text: 'Core Technical Skills', 
        items: [
          { text: 'OOP', link: '/technical/oop' },
          { text: 'Databases', link: '/technical/databases' },
          { text: 'Git & Version Control', link: '/technical/git-version-control' },
          { text: 'Networking Basics', link: '/technical/networking-basics' },
          { text: 'APIs & HTTP', link: '/technical/apis-http' }
        ]
      },
      { 
        text: 'SQA', 
        items: [
          { text: 'Manual Testing', link: '/sqa/manual-testing' },
          { text: 'Automation Testing', link: '/sqa/automation-testing' },
          { text: 'Test Strategy', link: '/sqa/test-strategy' }
        ]
      },
      { 
        text: 'SWE', 
        items: [
          { text: 'Introduction to BD Companies', link: '/swe/introduction-to-bd-companies' },
          { text: 'Problem-Solving + DSA', link: '/swe/problem-solving-dsa' },
          { text: 'Object Oriented Programming', link: '/swe/oop' },
          { text: 'Database', link: '/swe/database' },
          { text: 'Operating System', link: '/swe/os-basics' },
          // { text: 'Technical Skills', link: '/swe/technical-skills' },
        ]
      },
      { 
        text: 'UI/UX', 
        items: [
          { text: 'Design Principles', link: '/uiux/design-principles' },
          { text: 'Prototyping', link: '/uiux/prototyping' },
          { text: 'Usability Testing', link: '/uiux/usability-testing' }
        ]
      },
      { 
        text: 'ML/AI', 
        items: [
          { text: 'Math Foundations', link: '/mlai/math-foundations' },
          { text: 'ML Models', link: '/mlai/ml-models' },
          { text: 'Deployment', link: '/mlai/deployment' }
        ]
      },
      { 
        text: 'Companies', 
        link: 'https://tamimehsan.github.io/interview-questions-bangladesh/'
      }
    ],
    
    sidebar: {
      '/career/': [
        {
          text: 'General Career Guides',
          base:  '/career',
          items: [
            { text: 'Resume Building', link: '/resume-building' },
            { text: 'Interview Tips', link: '/interview-tips' },
            { text: 'Salary Negotiation', link: '/salary-negotiation' }
          ]
        }
      ],
      '/technical/': [
        {
          text: 'Core Technical Skills',
          items: [
            { text: 'OOP', link: '/technical/oop' },
            { text: 'Databases', link: '/technical/databases' },
            { text: 'Git & Version Control', link: '/technical/git-version-control' },
            { text: 'Networking Basics', link: '/technical/networking-basics' },
            { text: 'APIs & HTTP', link: '/technical/apis-http' }
          ]
        },
        {
          text: 'SWE',
          items: [
            { text: 'Introduction to BD Companies', link: '/swe/introduction-to-bd-companies' },
            { text: 'Problem-Solving + DSA', link: '/swe/problem-solving-dsa' },
            { text: 'Object Oriented Programming', link: '/swe/oop' },
            { text: 'Database', link: '/swe/database' },
            { text: 'Operating System', link: '/swe/os-basics' },
            // { text: 'Technical Skills', link: '/swe/technical-skills' },
          ]
        }
      ],
      '/sqa/': [
        {
          text: 'SQA',
          items: [
            { text: 'Manual Testing', link: '/sqa/manual-testing' },
            { text: 'Automation Testing', link: '/sqa/automation-testing' },
            { text: 'Test Strategy', link: '/sqa/test-strategy' },
            { text: 'Database', link: '/sqa/database' }
          ]
        }
      ],
      '/swe/': [
        {
          text: 'SWE',
          items: [
            { text: 'Introduction to BD Companies', link: '/swe/introduction-to-bd-companies' },
            { text: 'Problem-Solving + DSA', link: '/swe/problem-solving-dsa' },
            { text: 'Object Oriented Programming', link: '/swe/oop' },
            { text: 'Database', link: '/swe/database' },
            { text: 'Operating System', link: '/swe/os-basics' },
            // { text: 'Technical Skills', link: '/swe/technical-skills' },
          ]
        }
      ],
      '/uiux/': [
        {
          text: 'UI/UX',
          items: [
            { text: 'Design Principles', link: '/uiux/design-principles' },
            { text: 'Prototyping', link: '/uiux/prototyping' },
            { text: 'Usability Testing', link: '/uiux/usability-testing' }
          ]
        }
      ],
      '/mlai/': [
        {
          text: 'ML/AI',
          items: [
            { text: 'Math Foundations', link: '/mlai/math-foundations' },
            { text: 'ML Models', link: '/mlai/ml-models' },
            { text: 'Deployment', link: '/mlai/deployment' }
          ]
        }
      ]
    },
    
    search: {
      provider: 'local'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tanb33r/tech-job-preparation-bd' }
    ],
    
    footer: {
      message: 'Built with ❤️ for job seekers in Bangladesh',
      copyright: 'Copyright © 2025 Tech Job Preparation'
    },
    
    editLink: {
      pattern: 'https://github.com/tanb33r/tech-job-preparation-bd/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  
  markdown: {
    theme: 'github-dark',
    lineNumbers: true
  },
  
  sitemap: {
    hostname: 'https://tanb33r.github.io/tech-job-preparation-bd/'
  }
}
