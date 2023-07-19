import content from "./content";

const uz = {
  pages: {
    home: {
      header: {
        name: "Muslima Zokirjonova",
        title: "Python Injener",
        description: [
          "Men TelegramBots va veb-saytlarni Python dasturlash tilida va PostgreSQL, ma'lumotlar bazasida qurmoqdaman. Shundan so'ng men Django va DRF Python freamwork va Algoritmlarni o'rgandim. Hozirda yangi texnologiyalarni o‘rganyapman",
        ],
        btn: {
          text: "My CV/Resume",
          link: "/resume",
        },
      },
      projects: {
        title: "Mening proyektlarim",
        btn: {
          link: "/projects",
          text: "barcha proyektlar",
        },
      },
    },
    notFound: {
      title: "404",
      text: "Sahifa topilmadi",
      btn: {
        text: "Bosh sahifa",
        link: "/",
      },
      backBtn: {
        text: "oxirgi sahifa",
      },
    },
    resume: {
      mainTitle: "Zokirjonova Muslima",
      mainDescription: "backend dasturchi",
      aboutMe: {
        title: "men haqimda",
        wrapper: [
          "Men Python dasturlash tili va unga tegishli ramkalardan foydalangan holda Telegram botlari va veb-saytlarini yaratishda bir yildan ortiq maxsus tajribaga ega bo'lgan tajribali dasturchiman. Sayohatim davomida men samarali va interaktiv yechimlarni yaratish uchun Python-ning ko'p qirraliligi va keng kutubxonalaridan foydalanish bo'yicha malakaga ega bo'ldim.",
          "Men eng so'nggi sanoat tendentsiyalari va texnologiyalaridan xabardor bo'lishni xohlayman. Uzluksiz o'rganishga intilish menga mijozlar va foydalanuvchilarning o'zgaruvchan ehtiyojlarini qondirish uchun innovatsion va ilg'or yechimlarni taqdim etishimni ta'minlab, yangi texnika va vositalarni o'zlashtirishga imkon beradi.",
        ],
      },
      workExperience: {
        title: "Ish tajribasi",
        wrapper: [
          {
            date: "2022-2023",
            name: `"Elga Manzur" mebel do'koni`,
            description: [
              "Veb dasturchi yordamchisi sifatidagi amaliyotchi",
              "Maqsad - ma'lumotlar bazasida bajariladigan so'rovlar sonini kamaytirish va tizimda avtomatlashtirishni amalga oshirish.",
              "Men umumiy samaradorlikni oshirish maqsadida tashkilot ichidagi operatsion jarayonlarni tartibga solishga qaratilgan veb-saytni ishlab chiqishda faol ishtirok etdim.",
              "Jismoniy shaxslar bilan hamkorlik qilish jarayoni insonning muloqot qobiliyatini oshirishi aniqlandi.",
              "Men Trello platformasidan foydalangan holda loyihalarni boshqarish faoliyati bilan shug'ullanganman.",
            ]
          },
        ],
      },
      education: {
        title: "ta'lim",
        wrapper: [
          {
            date: "2021-hozirgacha",
            name: "Toshkentdagi Texnologiya Boshqaruv va Kommunikatsiya Instituti",
            description: "IT - axborot texnologiyalari",
          },
          {
            date: "2022-2023",
            name: "PDP Akademiya",
            description: "Python Backend",
          },
        ],
      },
      university: {
        title: "o'qish davrida o'qilgan fanlar (universitetda)",
        date: "2021-2023",
        wrapper: [
          "Axborot Texnologiyalari asoslari",
          "Ijtimoiy va raqamli media asoslari",
          "O'rganish qobiliyatlari bilan tanishish",
          "Ish bilan bog'liq psixologiya",
          "Kommunikatsiya",
          "Ma'lumotlar bazasi",
          "Java dasturlash tili",
          "Loyiha (Project)",
          "Loyiha boshqaruvi (Project Management)",
          "Axborot tizimlarini tahlil va loyihalash",
          "Veb-dasturlash va dasturiy ta'minotlar",
          "Bulutli hisoblash kontseptlari",
        ],
      },
      programmingSkills: {
        title: "dasturlash ko'nikmalari",
        wrapper: ["Python", "MySQL", "C++"],
      },
      additionalSkills: {
        title: "qo'shimcha ko'nikmalar",
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
        title: "til",
        wrapper: [
          "O'zbekcha: ona tili",
          "Inglizcha: ravon",
          "Turkcha: o'rta darajada",
          "Ruscha: boshlang'ich",
        ],
      },
      certification: {
        title: "sertifikatlar",
        wrapper: [
          "TMC tomonidan Foundation Studies yakunlanish sertifikati",
          "PDP tomonidan Foundation Studies yakunlanish sertifikati",
          "IELTS sertifikati B2 darajasi",
        ],
      },
    },
    contact: {
      text: "Savollaringiz bormi yoki men bilan gaplashmoqchimisiz?",
      title: "Xabar yuboring!",
      form: {
        btn: "Yuborish",
        fullName: "to'liq ism*",
        email: "elektron pochta*",
        phoneNumber: "telefon raqami*",
        message: "xabar*",
        validations: {
          fullNameRequired: "To'liq ismni kiritish kerak",
          emailRequired: "Elektron pochtani kiritish kerak",
          emailInvalid: "Noto'g'ri elektron pochta",
          phoneNumberRequired: "Telefon raqamini kiritish kerak",
          messageRequired: "Xabarni kiritish kerak"
        },
      },
    },
  },
  components: {
    navbar: {
      sidebar: {
        navList: [
          {
            text: "bosh sahifa",
            link: "/",
          },
          {
            text: "rezyume",
            link: "/resume",
          },
          {
            text: "kontakt",
            link: "/contact",
          },
          {
            text: "proyektlar",
            link: "/projects",
          },
        ],
      },
    },
    footer: {
      pageList: [
        {
          text: "bosh sahifa",
          link: "/",
        },
        {
          text: "rezyume",
          link: "/resume",
        },
        {
          text: "kontakt",
          link: "/contact",
        },
        {
          text: "proyektlar",
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
          text: "O'zbekiston, Toshkent",
          icon: content.footer.contactList.icon4,
        },
      ],
      bottomSide: {
        text: "va Musa Code tomonidan ishlab  chiqilgan",
        btn: {
          link: "https://www.takhirjanovich.xyz",
          text: "Takhirjanovich",
        },
      },
    },
  },
};

export default uz;
