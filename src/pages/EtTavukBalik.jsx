import React from "react";

const EtTavukBalik = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>🍗 Et - Tavuk - Balık Ürünleri</h2>
      <button style={styles.button}>🛒 Migros</button>
      <button style={styles.button}>🛒 A101</button>
    </div>
  );
};

const styles = {
  button: {
    margin: 10,
    padding: "10px 20px",
    backgroundColor: "#001F3F",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};

export default EtTavukBalik;

