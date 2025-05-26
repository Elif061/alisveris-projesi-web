import React, { useEffect, useState } from "react";

const Favoriler = () => {
  const [favoriler, setFavoriler] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriler");
    if (stored) {
      setFavoriler(JSON.parse(stored));
    }
  }, []);

  const removeFromFavorites = (ad, market) => {
    const updated = favoriler.filter(
      (item) => !(item.ad === ad && item.market === market)
    );
    setFavoriler(updated);
    localStorage.setItem("favoriler", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>❤️ Favori Ürünler</h2>

      {favoriler.length === 0 ? (
        <p>Henüz favori ürününüz yok.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {favoriler.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "16px",
                borderRadius: "8px",
                width: "250px",
                textAlign: "center",
                backgroundColor: "#fdfdfd",
                boxShadow: "0 0 8px rgba(0,0,0,0.05)",
                position: "relative",
              }}
            >
              {/* 🔔 İndirim etiketi */}
              {product.indirimdeMi && (
                <span style={styles.etiket}>🔔 İndirimde!</span>
              )}

              {/* ✅ Market logosu */}
              <img
                src={`/images/markets/${product.market.toLowerCase()}.png`}
                alt={product.market}
                title={product.market}
                style={styles.logo}
              />

              {/* ❌ Favoriden çıkar butonu */}
              <button
                onClick={() => removeFromFavorites(product.ad, product.market)}
                style={styles.kapat}
                title="Favoriden çıkar"
              >
                ×
              </button>

              {/* 🖼️ Ürün resmi */}
              {product.resimUrl && (
                <img
                  src={product.resimUrl}
                  alt={product.ad}
                  style={styles.gorsel}
                />
              )}

              <h4 style={{ textTransform: "lowercase" }}>{product.ad}</h4>

              {product.indirimdeMi && product.eskiFiyat ? (
                <p>
                  <span style={styles.eskiFiyat}>{product.eskiFiyat} TL</span>
                  <span style={styles.yeniFiyat}>{product.fiyat} TL 🔻</span>
                </p>
              ) : (
                <p style={styles.normalFiyat}>{product.fiyat} TL</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  logo: {
    position: "absolute",
    top: 10,
    left: 10,
    width: "30px",
    height: "30px",
    objectFit: "contain",
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "2px",
    boxShadow: "0 0 4px rgba(0,0,0,0.2)",
  },
  kapat: {
    position: "absolute",
    top: "8px",
    right: "8px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
  gorsel: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  etiket: {
    position: "absolute",
    top: 10,
    right: 45,
    backgroundColor: "#ff4d4d",
    color: "white",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    zIndex: 1,
  },
  eskiFiyat: {
    textDecoration: "line-through",
    color: "#888",
    marginRight: 8,
  },
  yeniFiyat: {
    color: "green",
    fontWeight: "bold",
  },
  normalFiyat: {
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default Favoriler;
