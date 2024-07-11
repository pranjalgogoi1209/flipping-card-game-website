import React from "react";
import styles from "./header.module.css";
import headerLeftImg from "./../../../assets/header/headerLeftImg.png";
import headerRightImg from "./../../../assets/header/headerRightImg.png";
import logo from "./../../../assets/header/logo.png";

export default function Header() {
  return (
    <div className={`flex-col-center ${styles.Header}`}>
      <div className={`flex-row-center ${styles.headerImgs}`}>
        <div className={styles.headerLeftImg}>
          <img src={headerLeftImg} alt="header-left-img" />
        </div>
        <div className={styles.headerRightImg}>
          <img src={headerRightImg} alt="header-right-img" />
        </div>
      </div>
      <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" className={styles.logoImage} />
      </div>
    </div>
  );
}
