import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Sayfalar
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SearchPage from "./pages/SearchPage";
import ShoppingList from "./pages/ShoppingList";
import MeyveSebze from "./pages/MeyveSebze";
import EtTavukBalik from "./pages/EtTavukBalik";
import HomeContent from "./components/HomeContent";
import FoodCatalog from "./pages/FoodCatalog";
import Favoriler from "./pages/Favoriler";
import SutKahvaltilik from "./pages/SutKahvaltilik";
import TemelGida from "./pages/TemelGida";
import Icecek from "./pages/Icecek";
import Atistirmalik from "./pages/Atistirmalik";
import DeterjanTemizlik from "./pages/DeterjanTemizlik";
import KisiselBakim from "./pages/KisiselBakim";

// Bileşen
import Navbar from "./components/Navbar";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        {/* Giriş Sayfası */}
        <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Ana Sayfa */}
        <Route path="/home" element={user ? <HomeContent /> : <Navigate to="/" />} />

        {/* Kategoriler */}
        <Route path="/kategori/meyve-sebze" element={user ? <MeyveSebze /> : <Navigate to="/" />} />
        <Route path="/kategori/et-tavuk-balik" element={user ? <EtTavukBalik /> : <Navigate to="/" />} />
        <Route path="/kategori/sut-kahvaltilik" element={user ? <SutKahvaltilik /> : <Navigate to="/" />} />
        <Route path="/kategori/temel-gida" element={user ? <TemelGida /> : <Navigate to="/" />} />
        <Route path="/kategori/icecek" element={user ? <Icecek /> : <Navigate to="/" />} />
        <Route path="/kategori/atistirmalik" element={user ? <Atistirmalik /> : <Navigate to="/" />} />
        <Route path="/kategori/deterjan-temizlik" element={user ? <DeterjanTemizlik /> : <Navigate to="/" />} />
        <Route path="/kategori/kisisel-bakim" element={user ? <KisiselBakim /> : <Navigate to="/" />} />

        {/* Diğer Sayfalar */}
        <Route path="/arama" element={user ? <SearchPage /> : <Navigate to="/" />} />
        <Route path="/shopping-list" element={user ? <ShoppingList /> : <Navigate to="/" />} />
        <Route path="/katalog" element={user ? <FoodCatalog /> : <Navigate to="/" />} />
        <Route path="/favoriler" element={user ? <Favoriler /> : <Navigate to="/" />} />

        {/* Tanımsız rota */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
