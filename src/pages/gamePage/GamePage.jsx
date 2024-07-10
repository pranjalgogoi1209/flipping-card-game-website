import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";
import { Link } from "react-router-dom";

import { Cards, CountDown, GameResult } from "../../components";
import { backCardsArr } from "../../utils/backCards";
import BgIcons from "../../components/bgIcons/BgIcons";

import logo from "./../../assets/header/logo.png";

export default function GamePage({ name, isLaptopView, score, setScore }) {
  const [cards, setCards] = useState([]);
  const [seconds, setSeconds] = useState(90);
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
    } else {
      setIsGameStarted(true);
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
    setSeconds(180);

    // restart score
    setScore(0);
  };

  // this homePage function is rendering in every second because of countDown, that's why write anything you want inside this useEffect
  useEffect(() => {
    setShowResult(false);
    shuffleCards();
  }, [isGameStarted, gameNo]);

  useEffect(() => {
    if (score === 10 || seconds === 0) {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  }, [seconds, score]);

  return (
    <div className={`flex-col-center ${styles.GamePage}`}>
      {/* logo */}
      {isLaptopView && (
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
      )}

      <header className={`flex-col-center ${styles.header}`}>
        {name && (
          <strong className={`txt1 ${styles.name}`}>Hello {name},</strong>
        )}

        {/* score and time */}
        <div className={`flex-row-center ${styles.scoreTimeContainer}`}>
          <p className={`txt1 ${styles.score}`}>Score: {score}</p>
          <div className={`txt1 flex-row-center ${styles.time}`}>
            {isGameStarted ? (
              <CountDown
                seconds={seconds}
                setSeconds={setSeconds}
                score={score}
              />
            ) : (
              "00:00"
            )}
          </div>
        </div>
      </header>

      {/* cards */}
      <div className={styles.cardsContainer}>
        <Cards cards={cards} setCards={setCards} setScore={setScore} />
      </div>

      {isLaptopView && (
        <Link to="#" className={`txt2 ${styles.link}`}>
          Back to Website
        </Link>
      )}

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

      {isLaptopView && <BgIcons />}
    </div>
  );
}
