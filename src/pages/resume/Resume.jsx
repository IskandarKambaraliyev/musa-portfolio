import React, { useContext } from "react";

// Importing styles
import styles from "./resume.module.scss";
import { LanguageContext } from "../../context/LanguageProvider";

// Importing libraries
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const About = () => {
  const { dictionary } = useContext(LanguageContext);
  const contentData = dictionary.pages.resume;

  return (
    <div className={`${styles.resume}`}>
      <div className={styles.main_info}>
        <h1 className={styles.title}>{contentData.mainTitle}</h1>
        <p className={styles.description}>{contentData.mainDescription}</p>
      </div>

      <div className={`container ${styles.container}`}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            250: 1,
            768: 2,
          }}
          className={styles.info_wrapper}
        >
          <Masonry gutter="1rem">
            <div className={styles.info} data-aos="fade-down-right">
              <h3 className={styles.info_title}>{contentData.aboutMe.title}</h3>
              <ul className={`${styles.wrapper}`}>
                {contentData.aboutMe.wrapper.map((item, index) => (
                  <li className={styles.name} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.info} data-aos="fade-down-left">
              <h3 className={styles.info_title}>
                {contentData.workExperience.title}
              </h3>
              {contentData.workExperience.wrapper.map((item, index) => (
                <div className={styles.wrapper} key={index}>
                  <h4 className={styles.date}>{item.date}</h4>
                  <h5 className={styles.name}>{item.name}</h5>
                  <ul className={styles.wrapper}>
                    {item.description.map((item, index) => (
                      <li className={styles.name} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.info} data-aos="fade-right">
              <h3 className={styles.info_title}>
                {contentData.education.title}
              </h3>
              {contentData.education.wrapper.map((item, index) => (
                <div className={styles.wrapper} key={index}>
                  <h4 className={styles.date}>{item.date}</h4>
                  <h5 className={styles.name}>{item.name}</h5>
                  <p className={styles.description}>{item.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.info} data-aos="fade-left">
              <h3 className={styles.info_title}>
                {contentData.university.title}
              </h3>
              <ul className={styles.wrapper}>
                {contentData.university.wrapper.map((item, index) => (
                  <li className={styles.name} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.info} data-aos="fade-right">
              <h3 className={styles.info_title}>
                {contentData.additionalSkills.title}
              </h3>
              <ul className={`${styles.wrapper} ${styles.grid}`}>
                {contentData.additionalSkills.wrapper.map((item, index) => (
                  <li className={styles.name} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.info} data-aos="fade-left">
              <h3 className={styles.info_title}>
                {contentData.programmingSkills.title}
              </h3>
              <ul className={`${styles.wrapper} ${styles.grid}`}>
                {contentData.programmingSkills.wrapper.map((item, index) => (
                  <li className={styles.name} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.info} data-aos="fade-right">
              <h3 className={styles.info_title}>
                {contentData.certification.title}
              </h3>
              {contentData.certification.wrapper.map((item, index) => (
                <ul className={styles.wrapper} key={index}>
                  <li className={styles.name}>{item}</li>
                </ul>
              ))}
            </div>
            <div className={styles.info} data-aos="fade-left">
              <h3 className={styles.info_title}>
                {contentData.language.title}
              </h3>
              {contentData.language.wrapper.map((item, index) => (
                <ul className={styles.wrapper} key={index}>
                  <li className={styles.name}>{item}</li>
                </ul>
              ))}
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default About;
