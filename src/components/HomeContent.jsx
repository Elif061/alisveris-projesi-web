// src/components/HomeContent.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundImage: 'url("/arkaplan.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        backdropFilter: "brightness(0.9)",
      }}
    >
      {/* Hoş Geldin Başlığı */}
      <h1 style={{ fontSize: "32px", color: "#000" }}>
        🛍️ ALDIM GİTTİ'ye Hoş Geldin!
      </h1>
      <p style={{ fontSize: "18px", color: "#000", marginBottom: "20px" }}>
        En uygun fiyatlı ürünleri keşfet, içerik bilgilerini karşılaştır, alışverişini akıllıca planla.
      </p>

      {/* Katalog Butonu */}
      <button
        onClick={() => navigate("/katalog")}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#001F3F",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📚 Besin Bilgi Kataloğu
      </button>

      {/* Alışveriş Rehberi */}
      <div style={{ marginTop: "60px" }}>
        <h2 style={{ textAlign: "center", color: "#000" }}>📘 Alışveriş Rehberi</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* Kart 1 */}
          <div style={cardStyle}>
            <h3>🧠 Sağlıklı Alışveriş Rehberi</h3>
            <p>
              Dengeli beslenmenin temeli alışveriş listesiyle başlar. Meyve, sebze, tam tahıllar ve süt ürünlerini sepetinizden eksik etmeyin.
            </p>
            <a href="https://www.youtube.com/watch?v=HDH3Bz4dnbg" target="_blank" rel="noopener noreferrer">🎥 Videoyu İzle</a>
            <br />
            <a href="https://www.tarimorman.gov.tr/GKGM/Belgeler/Tuketici_Bilgi_Kosesi/Brosurler/saglikli_beslenme.pdf" target="_blank" rel="noopener noreferrer">📄 PDF: Sağlıklı Beslenme Broşürü</a>
          </div>

          {/* Kart 2 */}
          <div style={cardStyle}>
            <h3>📦 Gıda Etiketi Okuma Rehberi</h3>
            <p>
              “Doğal” veya “şekersiz” gibi ifadeler sizi yanıltmasın. İçindekiler listesinde fruktoz, glikoz gibi gizli şekerleri ve katkı maddelerini tanıyın.
            </p>
            <a href="https://www.youtube.com/watch?v=cXkclycP7Eo" target="_blank" rel="noopener noreferrer">🎥 Videoyu İzle</a>
            <br />
            <a href="https://www.acibadem.com.tr/hayat/gida-etiketlerini-dogru-okuma-tuyolari/" target="_blank" rel="noopener noreferrer">📄 PDF: Etiket Okuma Bilgilendirmesi</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#001F3F",
          color: "white",
          fontSize: "14px",
        }}
      >
        <p>© 2025 Aldım Gitti • Tüm hakları saklıdır.</p>
        <p>📧 destek@aldimgitti.com</p>
      </footer>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  padding: "20px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
  color: "#000",
};

export default HomeContent;
