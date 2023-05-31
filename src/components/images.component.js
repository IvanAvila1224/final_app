import React, { useState, useEffect } from 'react';
import { storage } from "../firebase"
import '../styles/Images.css';
import ImageCard from './venta.component';

const ImageGallery = (props) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = [];
      const imagesRef = storage.ref('images');
      const images = await imagesRef.listAll();

      for (const image of images.items) {
        const url = await image.getDownloadURL();
        urls.push(url);
      }

      setImageUrls(urls);
    };

    fetchImageUrls();
  }, []);

  return (
    <div className="image-gallery">
      {imageUrls.map((url) => (
        <ImageCard imageUrl={url} key={url}  email={props.email}/>
      ))}
    </div>
  );
};

export default ImageGallery;