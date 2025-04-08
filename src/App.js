// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Navbar from "./components/Navbar";

// Bu bileşenin içinde navigate ve useEffect kullanılacak
const AppWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: 40 }}>
              {/* İleride broşür, tanıtım vs buraya gelir */}
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h2>Hoş geldin!</h2>
              <p>Girişin başarılı 🎉</p>
            </div>
          }
        />
      </Routes>
    </>
  );
};

// Router'ı burada sarmalıyoruz
const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
