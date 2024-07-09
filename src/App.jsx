import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import { HomePage, GamePage, RewardPage } from "./pages";

export default function App() {
  const [name, setName] = useState("");
  const [isLaptopView, setIsLaptopView] = useState(false);

  console.log(isLaptopView);
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

  return (
    <BrowserRouter>
      {!isLaptopView && <Header />}
      <Routes>
        <Route
          path={"/"}
          element={
            <HomePage
              name={name}
              setName={setName}
              isLaptopView={isLaptopView}
            />
          }
        />
        <Route
          path={"/game"}
          element={<GamePage name={name} isLaptopView={isLaptopView} />}
        />
        <Route
          path={"/reward"}
          element={<RewardPage isLaptopView={isLaptopView} />}
        />
      </Routes>

      {!isLaptopView && <Footer />}
    </BrowserRouter>
  );
}
