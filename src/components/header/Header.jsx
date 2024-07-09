import React from "react";
import styles from "./header.module.css";
import headerImg from "./../../assets/header/headerImg.png";
import logo from "./../../assets/header/logo.png";

export default function Header() {
  return (
    <div className={`flex-col-center ${styles.Header}`}>
      <div className={styles.headerImg}>
        <img
          src={headerImg}
          alt="headerImg"
          className={`flex-row-center ${styles.headerImg}`}
        />
      </div>
      <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" className={styles.logoImage} />
      </div>
    </div>
  );
}
