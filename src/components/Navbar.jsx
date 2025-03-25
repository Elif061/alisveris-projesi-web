// src/components/Navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // PNG formatındaki logo

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: "#001F3F" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo ve Başlık */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <img
            src={logo}
            alt="Aldım Gitti Logo"
            style={{ width: 50, marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ color: "white" }}>
            ALDIM GİTTİ
          </Typography>
        </Box>

        {/* Kategoriler + Arama Kutusu */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            gap: 3,
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            📦 Kategoriler
          </Typography>

          <InputBase
            placeholder="🔍 Neyi en ucuza almak istersin?"
            sx={{
              backgroundColor: "white",
              padding: "6px 12px",
              borderRadius: 3,
              width: 280,
            }}
          />
        </Box>

        {/* Sağdaki Butonlar */}
        <Box sx={{ display: "flex", gap: 2 }}>
        <Button color="inherit">📉 Fiyatı Düşenler</Button>
          <Button color="inherit">❤️ Favoriler</Button>
          <Button color="inherit" onClick={() => navigate("/register")}>
            👤 Giriş Yap
          </Button>
          <Button color="inherit">🛒 Sepetim</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
