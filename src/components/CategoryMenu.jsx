// src/components/CategoryMenu.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToCategory = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: "relative" }}
    >
      <button style={styles.button}>📦 Kategoriler</button>

      {open && (
        <div style={styles.dropdown}>
          <div style={styles.item} onClick={() => goToCategory("/kategori/meyve-sebze")}>
            🥦 Meyve-Sebze
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/et-tavuk-balik")}>
            🍗 Et-Tavuk-Balık
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/sut-kahvaltilik")}>
            🧀 Süt-Kahvaltılık
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/temel-gida")}>
            🥫 Temel Gıda
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/icecek")}>
            🥤 İçecek
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/atistirmalik")}>
            🍪 Atıştırmalık
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/deterjan-temizlik")}>
            🧼 Deterjan-Temizlik
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/kisisel-bakim")}>
            🧴 Kişisel Bakım
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    fontSize: 16,
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#001F3F",
    color: "white",
    padding: "10px",
    borderRadius: 4,
    zIndex: 100,
    minWidth: "200px",
  },
  item: {
    padding: "6px 10px",
    cursor: "pointer",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
};

export default CategoryMenu;
