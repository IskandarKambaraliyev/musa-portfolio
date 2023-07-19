import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importing styles
import styles from "./notFound.module.scss";

// Importing Context
import { LanguageContext } from "../../context/LanguageProvider";

// Importing libraries
import Aos from "aos";
import RippleButton from "../../components/rippleButton/RippleButton";

const NotFound = () => {
  const [isLastHistory, setIsLastHistory] = useState(false);
  Aos.init({
    duration: 500,
    delay: 300,
  });

  const { dictionary } = useContext(LanguageContext);
  const contentData = dictionary.pages.notFound;

  useEffect(() => {
    document.body.style.transform = "translate(0)";
    document.body.style.transition = "unset";
    document.body.style.overflow = "auto";

  }, []);

  useEffect(() => {
    if (window.history.state.idx === 0) {
      setIsLastHistory(true);
    }
  }, [])

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className={`${styles.notFound}`}>
      <h1
        className={styles.notFound_title}
        data-aos="zoom-in"
        title={contentData.title}
      >
        {contentData.title}
      </h1>
      <p className={styles.notFound_text}>{contentData.text}</p>
      {!isLastHistory ? (
        <RippleButton button onClick={handleBack} style={{ marginTop: "1rem" }}>
          {contentData.backBtn.text}
        </RippleButton>
      ) : (
        <Link to={contentData.btn.link} className={styles.notFound_link}>
          {contentData.btn.text}
        </Link>
      )}
    </div>
  );
};

export default NotFound;
