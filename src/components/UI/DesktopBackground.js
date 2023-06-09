import React from "react";
import styles from "./DesktopBackground.module.css";
import desktop from "../images/bg-main-desktop.png";
import mobile from "../images/bg-main-mobile.png";

const Desktop = () => {
  return (
    <React.Fragment>
      <div>
        <img className={styles.background} src={desktop} alt="desktop" />
        <img className={styles.mobile} src={mobile} alt="mobile" />
      </div>
    </React.Fragment>
  );
};

export default Desktop;
