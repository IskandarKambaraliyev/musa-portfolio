import React, { useContext } from "react";

// Importing styles
import styles from "./footer.module.scss";

// Importing contents
import content from "../../locales/content";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageProvider";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  const contentData = dictionary.components.footer;

  const currLang = window.localStorage.getItem("rcml-lang");
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        <Link to={content.mainLogo.link} className={styles.logo}>
          <div className={styles.logo_icon}>{content.mainLogo.logo}</div>
          <span className={styles.logo_text}>{content.mainLogo.text}</span>
        </Link>

        <ul className={styles.footer_list}>
          {contentData.pageList.map((item, index) => (
            <li className={styles.footer_item} key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.footer_link} ${styles.active}`
                    : styles.footer_link
                }
                reloadDocument
              >
                <span className={styles.footer_link_text}>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={styles.footer_list}>
          {contentData.contactList.map((item, index) => (
            <li className={styles.footer_item} key={index}>
              <a
                href={item.link}
                className={`${styles.footer_link} ${styles.with_icon}`}
                target="_blank"
                rel="noreferrer"
                style={{ textTransform: "unset" }}
              >
                <div className={styles.footer_link_icon}>
                  {item.icon}
                </div>
                <span className={styles.footer_link_text}>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`container ${styles.bottom_side}`}>
        {currLang === "uz" ? (
          <span className={styles.text}>
            <a
              href={contentData.bottomSide.btn.link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {contentData.bottomSide.btn.text}
            </a>
            &nbsp;
            {contentData.bottomSide.text}
          </span>
        ) : (
          <span className={styles.text}>
            {contentData.bottomSide.text}
            &nbsp;
            <a
              href={contentData.bottomSide.btn.link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {contentData.bottomSide.btn.text}
            </a>
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
