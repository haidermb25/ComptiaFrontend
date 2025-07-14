// constant/menuItems.js
export const menuItems = [
  {
    title: "Explore Careers",
    hasDropdown: true,
    dropdownItems: [
      "Explore Industries →",
      "Explore Tech Careers →",
      "Careers+ →",
    ],
  },
  {
    title: "Certifications",
    hasDropdown: false,
  },
  {
    title: "Enterprise",
    hasDropdown: false,
  },
  {
    title: "Government",
    hasDropdown: true,
    dropdownItems: ["State & Local →", "Federal →"],
  },
  {
    title: "Partner",
    hasDropdown: false,
  },
  {
    title: "Academic",
    hasDropdown: true,
    dropdownItems: [
      "Higher Education →",
      "Secondary Education →",
      "Instructors →",
      "Students →",
    ],
  },
  {
    title: "Shop",
    hasDropdown: false,
  },
];
export const allContentData = {
  All: {
    topCards: [
      {
        title: "Innovation in Every Industry",
        description:
          "Technology is at the heart of progress, enabling smarter solutions and global connectivity. IT professionals are the architects of this digital transformation.",
        buttonText: "Discover More",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Tech Workforce Trends 2024",
        description:
          "Explore the latest workforce trends, including job growth, salary benchmarks, and the impact of emerging technologies.",
        buttonText: "See the Trends",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Key Tech Stats",
      items: [
        {
          value: "7M",
          description: "Over 7 million professionals work in U.S. tech roles.",
        },
        {
          value: "3x",
          description:
            "Tech job growth outpaces the national average by three times.",
        },
        {
          value: "$2.5T",
          description:
            "Technology adds more than $2.5 trillion to the U.S. economy each year.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  "Digital Foundations": {
    topCards: [
      {
        title: "Building Digital Skills",
        description:
          "Foundational IT skills open doors to a variety of career paths in technology.",
        buttonText: "Start Learning",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Essential Tech Knowledge",
        description:
          "Master the basics of hardware, software, and networking to launch your IT journey.",
        buttonText: "Explore Basics",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Digital Foundations Stats",
      items: [
        {
          value: "80%",
          description: "Of tech jobs require strong foundational skills.",
        },
        {
          value: "1.2M",
          description:
            "Entry-level IT positions available in the U.S. each year.",
        },
        {
          value: "95%",
          description:
            "Employers value certifications for foundational IT roles.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  AI: {
    topCards: [
      {
        title: "Innovation in Every Industry",
        description:
          "Technology is at the heart of progress, enabling smarter solutions and global connectivity. IT professionals are the architects of this digital transformation.",
        buttonText: "Discover More",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Tech Workforce Trends 2024",
        description:
          "Explore the latest workforce trends, including job growth, salary benchmarks, and the impact of emerging technologies.",
        buttonText: "See the Trends",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Key Tech Stats",
      items: [
        {
          value: "7M",
          description: "Over 7 million professionals work in U.S. tech roles.",
        },
        {
          value: "3x",
          description:
            "Tech job growth outpaces the national average by three times.",
        },
        {
          value: "$2.5T",
          description:
            "Technology adds more than $2.5 trillion to the U.S. economy each year.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  Cloud: {
    topCards: [
      {
        title: "Building Digital Skills",
        description:
          "Foundational IT skills open doors to a variety of career paths in technology.",
        buttonText: "Start Learning",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Essential Tech Knowledge",
        description:
          "Master the basics of hardware, software, and networking to launch your IT journey.",
        buttonText: "Explore Basics",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Digital Foundations Stats",
      items: [
        {
          value: "80%",
          description: "Of tech jobs require strong foundational skills.",
        },
        {
          value: "1.2M",
          description:
            "Entry-level IT positions available in the U.S. each year.",
        },
        {
          value: "95%",
          description:
            "Employers value certifications for foundational IT roles.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  Cyber: {
    topCards: [
      {
        title: "Innovation in Every Industry",
        description:
          "Technology is at the heart of progress, enabling smarter solutions and global connectivity. IT professionals are the architects of this digital transformation.",
        buttonText: "Discover More",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Tech Workforce Trends 2024",
        description:
          "Explore the latest workforce trends, including job growth, salary benchmarks, and the impact of emerging technologies.",
        buttonText: "See the Trends",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Key Tech Stats",
      items: [
        {
          value: "7M",
          description: "Over 7 million professionals work in U.S. tech roles.",
        },
        {
          value: "3x",
          description:
            "Tech job growth outpaces the national average by three times.",
        },
        {
          value: "$2.5T",
          description:
            "Technology adds more than $2.5 trillion to the U.S. economy each year.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  Data: {
    topCards: [
      {
        title: "Building Digital Skills",
        description:
          "Foundational IT skills open doors to a variety of career paths in technology.",
        buttonText: "Start Learning",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Essential Tech Knowledge",
        description:
          "Master the basics of hardware, software, and networking to launch your IT journey.",
        buttonText: "Explore Basics",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Digital Foundations Stats",
      items: [
        {
          value: "80%",
          description: "Of tech jobs require strong foundational skills.",
        },
        {
          value: "1.2M",
          description:
            "Entry-level IT positions available in the U.S. each year.",
        },
        {
          value: "95%",
          description:
            "Employers value certifications for foundational IT roles.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  Network: {
    topCards: [
      {
        title: "Innovation in Every Industry",
        description:
          "Technology is at the heart of progress, enabling smarter solutions and global connectivity. IT professionals are the architects of this digital transformation.",
        buttonText: "Discover More",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Tech Workforce Trends 2024",
        description:
          "Explore the latest workforce trends, including job growth, salary benchmarks, and the impact of emerging technologies.",
        buttonText: "See the Trends",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Key Tech Stats",
      items: [
        {
          value: "7M",
          description: "Over 7 million professionals work in U.S. tech roles.",
        },
        {
          value: "3x",
          description:
            "Tech job growth outpaces the national average by three times.",
        },
        {
          value: "$2.5T",
          description:
            "Technology adds more than $2.5 trillion to the U.S. economy each year.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },

  "Tech Support": {
    topCards: [
      {
        title: "Building Digital Skills",
        description:
          "Foundational IT skills open doors to a variety of career paths in technology.",
        buttonText: "Start Learning",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
        gradient: true,
      },
      {
        title: "Essential Tech Knowledge",
        description:
          "Master the basics of hardware, software, and networking to launch your IT journey.",
        buttonText: "Explore Basics",
        imageUrl:
          "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F335a03bebdc511efbd8fb24132066c22&w=1080&q=90",
        gradient: false,
      },
    ],
    stats: {
      heading: "Digital Foundations Stats",
      items: [
        {
          value: "80%",
          description: "Of tech jobs require strong foundational skills.",
        },
        {
          value: "1.2M",
          description:
            "Entry-level IT positions available in the U.S. each year.",
        },
        {
          value: "95%",
          description:
            "Employers value certifications for foundational IT roles.",
        },
      ],
    },
    jobs: [
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems and networks from cyber threats through monitoring, analysis, and defense strategies.",
        totalJobs: "180,000+",
        annualSalary: "$102,600",
        peopleWorking: "145,000",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs, builds, and maintains scalable cloud infrastructures for efficient business operations.",
        totalJobs: "150,000+",
        annualSalary: "$124,000",
        peopleWorking: "120,000",
      },
      {
        title: "Data Analyst",
        description:
          "Uses data to identify trends, generate reports, and support business decision-making.",
        totalJobs: "200,000+",
        annualSalary: "$88,000",
        peopleWorking: "160,000",
      },
      {
        title: "Network Administrator",
        description:
          "Manages and maintains networks to ensure secure, reliable, and efficient communication systems.",
        totalJobs: "110,000+",
        annualSalary: "$84,000",
        peopleWorking: "90,000",
      },
      {
        title: "AI Engineer",
        description:
          "Develops machine learning models and AI applications to solve complex problems and automate tasks.",
        totalJobs: "80,000+",
        annualSalary: "$132,000",
        peopleWorking: "65,000",
      },
      {
        title: "IT Support Specialist",
        description:
          "Provides technical support and troubleshooting for users and systems in a business environment.",
        totalJobs: "220,000+",
        annualSalary: "$62,000",
        peopleWorking: "200,000",
      },
    ],
  },
};

export const enterprisecontentData = {
  Overview: {
    leftCard: {
      title: "Learning solutions to upskill your IT team",
      description:
        "CompTIA equips enterprise tech teams with training and certifications to close IT skills gaps, boost cybersecurity readiness, and drive growth. Our solutions support digital transformation and continuous learning to strengthen your workforce.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
    },
    rightCard: {
      title: "Ready to take the next step?",
      description:
        "Let's discuss your goals and how we can work together to upskill and empower your team.",
    },
    bottomCard: {
      title: "Employee career pathways",
      description:
        "CompTIA’s employee career pathways provide an IT training roadmap aligned with critical roles in cyber, tech support, cloud, data, and more. Equip your team with the skills to solve today's tech challenges and anticipate tomorrow's needs.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
      buttonText: "Employee Career Pathways",
    },
  },
  Solutions: {
    leftCard: {
      title: "Transform Enterprise IT with Scalable Solutions",
      description:
        "Empower your enterprise with end-to-end IT solutions designed to scale, secure, and support rapid innovation. CompTIA's learning framework helps your teams stay ahead in the tech-driven world.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
    },
    rightCard: {
      title: "Looking to boost team performance?",
      description:
        "Our experts will guide you through tailored upskilling strategies aligned with your enterprise objectives.",
    },
    bottomCard: {
      title: "Pathways to IT Excellence",
      description:
        "Build future-ready teams with structured career pathways in cloud, cybersecurity, and tech infrastructure. Ensure your workforce is equipped for tomorrow's tech demands.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
      buttonText: "View Career Pathways",
    },
    moreBottomCard: {
      title: "New World",
      description:
        "Build future-ready teams with structured career pathways in cloud, cybersecurity, and tech infrastructure. Ensure your workforce is equipped for tomorrow's tech demands.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
      buttonText: "View Career Pathways",
    },
  },

  EmployeeCareerPathways: [
    {
      title: "IT Manager",
      description:
        "Lead teams, manage projects, and align IT with business goals.",
    },
    {
      title: "Cloud Architect",
      description:
        "Design and implement scalable cloud solutions for enterprise needs.",
    },
    {
      title: "Security Analyst",
      description:
        "Monitor, analyze, and respond to security incidents across the organization.",
    },
    {
      title: "Data Engineer",
      description:
        "Build and maintain data pipelines to support analytics and business intelligence.",
    },
  ],
  CaseStudy: {
    topCard: {
      title: "Learning solutions to upskill your IT team",
      description:
        "CompTIA equips enterprise tech teams with training and certifications to close IT skills gaps, boost cybersecurity readiness, and drive growth. Our solutions support digital transformation and continuous learning to strengthen your workforce.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
    },
    bottomLeftCard: {
      title: "Ready to take the next step?",
      description:
        "Let's discuss your goals and how we can work together to upskill and empower your team.",
    },
    bottomRightCard: {
      title: "Employee career pathways",
      description:
        "CompTIA’s employee career pathways provide an IT training roadmap aligned with critical roles in cyber, tech support, cloud, data, and more. Equip your team with the skills to solve today's tech challenges and anticipate tomorrow's needs.",
      imageUrl:
        "https://www.comptia.org/_next/image/?url=https%3A%2F%2Fimages.cmp.optimizely.com%2F5c731886bdc411ef888eca5646afc7d8%3Fwidth%3D222%26height%3D333&w=640&q=90",
      buttonText: "Employee Career Pathways",
    },
  },
};
