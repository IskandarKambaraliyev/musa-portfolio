import { Navigate, Route, Routes } from "react-router-dom";

// Importing styles
import "./styles/global.scss";

// Importing libraries
import Aos from "aos";
import "aos/dist/aos.css";

// Importing Pages
import Home from "./pages/home/Home";
import Layout from "./Layout";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";
import NotFound from "./pages/not-found/NotFound";
import Project from "./pages/projects/[project]/Project";
import { useEffect } from "react";
import Contact from "./pages/contact/Contact";

function App() {
  // Aos.init({
  //   duration: 1500,
  //   offset: 400,
  //   once: true,
  // })
  useEffect(() => {
    let offset = 300;

    const deviceHeight = window.innerHeight;
    if (deviceHeight < 450) {
      offset = 150;
    } else if (deviceHeight < 400) {
      offset = 100;
    } else if (deviceHeight < 350) {
      offset = 0;
    }

    Aos.init({ offset, duration: 1500, once: true });

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />} index />
        <Route element={<Resume />} path="/resume" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Project />} path="/projects/:project" />
        <Route element={<Contact />} path="/contact" />
      </Route>

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default App;
