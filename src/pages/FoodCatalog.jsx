import React from "react";
import "./FoodCatalog.css"; // CSS animasyonu için

const products = [
  // Meyve-Sebze
  {
    name: "Muz",
    calorie: "89 kcal / 100g",
    protein: "1.1g",
    fat: "0.3g",
    carbs: "23g",
    image: "/images/muz.png",
  },
  {
    name: "Limon",
    calorie: "29 kcal / 100g",
    protein: "1.1g",
    fat: "0.3g",
    carbs: "9g",
    image: "/images/limon.png",
  },
  {
    name: "Maydanoz",
    calorie: "36 kcal / 100g",
    protein: "3g",
    fat: "0.8g",
    carbs: "6g",
    image: "/images/maydanoz.png",
  },
  {
    name: "Patates",
    calorie: "77 kcal / 100g",
    protein: "2g",
    fat: "0.1g",
    carbs: "17g",
    image: "/images/patates.png",
  },
  {
    name: "Elma",
    calorie: "52 kcal / 100g",
    protein: "0.3g",
    fat: "0.2g",
    carbs: "14g",
    image: "/images/elma.png",
  },
  {
    name: "Soğan",
    calorie: "40 kcal / 100g",
    protein: "1.1g",
    fat: "0.1g",
    carbs: "9g",
    image: "/images/sogan.png",
  },
  {
    name: "Köfte",
    calorie: "240 kcal / 100g",
    protein: "16g",
    fat: "20g",
    carbs: "2g",
    image: "/images/kofte.png",
  },
  {
    name: "Kıyma (Yağlı)",
    calorie: "294 kcal / 100g",
    protein: "17g",
    fat: "25g",
    carbs: "0g",
    image: "/images/kiyma.png",
  },
  {
    name: "Pınar Salam",
    calorie: "280 kcal / 100g",
    protein: "13g",
    fat: "25g",
    carbs: "2g",
    image: "/images/salam.png",
  },
  {
    name: "Kanat (Derili)",
    calorie: "203 kcal / 100g",
    protein: "18g",
    fat: "15g",
    carbs: "0g",
    image: "/images/kanat.png",
  
  },
  {
    name: "Banvit Bonfile",
    calorie: "160 kcal / 100g",
    protein: "22g",
    fat: "7g",
    carbs: "0g",
    image: "/images/bonfile.png",
  },
  {
    name: "Peynir",
    calorie: "289 kcal / 100g",
    protein: "18g",
    fat: "23g",
    carbs: "2g",
    image: "/images/peynir.png",
  },
  {
    name: "Yoğurt",
    calorie: "61 kcal / 100g",
    protein: "3.5g",
    fat: "3g",
    carbs: "4g",
    image: "/images/yogurt.png",
  },
  {
    name: "Yumurta",
    calorie: "155 kcal / 100g",
    protein: "13g",
    fat: "11g",
    carbs: "1g",
    image: "/images/yumurta.png",
  },
  {
    name: "Zeytin",
    calorie: "115 kcal / 100g",
    protein: "0.8g",
    fat: "11g",
    carbs: "3g",
    image: "/images/zeytin.png",
  },
  {
    name: "Süt",
    calorie: "61 kcal / 100ml",
    protein: "3.1g",
    fat: "3.5g",
    carbs: "4.8g",
    image: "/images/sut.png",
  },
  {
    name: "Makarna",
    calorie: "355 kcal / 100g",
    protein: "12g",
    fat: "1.5g",
    carbs: "75g",
    image: "/images/makarna.png",
  },
  {
    name: "Ayçiçek Yağı",
    calorie: "884 kcal / 100g",
    protein: "0g",
    fat: "100g",
    carbs: "0g",
    image: "/images/aycicek-yagi.png",
  },
  {
    name: "Bulgur",
    calorie: "342 kcal / 100g",
    protein: "12g",
    fat: "1.3g",
    carbs: "75g",
    image: "/images/bulgur.png",
  },
  {
    name: "Un",
    calorie: "364 kcal / 100g",
    protein: "10g",
    fat: "1g",
    carbs: "76g",
    image: "/images/un.png",
  },
  {
    name: "Salça",
    calorie: "82 kcal / 100g",
    protein: "4g",
    fat: "0.5g",
    carbs: "17g",
    image: "/images/salca.png",
  },
  {
    name: "Toz Şeker",
    calorie: "387 kcal / 100g",
    protein: "0g",
    fat: "0g",
    carbs: "100g",
    image: "/images/toz-seker.png",
  },
  {
    name: "Pirinç",
    calorie: "360 kcal / 100g",
    protein: "7g",
    fat: "0.5g",
    carbs: "79g",
    image: "/images/pirinc.png",
  },
  {
    name: "Türk Kahvesi",
    calorie: "2 kcal / fincan",
    protein: "0g",
    fat: "0g",
    carbs: "0.4g",
    image: "/images/turk-kahvesi.png",
  },
  {
    name: "Siyah Çay",
    calorie: "1 kcal / 100ml",
    protein: "0g",
    fat: "0g",
    carbs: "0g",
    image: "/images/siyah-cay.png",
  },
  {
    name: "Soğuk Çay (Karpuz)",
    calorie: "27 kcal / 100ml",
    protein: "0g",
    fat: "0g",
    carbs: "6.5g",
    image: "/images/soguk-cay-karpuzlu.png",
  },
  {
    name: "Soğuk Çay (Şeftali)",
    calorie: "30 kcal / 100ml",
    protein: "0g",
    fat: "0g",
    carbs: "7g",
    image: "/images/soguk-cay-seftali.png",
  },
  {
    name: "Meyve Suyu (Karışık)",
    calorie: "48 kcal / 100ml",
    protein: "0.5g",
    fat: "0.1g",
    carbs: "11g",
    image: "/images/karisik-meyve-suyu.png",
  },
  {
    name: "Meyve Suyu (Vişne)",
    calorie: "52 kcal / 100ml",
    protein: "0.4g",
    fat: "0.2g",
    carbs: "12g",
    image: "/images/visneli-meyve-suyu.png",
  },
  {
    name: "Ayran",
    calorie: "37 kcal / 100ml",
    protein: "1.5g",
    fat: "2g",
    carbs: "2.6g",
    image: "/images/ayran.png",
  },
  {
    name: "Kola",
    calorie: "42 kcal / 100ml",
    protein: "0g",
    fat: "0g",
    carbs: "10.6g",
    image: "/images/kola.png",
  },
  {
    name: "Ülker Çikolatalı Gofret",
    calorie: "510 kcal / 100g",
    protein: "6g",
    fat: "26g",
    carbs: "60g",
    image: "/images/ulker-cikolatali-gofret.png",
  },
  {
    name: "Caramio",
    calorie: "528 kcal / 100g",
    protein: "5g",
    fat: "30g",
    carbs: "59g",
    image: "/images/caramio.png",
  },
  {
    name: "Canga",
    calorie: "500 kcal / 100g",
    protein: "6g",
    fat: "27g",
    carbs: "58g",
    image: "/images/canga.png",
  },
  {
    name: "Cips (Patates)",
    calorie: "540 kcal / 100g",
    protein: "5g",
    fat: "34g",
    carbs: "52g",
    image: "/images/cips.png",
  },
  {
    name: "Eti Burçak Sütlü Kremalı",
    calorie: "480 kcal / 100g",
    protein: "6g",
    fat: "20g",
    carbs: "70g",
    image: "/images/eti-burcak.png",
  },
  {
    name: "Haylayf",
    calorie: "470 kcal / 100g",
    protein: "5g",
    fat: "19g",
    carbs: "72g",
    image: "/images/haylayf.png",
  },
  {
    name: "Albeni",
    calorie: "480 kcal / 100g",
    protein: "4g",
    fat: "22g",
    carbs: "64g",
    image: "/images/albeni.png",
  },
  {
    name: "Kek (Çikolatalı)",
    calorie: "430 kcal / 100g",
    protein: "4g",
    fat: "21g",
    carbs: "54g",
    image: "/images/cikolatali-kek.png",
  },
  {
    name: "Kek (Vişneli)",
    calorie: "415 kcal / 100g",
    protein: "3.5g",
    fat: "19g",
    carbs: "56g",
    image: "/images/visneli-kek.png",
  },
  {
    name: "Kraker (Sade)",
    calorie: "440 kcal / 100g",
    protein: "8g",
    fat: "16g",
    carbs: "64g",
    image: "/images/sade-kraker.png",
  },
  {
    name: "Kraker (Baharatlı)",
    calorie: "455 kcal / 100g",
    protein: "7g",
    fat: "18g",
    carbs: "65g",
    image: "/images/baharatli-kraker.png",
  },
  {
    name: "Damla Sakızlı Sakız",
    calorie: "290 kcal / 100g",
    protein: "0g",
    fat: "0g",
    carbs: "70g",
    image: "/images/damla-sakizli-sakiz.png",
  },
  {
    name: "Karpuzlu Sakız",
    calorie: "295 kcal / 100g",
    protein: "0g",
    fat: "0g",
    carbs: "71g",
    image: "/images/karpuzlu-sakiz.png",
  },
  {
    name: "Algida Maraş Usulü",
    calorie: "220 kcal / 100g",
    protein: "3g",
    fat: "10g",
    carbs: "30g",
    image: "/images/dondurma.png",
  },
  
  
];

const FoodCatalog = () => {
  return (
    <div className="catalog-container">
      <h2 className="catalog-title">📚 Besin Bilgi Kataloğu</h2>
      <div className="card-grid">
        {products.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{item.name}</h3>
                <p><strong>Kalori:</strong> {item.calorie}</p>
                <p><strong>Protein:</strong> {item.protein}</p>
                <p><strong>Yağ:</strong> {item.fat}</p>
                <p><strong>Karbonhidrat:</strong> {item.carbs}</p>
              </div>
              <div className="flip-card-back">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCatalog;
