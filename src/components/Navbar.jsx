import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import CategoryMenu from "./CategoryMenu"; // ✅ Yeni bileşeni ekledik

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#001F3F", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {/* Logo ve Başlık */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ width: 50, marginRight: 10 }} />
        <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>ALDIM GİTTİ</span>
      </div>

      {/* Arama ve Butonlar */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <CategoryMenu /> {/* 📦 Kategoriler dropdown menüsü */}
        <input
          type="text"
          placeholder="🔍 Neyi en ucuza almak istersin?"
          style={{ padding: "6px 12px", borderRadius: "6px", border: "none", width: 250 }}
        />
        <button onClick={() => navigate("/shopping-list")} style={navButton}>📝 Alışveriş Listesi</button>
        <button style={navButton}>❤️ Favoriler</button>
        <button onClick={() => navigate("/login")} style={navButton}>👤 Giriş Yap</button>
      </div>
    </div>
  );
};

const navButton = {
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "14px"
};

export default Navbar;
