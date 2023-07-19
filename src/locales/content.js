import homeHeaderBanner from "../assets/images/home-page/header-banner.svg";
import contactFormImg from "../assets/images/contact-page/contact-img.svg";

import { BsTelephone as FooterContactListIcon1 } from "react-icons/bs";
import { FiGithub as FooterContactListIcon2 } from "react-icons/fi";
import { HiOutlineMail as FooterContactListIcon3 } from "react-icons/hi";
import { GrLocation as FooterContactListIcon4 } from "react-icons/gr";

import { AiOutlineGlobal as SocialsMainBtn } from "react-icons/ai";
import { BsTelegram as SocialsIcon1 } from "react-icons/bs";
import { BsInstagram as SocialsIcon2 } from "react-icons/bs";
import { BsTelephone as SocialsIcon3 } from "react-icons/bs";
import { FiGithub as SocialsIcon4 } from "react-icons/fi";
import { HiOutlineMail as SocialsIcon5 } from "react-icons/hi";
import { BsLinkedin as SocialsIcon6 } from "react-icons/bs";

const content = {
  mainLogo: {
    text: "Musa Code",
    logo: (
      <svg
        width="51"
        height="55"
        viewBox="0 0 51 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.6238 10.5052L29.4558 1.1809C26.7256 -0.393688 23.3331 -0.39358 20.6028 1.1809L4.43491 10.5052C1.69931 12.0827 0 15.0247 0 18.1829V36.817C0 39.9752 1.69931 42.9172 4.4348 44.4947L20.6028 53.819C23.3335 55.3939 26.7259 55.3934 29.4558 53.819L45.6237 44.4947C48.3593 42.9172 50.0586 39.9752 50.0586 36.817V18.1829C50.0586 15.0248 48.3593 12.0828 45.6238 10.5052ZM45.7617 36.817C45.7617 38.4438 44.8864 39.9592 43.4773 40.7718L27.3093 50.0961C25.9029 50.9073 24.1556 50.9073 22.7492 50.0961L6.5812 40.7718C5.17215 39.9591 4.29688 38.4438 4.29688 36.817V18.1829C4.29688 16.5562 5.17215 15.0408 6.58131 14.2283L22.7492 4.90393C24.1557 4.09268 25.9035 4.093 27.3094 4.90393L43.4774 14.2281C44.8864 15.0408 45.7617 16.5561 45.7617 18.1829V36.817Z"
          fill="#445964"
        />
        <path
          d="M22.9876 25.8596L15.0082 19.1067C14.1026 18.3401 12.7468 18.453 11.9803 19.359C11.2139 20.265 11.3269 21.6208 12.2327 22.3874L18.2739 27.5L12.2327 32.6125C11.3269 33.3791 11.214 34.7349 11.9803 35.6409C12.7486 36.5488 14.1047 36.6578 15.0082 35.8931L22.9876 29.1402C24.0028 28.2812 23.9999 26.7163 22.9876 25.8596Z"
          fill="#445964"
        />
        <path
          d="M36.4382 32.104H26.7707C25.5841 32.104 24.6223 33.066 24.6223 34.2528C24.6223 35.4396 25.5841 36.4015 26.7707 36.4015H36.4382C37.6246 36.4015 38.5866 35.4396 38.5866 34.2528C38.5866 33.066 37.6247 32.104 36.4382 32.104Z"
          fill="#445964"
        />
      </svg>
    ),
    link: "/",
  },
  home: {
    header: {
      banner: homeHeaderBanner,
    },
  },
  contact: {
    form: {
      img: contactFormImg,
    },
  },

  footer: {
    contactList: {
      icon1: <FooterContactListIcon1 />,
      icon2: <FooterContactListIcon2 />,
      icon3: <FooterContactListIcon3 />,
      icon4: <FooterContactListIcon4 />,
    }
  },
  socials: {
    mainBtn: {
      icon: <SocialsMainBtn />,
    },
    links: [
      {
        link: "",
        icon: <SocialsIcon1 />,
        name: "Telegram account",
      },
      {
        link: "",
        icon: <SocialsIcon2 />,
        name: "Instagram profile",
      },
      {
        link: "",
        icon: <SocialsIcon3 />,
        name: "Phone number",
      },
      {
        link: "",
        icon: <SocialsIcon4 />,
        name: "Github profile",
      },
      {
        link: "",
        icon: <SocialsIcon5 />,
        name: "Email address",
      },
      {
        link: "",
        icon: <SocialsIcon6 />,
        name: "Linkedin profile",
      },
    ]
  }
};

export default content;
