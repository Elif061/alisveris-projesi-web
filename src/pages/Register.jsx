import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Şifre en az 6 karakter olmalı.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("Kayıt başarılı!");
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Bu e-posta zaten kayıtlı.");
      } else {
        alert("Hata: " + error.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Kayıt Ol</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ ...styles.input, marginBottom: 0 }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.iconButton}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit" style={styles.button}>Kayıt Ol</button>
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
  passwordContainer: {
    position: "relative",
    marginBottom: 12,
  },
  iconButton: {
    position: "absolute",
    top: "50%",
    right: 10,
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
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

export default Register;
