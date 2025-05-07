import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
      navigate("/"); // Giriş ekranına dön
    } catch (error) {
      alert("Hata oluştu: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔐 Şifre Sıfırlama</h2>
      <form onSubmit={handleReset} style={styles.form}>
        <input
          type="email"
          placeholder="E-posta adresinizi girin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          📧 Şifre Sıfırlama Bağlantısı Gönder
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: "60px auto",
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    textAlign: "center",
  },
  heading: {
    marginBottom: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  input: {
    padding: 10,
    fontSize: 14,
    borderRadius: 4,
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    backgroundColor: "#001F3F",
    color: "white",
    padding: 10,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};

export default ResetPassword;
