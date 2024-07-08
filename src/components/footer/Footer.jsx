import React from "react";
import styles from "./footer.module.css";
import footerFrame from '/images/footer_frame.png'

export default function Footer() {
  return <div className={`flex-col-center ${styles.Footer}`}>
    <a href="">back to website</a>
    <img src={footerFrame} alt="" />
  </div>;
}
