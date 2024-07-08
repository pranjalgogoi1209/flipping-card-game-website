import React from "react";
import styles from "./homePage.module.css";
import productImage from "../../assets/home/makeup_kit-1 1.png";

export default function HomePage() {
  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      <div className={styles.title_heading_wrapper}>
        <h1>Flip, Match, and Win!</h1>
      </div>
      <div className={`flex-col-center ${styles.content_text}`}>
        <p className="txt2">
          Test your memory and have fun with our card-matching game. Every
          player will earn 🎉{" "}
          <em>
            <strong>50 loyalty points,</strong>
          </em>{" "}
          and the 👑{" "}
          <em>
            <strong>top 10 winners will receive special surprise gifts.</strong>
          </em>{" "}
        </p>
        <p className="txt2">Enjoy the game and good luck! 🥳</p>
      </div>
      <div className={styles.product_image}>
        <img src={productImage} alt="" />
      </div>
      <div className={styles.how_to_play_wrapper}>
        <h2>HOW TO PLAY?</h2>
        <ul>
          <li>
            The cards are placed face down, with each card having a matching
            pair.
          </li>
          <li>Select 2 cards at a time.</li>
          <li>If the cards don't match, they are turned face down again.</li>
          <li>Match all the cards before the timer run out.</li>
        </ul>
      </div>

      <div className={styles.user_form}>
        <form action="">
          <div className={styles.input_field}>
            <label htmlFor="name" className="txt2">
              Name
            </label>
            <input type="text" name="name" id="name" placeholder="Rysha" />
          </div>
          <div className={styles.input_field}>
            <label htmlFor="mobile_number" className="txt2">
              Mobile Number
            </label>
            <input
              type="number"
              name="mobileNumber"
              id="mobile_number"
              placeholder="98765-xxxxx"
            />
          </div>
          <button className="txt2" type="submit">
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
}
