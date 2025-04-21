import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./Component/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Component/Content/Intro";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/ReactTutorial" element={<First />}></Route>
          <Route path="/intro" element={<Intro/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <First /> */}
    </div>
  );
}

export default App;
