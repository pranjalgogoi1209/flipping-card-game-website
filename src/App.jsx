import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import { HomePage, GamePage, RewardPage } from "./pages";

export default function App() {
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={"/"}
          element={<HomePage name={name} setName={setName} />}
        />
        <Route path={"/game"} element={<GamePage name={name} />} />
        <Route path={"/reward"} element={<RewardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
