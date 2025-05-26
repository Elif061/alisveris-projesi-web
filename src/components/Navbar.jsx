import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      navigate("/arama", { state: { query: searchText.trim() } });
      setSearchText("");
    }
  };

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      localStorage.setItem("user", JSON.stringify({ email }));
      setShowLogin(false);
      navigate("/home");
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <>
      {/* Giriş Yap Modalı */}
      {showLogin && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3>👤 Giriş Yap</h3>
            <input
              type="text"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleLogin} style={styles.button}>
              Giriş Yap
            </button>
            <button onClick={() => setShowLogin(false)} style={styles.cancel}>
              Kapat
            </button>
          </div>
        </div>
      )}

      {/* Navbar içeriği */}
      <div
        style={{
          backgroundColor: "#001F3F",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo ve Başlık */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 50, marginRight: 10 }} />
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            ALDIM GİTTİ
          </span>
        </Link>

        {/* Menü ve Arama */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <CategoryMenu />

          {/* Arama Kutusu */}
          <input
            type="text"
            placeholder="🔍 Neyi en ucuza almak istersin?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              width: 250,
            }}
          />

          {/* Diğer Butonlar */}
          <button
            onClick={() => navigate("/shopping-list")}
            style={navButton}
          >
            📝 Alışveriş Listesi
          </button>
          <button onClick={() => navigate("/favoriler")} style={navButton}>
            ❤️ Favoriler
          </button>
          <button onClick={() => setShowLogin(true)} style={navButton}>
            👤 Giriş Yap
          </button>
        </div>
      </div>
    </>
  );
};

const navButton = {
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#001F3F",
    color: "white",
    border: "none",
    borderRadius: 5,
    marginBottom: 10,
    cursor: "pointer",
  },
  cancel: {
    background: "transparent",
    border: "none",
    color: "#999",
    cursor: "pointer",
  },
};

export default Navbar;

