import React from "react";
import styles from "./gameResult.module.css";
import { Link } from "react-router-dom";

export default function GameResult({
  score,
  seconds,
  setIsGameStarted,
  setGameNo,
  setShowResult,
  shuffleCards,
}) {
  return (
    <div className={`flex-row-center ${styles.GameResult}`}>
      <div className={`flex-col-center ${styles.mainContainer}`}>
        {/* game won container */}
        {score === 20 && (
          <div className={`flex-col-center ${styles.gameWonContainer}`}>
            <p className={styles.congrats}>CONGRATS!</p>
            <p className={`txt2`}>
              AVAIL YOUR REWARD LOYALTY POINTS AT CHECKOUT
            </p>
          </div>
        )}

        {/* game lost container */}
        {score !== 20 && (
          <div className={`flex-col-center ${styles.gameLostContainer}`}>
            <p className={`txt2`}>TIME'S UP!</p>
            <p className={styles.score}>
              YOUR SCORE IS <strong>{score}</strong>
            </p>
            <div className={styles.line}></div>
          </div>
        )}

        <Link to={"/reward"} className={`txt2`}>
          Click here to avail your reward
        </Link>
      </div>
    </div>
  );
}
