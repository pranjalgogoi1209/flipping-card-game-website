import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomePage, GamePage, RewardPage } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/game"} element={<GamePage />} />
        <Route path={"/reward"} element={<RewardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
