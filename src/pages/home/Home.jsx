import React, { useContext } from "react";

// Importing styles
import styles from "./home.module.scss";
import { LanguageContext } from "../../context/LanguageProvider";
import content from "../../locales/content";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import RippleButton from "../../components/rippleButton/RippleButton";

const Home = () => {
  const { dictionary } = useContext(LanguageContext);
  const contentData = dictionary.pages.home;
  return (
    <div className={`${styles.home}`}>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header_banner} data-aos="fade-right">
            <img
              src={content.home.header.banner}
              alt="header-banner"
              className={styles.img}
            />
          </div>
          <div className={styles.header_info} data-aos="fade-left">
            <h2 className={styles.name_title}>{contentData.header.name}</h2>
            <h1 className={styles.main_title}>{contentData.header.title}</h1>
            <div className={styles.descriptions}>
              {contentData.header.description.map((item, index) => (
                <p className={styles.description} key={index}>
                  {item}
                </p>
              ))}
            </div>

            <RippleButton href={contentData.header.btn.link} className={styles.btn} preventScrollReset>
              {contentData.header.btn.text}
            </RippleButton>
          </div>
        </div>
      </header>
      <section className={styles.projects}>
        <div className={`container ${styles.container}`} data-aos="fade-down">
          <h2 className={styles.section_title}>{contentData.projects.title}</h2>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 200: 1, 550: 2, 768: 3 }}
            className={styles.project_wrapper}
          >
            <Masonry gutter="1rem">
              <Link
                to="/projects/project 1"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=806&q=80"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 1</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
              <Link
                to="/projects/project 2"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 2</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
              <Link
                to="/projects/project 3"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 3</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
              <Link
                to="/projects/project 4"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 4</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
              <Link
                to="/projects/project 5"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 5</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
              <Link
                to="/projects/project 6"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 6</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
              <Link
                to="/projects/project 7"
                className={styles.project}
                preventScrollReset={true}
              >
                <div className={styles.img_wrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                    alt="project"
                    className={styles.img}
                  />
                </div>

                <div className={styles.detail_wrapper}>
                  <h4 className={styles.detail_title}>Title 7</h4>
                  <p className={styles.detail_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, architecto nesciunt distinctio voluptatum natus
                    corporis non. Possimus ipsum nobis accusantium!
                  </p>
                </div>
              </Link>
            </Masonry>
          </ResponsiveMasonry>
          <RippleButton
            center
            href={contentData.projects.btn.link}
            preventScrollReset
          >
            {contentData.projects.btn.text}
          </RippleButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
