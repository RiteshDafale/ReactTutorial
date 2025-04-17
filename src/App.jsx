import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./Component/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/ReactTutorial" element={<First />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <First /> */}
    </div>
  );
}

export default App;
