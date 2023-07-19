import content from "./content";

const en = {
  pages: {
    home: {
      header: {
        name: "Muslima Zakirjanova",
        title: "Python Engineer",
        description: [
          "I have been building TelegramBots and websites in Python programming language and  PostgreSQL database. After that I learned Django and DRF Python freamworks and  Algorithms. I am currently learning new technologies",
        ],
        btn: {
          text: "My CV/Resume",
          link: "/resume",
        },
      },
      projects: {
        title: "My projects",
        btn: {
          link: "/projects",
          text: "all projects",
        },
      },
    },
    notFound: {
      title: "404",
      text: "Page not found",
      btn: {
        text: "Home page",
        link: "/",
      },
      backBtn: {
        text: "last page",
      },
    },
    resume: {
      mainTitle: "Zakirjanova Muslima",
      mainDescription: "backend developer",
      aboutMe: {
        title: "about me",
        wrapper: [
          "I am an experienced developer with over a year of dedicated experience in building Telegram bots and websites using the Python programming language and its associated frameworks. Throughout my journey, I have gained proficiency in leveraging Python's versatility and extensive libraries to create efficient and interactive solutions.",
          "I am passionate about staying up to date with the latest industry trends and technologies. This drive for continuous learning allows me to adopt new techniques and tools, ensuring that I can deliver innovative and cutting-edge solutions to meet the evolving needs of clients and users.",
        ],
      },
      workExperience: {
        title: "Work Experience",
        wrapper: [
          {
            date: "2022-2023",
            name: '"Elga Manzur" furniture store',
            description: [
              "Intern as an Assistant Web Developer", 
              "The objective is to reduce the number of queries performed on the database and implement automation within the system.",
              "I actively participated in the development of a website aimed at streamlining the operational processes within the organization, with the objective of enhancing overall productivity.",
              "The process of collaborating with individuals has been found to enhance one's communication skills.",
              "I have engaged in project management activities utilizing the Trello platform.",
            ],
          },
        ],
      },
      education: {
        title: "education",
        wrapper: [
          {
            date: "2021- now",
            name: "Technology Management Communication Institute in Tashkent",
            description: "IT Information Technology",
          },
          {
            date: "2022-2023",
            name: "PDP Academy",
            description: "Python Backend",
          },
        ],
      },
      university: {
        title: "fields stuied (at the University)",
        date: "2021-2023",
        wrapper: [
          "Introduction to Information Technology",
          "Introduction to Social and Digital Media",
          "Introduction to Study Skills",
          "Psychology Applied to Work",
          "Communication",
          "Database Systems",
          "Application Programming with Java",
          "Project",
          "Project Management",
          "Information Systems Analysis and Design",
          "Web Programming and Applications",
          "Cloud Computing Concepts",
        ],
      },
      programmingSkills: {
        title: "skills programming",
        wrapper: ["Python", "MySQL", "C++"],
      },
      additionalSkills: {
        title: "skills additional",
        date: "2022-2023",
        wrapper: [
          "Django",
          "DRF",
          "Docker",
          "Celery",
          "Redis",
          "Postman",
          "Git(Github)",
          "Linux(Ubuntu)",
          "PostgreSQL",
          "MySQL",
          "SQLite",
          "SQLAlchemy",
          "Jinja2",
          "Aiogram",
          "Elasticsearch",
          "Windows",
          "JWT",
          "Docker compus",
          "Apache",
          "Ngnix",
          "Gunicorn",
          "DigitalOcean",
          "Swagger",
          "Girlab CI/CD",
          "Cron",
          "RestAPI",
          "Asyncio",
          "Sentry",
          "Test(Py Test)",
        ],
      },
      language: {
        title: "language",
        wrapper: [
          "Uzbek: native",
          "English: fluent",
          "Turkish: intermediate",
          "Russian: beginner",
        ],
      },
      certification: {
        title: "certifications",
        wrapper: [
          "Completion of Foundation Studies Awarded by TMC",
          "Completion of Foundation Studies Awarded by PDP",
          "IELTS certificate B2",
        ],
      },
    },
    contact: {
      text: "Do you have questions or do you want to talk with me?",
      title: "Send message!",
      form: {
        btn: "Send",
        fullName: "full name*",
        email: "email*",
        phoneNumber: "phone number*",
        message: "message*",
        validations: {
          fullNameRequired: "Full Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email",
          phoneNumberRequired: "Phone Number is required",
          messageRequired: "Message is required",
        },
      },
    },
  },
  components: {
    navbar: {
      sidebar: {
        navList: [
          {
            text: "home",
            link: "/",
          },
          {
            text: "resume",
            link: "/resume",
          },
          {
            text: "contact",
            link: "/contact",
          },
          {
            text: "projects",
            link: "/projects",
          },
        ],
      },
    },
    footer: {
      pageList: [
        {
          text: "home",
          link: "/",
        },
        {
          text: "resume",
          link: "/resume",
        },
        {
          text: "contact",
          link: "/contact",
        },
        {
          text: "projects",
          link: "/projects",
        },
      ],
      contactList: [
        {
          link: "tel:+998990079957",
          text: "+998990079957",
          icon: content.footer.contactList.icon1,
        },
        {
          link: "https://www.github.com/ikramovna",
          text: "www.github.com/ikramovna",
          icon: content.footer.contactList.icon2,
        },
        {
          link: "mailto:muslimazokirjonova2004@gmail.com",
          text: "muslimazokirjonova2004@gmail.com",
          icon: content.footer.contactList.icon3,
        },
        {
          text: "Uzbekistan, Tashkent",
          icon: content.footer.contactList.icon4,
        },
      ],
      bottomSide: {
        text: "Developed by Musa Code and",
        btn: {
          link: "https://www.takhirjanovich.xyz",
          text: "Takhirjanovich",
        },
      },
    },
  },
};

export default en;
