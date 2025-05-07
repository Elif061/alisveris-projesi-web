import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("Lütfen e-posta adresinizi doğrulayın!");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      alert("Giriş başarılı!");
      navigate("/home");
    } catch (error) {
      alert("Giriş başarısız: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Giriş Yap</h2>
      <form onSubmit={handleLogin} style={styles.form}>
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

        <button type="submit" style={styles.button}>Giriş Yap</button>
      </form>

      <p style={styles.text}>
        <span onClick={() => navigate("/reset-password")} style={styles.link}>
          Şifreni mi unuttun?
        </span>
      </p>
      <p style={styles.text}>
        Hesabın yok mu?{" "}
        <span onClick={() => navigate("/register")} style={styles.link}>
          Kayıt Ol
        </span>
      </p>
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
    marginBottom: 12,
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
  text: {
    marginTop: 10,
  },
  link: {
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Login;


