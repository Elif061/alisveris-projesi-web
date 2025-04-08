// src/pages/Login.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Buraya dikkat

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
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Giriş Yap
      </Typography>

      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="E-posta"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Şifre"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#001F3F" }}
        >
          Giriş Yap
        </Button>

        <Typography align="center" sx={{ mt: 2 }}>
          <Link href="#" onClick={() => navigate("/reset-password")}>
            Şifreni mi unuttun?
          </Link>
        </Typography>

        <Typography align="center" sx={{ mt: 1 }}>
          Hesabın yok mu?{" "}
          <Link href="#" onClick={() => navigate("/register")}>
            Kayıt Ol
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;


