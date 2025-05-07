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
            🥦 Meyve-Sebze Ürünleri
          </div>
          <div style={styles.item} onClick={() => goToCategory("/kategori/et-tavuk-balik")}>
            🍗 Et-Tavuk-Balık
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
  },
  item: {
    padding: "6px 10px",
    cursor: "pointer",
  },
};

export default CategoryMenu;
