import React from "react";

import Crop from "./Crop";
import "./styles.scss";

const Crops = () => {
  const data = [
    {
      id: 1,
      img: "https://live.staticflickr.com/7920/45909507155_85741cfa80_b.jpg",
      title: "Rice",
    },
    {
      id: 2,
      img:
        "https://cdn.britannica.com/s:900x675/80/157180-131-BD67A140/Heads-wheat-grains.jpg",
      title: "Wheat",
    },
    {
      id: 3,
      img:
        "https://agnsoil.com/wp-content/uploads/2015/05/istock_sugarcane1.jpg",
      title: "Sugarcane",
    },
    {
      id: 4,
      img: "https://farmsfriend.com/wp-content/uploads/2020/04/05-2.jpg",
      title: "Maize",
    },
    {
      id: 5,
      img:
        "https://agamerica.com/wp-content/uploads/2019/07/cotton_cash_crops.jpg",
      title: "Cotton",
    },
  ];

  return (
    <div className="wrapper">
      {data.map((crop) => (
        <Crop
          key={crop.id}
          img={crop.img}
          title={crop.title}
          alt={crop.title}
        />
      ))}
    </div>
  );
};

export default Crops;
