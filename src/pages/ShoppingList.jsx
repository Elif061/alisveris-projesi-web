import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { text: newItem, checked: false }]);
    setNewItem("");
  };

  const toggleItem = (index) => {
    const updated = [...items];
    updated[index].checked = !updated[index].checked;
    setItems(updated);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#fef1ff", minHeight: "100vh" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#001F3F",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        🔙 Geri
      </button>

      <h2>📝 Alışveriş Listesi</h2>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Ürün adı girin"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button
          onClick={addItem}
          style={{
            backgroundColor: "#001F3F",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          ➕ Ekle
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "white",
              padding: 10,
              marginBottom: 8,
              borderRadius: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: item.checked ? "line-through" : "none",
            }}
          >
            <span>{item.text}</span>
            <div>
              <button onClick={() => toggleItem(index)} style={{ marginRight: 8 }}>
                ✅
              </button>
              <button onClick={() => deleteItem(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
