import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import Hammer from "hammerjs";
import Socials from "./components/socials/Socials";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const requestFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // Internet Explorer/Edge
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // Internet Explorer/Edge
      document.msExitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
      setIsFullScreen(false);
    } else {
      requestFullscreen();
      setIsFullScreen(true);
    }
  };

  const router = useLocation();
  const pathname = router.pathname.split("/");

  useEffect(() => {
    setLoading(false);
  }, []);

  const layoutRef = useRef(null);

  useEffect(() => {
    const layoutElement = layoutRef.current;

    if (!sidebarIsOpen) {
      const hammer = new Hammer(layoutElement);
      hammer.on("swipeleft", () => {
        setSidebarIsOpen(true);
      });

      return () => {
        hammer.off("swipeleft");
      };
    }
  }, [sidebarIsOpen]);

  useEffect(() => {
    const layoutElement = layoutRef.current;

    if (sidebarIsOpen) {
      const hammer = new Hammer(layoutElement);
      hammer.on("swiperight", () => {
        setSidebarIsOpen(false);
      });

      return () => {
        hammer.off("swiperight");
      };
    }
  }, [sidebarIsOpen]);
  return (
    <div ref={layoutRef}>
      {loading ? (
        "loading..."
      ) : (
        <>
          <Helmet>
            <title>{`${
              pathname[1] === "" ? "Home" : pathname[1].toUpperCase()
            } Page - Musa Portfolio`}</title>
          </Helmet>
          <div className={`main-layout`}>
            <Navbar
              handleFullscreen={handleFullscreen}
              isFullScreen={isFullScreen}
              sidebarIsOpen={sidebarIsOpen}
              setSidebarIsOpen={setSidebarIsOpen}
            />
            <Socials />
            <div className="main">
              <Outlet />
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
