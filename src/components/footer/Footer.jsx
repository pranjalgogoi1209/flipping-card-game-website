import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import footerLeftImg from "./../../assets/footer/footerLeftImg.png";
import footerRightImg from "./../../assets/footer/footerRightImg.png";

export default function Footer() {
  const location = useLocation();

  return (
    <div className={`flex-col-center ${styles.Footer}`}>
      {location.pathname !== "/reward" && (
        <Link to="#" className={`txt2 ${styles.website}`}>
          Back to Website
        </Link>
      )}

      <div className={`flex-row-center ${styles.imgs}`}>
        <div className={`flex-row-center ${styles.footerLeftImg}`}>
          <img src={footerLeftImg} alt="footer-image" />
        </div>

        <div className={`flex-row-center ${styles.footerRightImg}`}>
          <img src={footerRightImg} alt="footer-image" />
        </div>
      </div>
    </div>
  );
}
