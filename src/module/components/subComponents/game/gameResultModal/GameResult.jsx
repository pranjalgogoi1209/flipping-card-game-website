import React, { useState, useEffect } from "react";
import styles from "./gameResult.module.css";
import { FaPlay } from "react-icons/fa";
import axios from "axios";

export default function GameResult({
  score,
  seconds,
  setIsGameStarted,
  setGameNo,
  setShowResult,
  shuffleCards,
  setCurrentPage,
  name,
  mobileNumber,
}) {
  const [isAttemptLeft, setIsAttemptLeft] = useState(true);
  const [attemptLeft, setAttemptLeft] = useState(3);
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    let dataArr = [];
    const localDataArr = JSON.parse(localStorage.getItem("attemptsArr"));
    console.log(localDataArr);
    if (localDataArr) {
      console.log("local data array hai");
      const totalDataLength = localDataArr.length;
      if (totalDataLength === 1) {
        dataArr.push({
          attempt: 2,
          score: score,
        });
      } else if (totalDataLength === 2) {
        dataArr.push({
          attempt: 3,
          score: score,
        });
      }
    } else {
      console.log("local data array nahi hai");
      dataArr.push({
        attempt: 1,
        score: score,
      });
    }
    setDataArr(dataArr);
    console.log(dataArr);
  }, []);

  useEffect(() => {
    let attemptsArr = [];

    const localAttemtsArr = JSON.parse(localStorage.getItem("attemptsArr"));
    console.log(localAttemtsArr);
    if (localAttemtsArr) {
      console.log("if working");

      const totalAttempts = localAttemtsArr.length;
      if (totalAttempts === 1) {
        localAttemtsArr.push({
          2: score,
        });
        localStorage.setItem("attemptsArr", JSON.stringify(localAttemtsArr));
        setAttemptLeft(1);
      } else if (totalAttempts === 2) {
        localAttemtsArr.push({
          3: score,
        });
        localStorage.setItem("attemptsArr", JSON.stringify(localAttemtsArr));
        setAttemptLeft(0);
      } else {
        setIsAttemptLeft(false);
      }
    } else {
      console.log("else working");
      attemptsArr.push({
        1: score,
      });
      localStorage.setItem("attemptsArr", JSON.stringify(attemptsArr));
      setAttemptLeft(2);
    }
  }, [attemptLeft === 0]);

  // api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://mcstaging.colorbarcosmetics.com/rest/V1/webhook/gameapi/",
          {
            data: {
              name: name,
              phone_number: mobileNumber,
              scores: dataArr,
            },
          }
        );
        console.log(response.data);

        if (response.data.atempted) {
          setCurrentPage("home");
        } else {
          setCurrentPage("game");
        }
      } catch (error) {
        console.error(error);
        // window.alert(error.message);
      }
    };

    fetchData();
  }, [score]);

  return (
    <div className={`flex-row-center ${styles.GameResult}`}>
      <div className={`flex-col-center ${styles.mainContainer}`}>
        {/* game won container */}
        {score === 10 && (
          <div className={`flex-col-center ${styles.gameWonContainer}`}>
            <p className={styles.congrats}>CONGRATS!</p>
            <p className={`txt2`}>
              AVAIL YOUR REWARD LOYALTY POINTS AT CHECKOUT
            </p>
          </div>
        )}

        {/* game lost container */}
        {score !== 10 && (
          <div className={`flex-col-center ${styles.gameLostContainer}`}>
            <p className={`txt2`}>TIME'S UP!</p>
            <p className={styles.score}>
              YOUR SCORE IS <strong>{score}</strong>
            </p>
            <div className={styles.line}></div>

            {/* play again container */}
            <div className={`flex-col-center ${styles.playAgainContainer}`}>
              <p className={`txt2`}>
                You Have <strong>{attemptLeft}</strong> More Attempts
              </p>
              <button
                onClick={() => {
                  shuffleCards();
                  setShowResult(false);
                }}
                className={`flex-row-center ${styles.playAgain} ${
                  !isAttemptLeft && styles.disableBtn
                }`}
                disabled={!isAttemptLeft}
              >
                <FaPlay /> Play Again
              </button>
            </div>
          </div>
        )}

        <p
          to={"/reward"}
          className={`txt2 ${styles.redirect}`}
          onClick={() => setCurrentPage("reward")}
        >
          Click here to avail your reward
        </p>
      </div>
    </div>
  );
}
