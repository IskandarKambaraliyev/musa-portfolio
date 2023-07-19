import React, { useRef, useState } from "react";

// Importing styles
import styles from "./rippleButton.module.scss";
import { Link } from "react-router-dom";

const RippleButton = (props) => {
  const buttonRef = useRef(null);
  const [addClass, setAddClass] = useState(false);

  const mousePositionToCustomProp = (event, element) => {
    let posX = event.nativeEvent.offsetX;
    let posY = event.nativeEvent.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
  };

  const handleClick = (e) => {
    const button = buttonRef.current;
    mousePositionToCustomProp(e, button);
    setAddClass(true);
    button.addEventListener(
      "animationend",
      () => {
        setAddClass(false);
      },
      { once: true }
    );
  };
  return props.button ? (
    <button
      className={`${props.className ? props.className : ""} ${
        styles.ripple_button
      } ${addClass ? styles.pulse : ""} ${props.center ? styles.center : ""}`}
      ref={buttonRef}
      onClick={(e) => {
        handleClick(e);
        if (props.onClick) {
          props.onClick(e);
        }
      }}
      style={props.style}
      type={props.type ? props.type : "button"}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  ) : (
    <Link
      className={`${props.className} ${styles.ripple_button} ${
        addClass ? styles.pulse : ""
      } ${props.center ? styles.center : ""}`}
      ref={buttonRef}
      onClick={handleClick}
      to={props.href ? props.href : "/"}
      preventScrollReset={props.preventScrollReset}
      style={props.style}
    >
      {props.children}
    </Link>
  );
};

export default RippleButton;
