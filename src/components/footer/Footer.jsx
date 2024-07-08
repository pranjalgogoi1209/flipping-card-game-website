import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import footerImg from "./../../assets/footer/footerImg.png";

export default function Footer() {
  const location = useLocation();
  console.log();
  return (
    <div className={`flex-col-center ${styles.Footer}`}>
      {location.pathname !== "/reward" && (
        <Link to="#" className={`txt2`}>
          Back to Website
        </Link>
      )}

      <div className={`flex-row-center ${styles.imgContainer}`}>
        <img src={footerImg} alt="footer-image" />
      </div>
    </div>
  );
}
