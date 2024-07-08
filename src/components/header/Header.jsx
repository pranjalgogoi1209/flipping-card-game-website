import React from "react";
import styles from "./header.module.css";
import headerFrame from '../../assets/header/Group 1000007022.png';
import logoImage from '../../assets/header/Colorbar-Logo-Black 1 (3).png';

export default function Header() {
  return (
    <div className={`flex-col-center ${styles.Header}`}>
      <div className={`flex-col-center ${styles.header_images}`}>
        <img src={headerFrame} alt="" className={styles.headerFrame} />
        <img src={logoImage} alt="" className={styles.logoImage} />
      </div>
    </div>
  );
}
