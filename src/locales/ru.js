import content from "./content";

const ru = {
  pages: {
    home: {
      header: {
        name: "Муслима Закиржанова",
        title: "Инженер Python",
        description: [
          "Я создаю TelegramBots и веб-сайты на языке программирования Python и PostgreSQL, базе данных. После этого я изучил фреймворк и алгоритмы Django и DRF Python. Я сейчас изучаю новые технологии",
        ],
        btn: {
          text: "Моё резюме",
          link: "/resume",
        },
      },
      projects: {
        title: "Мои проекты",
        btn: {
          link: "/projects",
          text: "все проекты",
        },
      },
    },
    notFound: {
      title: "404",
      text: "Страница не найдена",
      btn: {
        text: "Главная страница",
        link: "/",
      },
      backBtn: {
        text: "последнюю страницу",
      },
    },
    resume: {
      mainTitle: "Закиржанова Муслима",
      mainDescription: "backend разработчик",
      aboutMe: {
        title: "обо мне",
        wrapper: [
          "Я опытный разработчик с более чем годовым опытом создания ботов и веб-сайтов Telegram с использованием языка программирования Python и связанных с ним фреймворков. На протяжении всего своего пути я научился использовать универсальность и обширные библиотеки Python для создания эффективных и интерактивных решений.",
          "Мне интересно быть в курсе последних отраслевых тенденций и технологий. Это стремление к непрерывному обучению позволяет мне внедрять новые методы и инструменты, гарантируя, что я могу предлагать инновационные и передовые решения для удовлетворения растущих потребностей клиентов и пользователей.",
        ],
      },
      workExperience: {
        title: "Опыт работы",
        wrapper: [
          {
            date: "2022-2023",
            name: '"Elga Manzur" мебельный магазин',
            description: [
              "Стажер в качестве помощника веб-разработчика",
              "Цель состоит в том, чтобы уменьшить количество запросов, выполняемых к базе данных, и внедрить автоматизацию в системе.",
              "Я принимал активное участие в разработке веб-сайта, направленного на оптимизацию операционных процессов внутри организации с целью повышения общей производительности.",
              "Было обнаружено, что процесс сотрудничества с отдельными людьми улучшает коммуникативные навыки.",
              "Я занимался управлением проектами с использованием платформы Trello.",
            ],
          },
        ],
      },
      education: {
        title: "образование",
        wrapper: [
          {
            date: "2021- настоящее время",
            name: "Институт Технологического Менеджмента и Коммуникации в Ташкенте",
            description: "IT Информационные технологии",
          },
          {
            date: "2022-2023",
            name: "PDP Academy",
            description: "Python Backend",
          },
        ],
      },
      university: {
        title: "изученные предметы (в университете)",
        date: "2021-2023",
        wrapper: [
          "Введение в информационные технологии",
          "Введение в социальные и цифровые медиа",
          "Введение в навыки обучения",
          "Психология в работе",
          "Коммуникация",
          "Базы данных",
          "Программирование приложений на Java",
          "Проект",
          "Управление проектами",
          "Анализ и проектирование информационных систем",
          "Веб-программирование и приложения",
          "Концепции облачных вычислений",
        ],
      },
      programmingSkills: {
        title: "навыки программирования",
        wrapper: ["Python", "MySQL", "C++"],
      },
      additionalSkills: {
        title: "дополнительные навыки",
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
        title: "языки",
        wrapper: [
          "Узбекский: родной",
          "Английский: свободно",
          "Турецкий: средний",
          "Русский: начинающий",
        ],
      },
      certification: {
        title: "сертификаты",
        wrapper: [
          "Сертификат Завершения Foundation Studies от TMC",
          "Сертификат Завершения Foundation Studies от PDP",
          "Сертификат IELTS уровня B2",
        ],
      },
    },
    contact: {
      text: "У вас есть вопросы или вы хотите поговорить со мной?",
      title: "отправьте сообщение!",
      form: {
        btn: "Отправить",
        fullName: "полное имя*",
        email: "электронная почта*",
        phoneNumber: "номер телефона*",
        message: "сообщение*",
        validations: {
          fullNameRequired: "Требуется полное имя",
          emailRequired: "Требуется электронная почта",
          emailInvalid: "Неверный адрес электронной почты",
          phoneNumberRequired: "Требуется номер телефона",
          messageRequired: "Требуется сообщение",
        },
      },
    },
  },
  components: {
    navbar: {
      sidebar: {
        navList: [
          {
            text: "Главная",
            link: "/",
          },
          {
            text: "резюме",
            link: "/resume",
          },
          {
            text: "контакт",
            link: "/contact",
          },
          {
            text: "проекты",
            link: "/projects",
          },
        ],
      },
    },
    footer: {
      pageList: [
        {
          text: "Главная",
          link: "/",
        },
        {
          text: "резюме",
          link: "/resume",
        },
        {
          text: "контакт",
          link: "/contact",
        },
        {
          text: "проекты",
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
          text: "Узбекистан, Ташкент",
          icon: content.footer.contactList.icon4,
        },
      ],
      bottomSide: {
        text: "Разработано Musa Code и",
        btn: {
          link: "https://www.takhirjanovich.xyz",
          text: "Takhirjanovich",
        },
      },
    },
  },
};

export default ru;
