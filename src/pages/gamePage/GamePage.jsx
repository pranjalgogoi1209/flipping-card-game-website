import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";

import { Cards, CountDown, GameResult } from "../../components";
import { backCardsArr } from "../../utils/backCards";

export default function GamePage() {
  const [cards, setCards] = useState([]);
  const [seconds, setSeconds] = useState(90);
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gameNo, setGameNo] = useState(0);
  const [startingCountDown, setStartingCountDown] = useState(3);

  // starting count down
  useEffect(() => {
    if (startingCountDown > 0) {
      const timer = setTimeout(() => {
        setStartingCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [startingCountDown, isGameStarted]);

  // shuffle cards at the time of newgame
  const shuffleCards = () => {
    console.log("Starting a New Game");
    const shuffledCards = [...backCardsArr, ...backCardsArr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);

    // restart timing
    setSeconds(20);

    // restart score
    setScore(0);
  };

  // this homePage function is rendering in every second because of countDown, that's why write anything you want inside this useEffect
  useEffect(() => {
    setShowResult(false);
    shuffleCards();
  }, [isGameStarted, gameNo]);

  useEffect(() => {
    if (score === 6 || seconds === 0) {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  }, [seconds, score]);

  return (
    <div className={`flex-col-center ${styles.GamePage}`}>
      <header className={`flex-col-center ${styles.header}`}>
        <strong className={`txt1 ${styles.name}`}>Hello Kashika,</strong>

        {/* score and time */}
        <div className={`flex-row-center ${styles.scoreTimeContainer}`}>
          <p className={`txt1 ${styles.score}`}>Score: {score}</p>
          <div className={`txt1 flex-row-center ${styles.time}`}>
            <CountDown
              seconds={seconds}
              setSeconds={setSeconds}
              score={score}
            />
          </div>
        </div>
      </header>

      {/* cards */}
      <div className={styles.cardsContainer}>
        <Cards cards={cards} setCards={setCards} setScore={setScore} />
      </div>

      {/* starting countdown */}
      {startingCountDown > 0 && (
        <div className={`flex-row-center ${styles.startingCountDown}`}>
          <p className={styles.count}>{startingCountDown}</p>
        </div>
      )}

      {/* game result */}
      {showResult && (
        <GameResult
          score={score}
          seconds={seconds}
          setIsGameStarted={setIsGameStarted}
          setGameNo={setGameNo}
          setShowResult={setShowResult}
          shuffleCards={shuffleCards}
        />
      )}
    </div>
  );
}
