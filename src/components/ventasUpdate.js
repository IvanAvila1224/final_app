import React from "react";
import ImageGallery from "./images.component";
import "../styles/App.css";

const Ventas = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div button className="boton-logout" onClick={logout}>
        Logout
      </div>
      <div className="image-gallery">
        <h1>Galería de imágenes</h1>
        <ImageGallery />
      </div>
    </div>
  );
};

export default Ventas;
