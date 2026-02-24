import React from "react";
import "./Banner.css";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière Kasa" className="banner-img" />
      <div className="banner-overlay"></div>
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

export default Banner;
