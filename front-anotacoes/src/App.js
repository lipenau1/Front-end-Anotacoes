import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Board from "./pages/board/Board";
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
