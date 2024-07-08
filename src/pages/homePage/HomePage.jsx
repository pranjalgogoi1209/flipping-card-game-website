import React, { useState } from "react";
import axios from "axios";
import styles from "./homePage.module.css";
import productImage from "../../assets/home/makeup.png";
import { useNavigate } from "react-router-dom";

export default function HomePage({ name, setName }) {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://your-api-url.com/start-game", {
        name,
        mobileNumber,
      });
      console.log(response.data);
      navigate("/game");
      // Handle success response
    } catch (error) {
      console.error(error);
      navigate("/game");
    }
  };

  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      <header className={`flex-col-center ${styles.header}`}>
        <h1>Flip, Match, and Win!</h1>

        <div className={`flex-col-center ${styles.content_text}`}>
          <p className="txt2">
            Test your memory and have fun with our card-matching game. Every
            player will earn 🎉{" "}
            <em>
              <strong>50 loyalty points,</strong>
            </em>{" "}
            and the 👑{" "}
            <em>
              <strong>
                top 10 winners will receive special surprise gifts.
              </strong>
            </em>{" "}
          </p>
          <p className="txt2">Enjoy the game and good luck! 🥳</p>
        </div>
      </header>

      {/* image */}
      <div className={styles.product_image}>
        <img src={productImage} alt="" />
      </div>

      {/* how to play */}
      <div className={`flex-col-center ${styles.how_to_play_wrapper}`}>
        <h2>HOW TO PLAY?</h2>
        <ul className="flex-col-center">
          <li className={`txt2`}>
            The cards are placed face down, with each card having a matching
            pair.
          </li>
          <li className={`txt2`}>Select 2 cards at a time.</li>
          <li className={`txt2`}>
            If the cards match, you move on to the next pair.
          </li>
          <li className={`txt2`}>
            If the cards don't match, they are turned face down again.
          </li>
          <li className={`txt2`}>
            Match all the cards before the timer run out.
          </li>
        </ul>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className={`flex-col-center ${styles.user_form}`}
      >
        <div className={`flex-col-center ${styles.input_field}`}>
          <label htmlFor="name" className="txt2">
            Name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Rysha"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="txt2"
          />
        </div>

        <div className={`flex-col-center ${styles.input_field}`}>
          <label htmlFor="mobile_number" className="txt2">
            Mobile Number*
          </label>
          <input
            type="number"
            name="mobileNumber"
            id="mobile_number"
            placeholder="98765-xxxxx"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            className="txt2"
          />
        </div>
        <button type="submit" className="txt2">
          Start Game
        </button>
      </form>
    </div>
  );
}
