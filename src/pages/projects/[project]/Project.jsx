import React from "react";

// Importing styles
import styles from "./project.module.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const { project } = useParams();
  return (
    <>
    <Helmet>
        <title>{`${project} project - Musa Portfolio`}</title>
    </Helmet>
      <div className={`${styles.project}`}>
        Project title - {project}
      </div>
    </>
  );
};

export default Project;
