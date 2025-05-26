import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaHeart } from "react-icons/fa";

const MeyveSebze = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async (marketName) => {
    setLoading(true);
    const colRef = collection(db, "urunler");
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => doc.data());

    const marketData = allData.filter(
      (item) => item.market === marketName && item.kategori === "meyve-sebze"
    );

    setProducts(marketData);
    setLoading(false);
  };

  const addToFavorites = (product) => {
    const stored = localStorage.getItem("favoriler");
    const existing = stored ? JSON.parse(stored) : [];
    const isAlready = existing.find(
      (item) => item.ad === product.ad && item.market === product.market
    );

    if (!isAlready) {
      const updated = [...existing, product];
      localStorage.setItem("favoriler", JSON.stringify(updated));
      alert(`${product.ad} favorilere eklendi!`);
    } else {
      alert(`${product.ad} zaten favorilerde.`);
    }
  };

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        🥦 Meyve-Sebze Ürünleri
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => getProducts("Migros")} style={styles.button}>
          🛒 Migros
        </button>
        <button onClick={() => getProducts("A101")} style={styles.button}>
          🛒 A101
        </button>
      </div>

      {loading && <p>Yükleniyor...</p>}

      <div style={styles.urunListesi}>
        {products.map((product, index) => (
          <div key={index} style={styles.urunKart}>
            {/* 🔔 İndirim etiketi */}
            {product.indirimdeMi && (
              <span style={styles.etiket}>🔔 İndirimde!</span>
            )}

            {/* 🏪 Market logosu */}
            <img
              src={`/images/markets/${product.market.toLowerCase()}.png`}
              alt={product.market}
              title={product.market}
              style={styles.logo}
            />

            {/* ❤️ Favori ikonu */}
            <FaHeart
              onClick={() => addToFavorites(product)}
              style={styles.kalp}
              title="Favorilere Ekle"
            />

            {/* 🖼️ Ürün görseli */}
            {product.resimUrl && (
              <img
                src={product.resimUrl}
                alt={product.ad}
                style={styles.gorsel}
              />
            )}

            {/* 🏷️ Ürün adı ve fiyat */}
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
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#001F3F",
    color: "white",
    borderRadius: "8px",
    border: "none",
  },
  urunListesi: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  urunKart: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 0 8px rgba(0,0,0,0.05)",
    position: "relative",
  },
  gorsel: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
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
  kalp: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#ff4d4d",
    cursor: "pointer",
    fontSize: 18,
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

export default MeyveSebze;
