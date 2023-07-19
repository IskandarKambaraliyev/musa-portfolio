import React, { useContext, useEffect, useRef, useState } from "react";

import { Link, NavLink } from "react-router-dom";

// Importing styles
import styles from "./navbar.module.scss";

// Importing components
import LanguageSelector from "../languageSelector/LanguageSelector";

// Importing contents
import content from "../../locales/content";

import { LanguageContext } from "../../context/LanguageProvider";
import { useDeviceInfo } from "../../context/DeviceInfo";
import RippleButton from "../rippleButton/RippleButton";
import Hammer from "hammerjs";

const Navbar = ({ handleFullscreen, isFullScreen, sidebarIsOpen, setSidebarIsOpen }) => {
  const { dictionary } = useContext(LanguageContext);
  const { device } = useDeviceInfo();


  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const sidebarRef = useRef(null);
  const navListRef = useRef(null);

  useEffect(() => {
    if (sidebarIsOpen && navRef) {
      document.body.style.transition = "transform .3s ease";
      document.body.style.transform = "translateX(-300px)";
      document.body.style.overflow = "hidden";
      navRef.current.style.transition = "transform .3s ease";
      navRef.current.style.transform = "translateX(300px)";
    } else {
      document.body.style.transform = "translateX(0)";
      document.body.style.overflow = "auto";
      navRef.current.style.transform = "translateX(0)";
    }
  }, [sidebarIsOpen]);

  useEffect(() => {
    setSidebarIsOpen(false);
  }, [isFullScreen]);

  useEffect(() => {
    let sidebarClose = (e) => {
      if (
        !toggleRef.current.contains(e.target) &&
        !sidebarRef.current.contains(e.target) |
          navListRef.current.contains(e.target)
      ) {
        setSidebarIsOpen(false);
      }
    };

    document.addEventListener("click", sidebarClose);
    return () => {
      document.removeEventListener("click", sidebarClose);
    };
  });

  useEffect(() => {
    if (sidebarIsOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSidebarIsOpen(false);
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [sidebarIsOpen]);

  useEffect(() => {
    const handlePopState = () => {
      setSidebarIsOpen(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sidebarElement = sidebarRef.current;

    if (sidebarIsOpen) {
      const hammer = new Hammer(sidebarElement);
      hammer.on("swiperight", () => {
        setSidebarIsOpen(false);
      });

      return () => {
        hammer.off("swiperight");
      };
    }
  }, [sidebarIsOpen]);

  return (
    <nav
      className={`${styles.navbar} ${isSticky ? styles.active : ""}`}
      ref={navRef}
    >
      <div className={`container ${styles.container}`}>
        <Link to={content.mainLogo.link} className={styles.logo}>
          <div className={`${styles.logo_icon}`}>{content.mainLogo.logo}</div>
          <span className={styles.logo_text}>{content.mainLogo.text}</span>
        </Link>

        <button
          className={`${styles.nav_toggle} ${
            sidebarIsOpen ? styles.active : ""
          }`}
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          ref={toggleRef}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${styles.sidebar} ${sidebarIsOpen ? styles.active : ""} ${
          device === "Android" && !isFullScreen ? styles.android : ""
        }`}
        ref={sidebarRef}
      >
        <ul className={styles.nav_list} ref={navListRef}>
          {dictionary.components.navbar.sidebar.navList.map((item, index) => (
            <li className={styles.nav_item} key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : styles.nav_link
                }
                to={item.link}
              >
                <span className={styles.nav_link_text}>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          {device !== "Android" && (
            <RippleButton
              center
              button
              onClick={handleFullscreen}
              style={{ marginBottom: "1rem" }}
            >
              {isFullScreen ? "Exit Fullscreen" : "Fullscreen mode"}
            </RippleButton>
          )}

          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
