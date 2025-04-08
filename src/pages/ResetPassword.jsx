// src/pages/ResetPassword.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";
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
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Şifre Sıfırlama
      </Typography>
      <form onSubmit={handleReset}>
        <TextField
          fullWidth
          label="E-posta"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#001F3F" }}
        >
          Şifre Sıfırlama Bağlantısı Gönder
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
