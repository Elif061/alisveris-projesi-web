import React, { useState } from "react";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      localStorage.setItem("user", JSON.stringify({ email }));
      onLogin(); // dışarıdan yönlendirme fonksiyonu
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
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
        <button onClick={onClose} style={styles.cancel}>
          Kapat
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
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
  }
};

export default LoginModal;
