import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Temp from "./pages/temp/temp.js";
import Board from "./pages/board/Board";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Temp />} />
        <Route path="/board/:id" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;
