// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"; // Navbar eklendi

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div style={{ padding: 40 }}> {/* 👈 boş anasayfa */}
          {/* İleride broşür, tanıtım vs buraya gelir */}
        </div>} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Hoş geldin!</h2>
            <p>Girişin başarılı 🎉</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
