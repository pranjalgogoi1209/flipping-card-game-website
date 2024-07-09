import React from "react";
import styles from "./bgIcons.module.css";
import headerLeftImg from "./../../assets/header/headerLeftImg.png";
import headerRightImg from "./../../assets/header/headerRightImg.png";
import logo from "./../../assets/header/logo.png";

export default function BgIcons() {
  return (
    <div className={`flex-col-center ${styles.BgIcons}`}>
      <div className={`flex-row-center ${styles.topContainer}`}>
        {/* top-left-img */}
        <div
          className={`flex-row-center ${styles.imgContainer} ${styles.topLeftImg}`}
        >
          <img src={headerLeftImg} alt="header-left-img" />
        </div>

        {/* top-right-img */}
        <div
          className={`flex-row-center ${styles.imgContainer} ${styles.topRightImg}`}
        >
          <img src={headerRightImg} alt="header-left-img" />
        </div>
      </div>

      <div className={`flex-row-center ${styles.bottomContainer}`}>
        {/* bottom-left-img */}
        <div
          className={`flex-row-center ${styles.imgContainer} ${styles.bottomLeftImg}`}
        >
          <img src={headerLeftImg} alt="footer-left-img" />
        </div>

        {/* bottom-left-right-img */}
        <div
          className={`flex-row-center ${styles.imgContainer} ${styles.bottomRightImg}`}
        >
          <img src={headerLeftImg} alt="footer-right-img" />
        </div>
      </div>
    </div>
  );
}
