import React, { useState, useEffect } from "react";
import "./../common.css";

import { HomePage, GamePage, RewardPage, Header, Footer } from "../components";

export default function FlippingCardMemoryGame() {
  const [name, setName] = useState("");
  const [isLaptopView, setIsLaptopView] = useState(false);
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");

  console.log("is laptop view =>", isLaptopView);

  useEffect(() => {
    function updateLaptopView() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 991) {
        setIsLaptopView(true);
      } else {
        setIsLaptopView(false);
      }
    }
    updateLaptopView();

    window.addEventListener("resize", updateLaptopView);

    return () => {
      window.removeEventListener("resize", updateLaptopView);
    };
  }, []);

  console.log(currentPage);

  return (
    <>
      {!isLaptopView && <Header />}

      {currentPage === "home" && (
        <HomePage
          name={name}
          setName={setName}
          isLaptopView={isLaptopView}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "game" && (
        <GamePage
          name={name}
          isLaptopView={isLaptopView}
          score={score}
          setScore={setScore}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "reward" && (
        <RewardPage
          isLaptopView={isLaptopView}
          score={score}
          setCurrentPage={setCurrentPage}
        />
      )}

      {!isLaptopView && <Footer currentPage={currentPage} />}
    </>
  );
}
