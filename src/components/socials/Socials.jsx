import React from "react";

// Importting styles
import styles from "./socials.module.scss";
import content from "../../locales/content";

const Socials = () => {
  return (
    <div className={`${styles.socials}`}>
      <div className={styles.main_btn}>
        <div className={styles.icon}>{content.socials.mainBtn.icon}</div>
      </div>
      <div className={styles.links_wrapper}>
        {content.socials.links.map((item, index) => (
          <div className={styles.social_link} key={index}>
            <div className={styles.icon}>{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
