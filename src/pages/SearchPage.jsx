import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const query = location.state?.query || "";
    if (query.trim() !== "") {
      setSearchTerm(query);
      handleSearch(query);
    }
  }, [location.state?.query]);

  const handleSearch = async (queryText) => {
    setLoading(true);
    setSearched(true);

    const snapshot = await getDocs(collection(db, "urunler"));
    const allData = snapshot.docs.map((doc) => doc.data());

    const filtered = allData.filter((item) =>
      item.ad.toLowerCase().includes(queryText.toLowerCase())
    );

    setResults(filtered);
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
    <div style={{ padding: 20 }}>
      <h2>🔍 Arama Sonuçları</h2>

      {loading && <p>Yükleniyor...</p>}

      {!loading && searched && results.length === 0 && (
        <p>❗ Aradığınız ürün bulunamadı.</p>
      )}

      <div style={styles.urunListesi}>
        {results.map((product, index) => (
          <div key={index} style={styles.urunKart}>
            {/* 🔔 İndirim etiketi */}
            {product.indirimdeMi && (
              <span style={styles.etiket}>🔔 İndirimde!</span>
            )}

            {/* Market logosu */}
            <img
              src={`/images/markets/${product.market.toLowerCase()}.png`}
              alt={product.market}
              style={styles.logo}
            />

            {/* Favori ikonu */}
            <FaHeart
              onClick={() => addToFavorites(product)}
              style={styles.kalp}
              title="Favorilere Ekle"
            />

            {/* Ürün görseli */}
            {product.resimUrl && (
              <img
                src={product.resimUrl}
                alt={product.ad}
                style={styles.gorsel}
              />
            )}

            <h4 style={{ textTransform: "lowercase" }}>{product.ad}</h4>

            {/* Fiyat gösterimi */}
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
  urunListesi: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  },
  urunKart: {
    width: "250px",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 0 8px rgba(0,0,0,0.05)",
    textAlign: "center",
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

export default SearchPage;
