import React, { useState, useEffect } from 'react';
import { storage } from "../firebase"
import '../styles/Images.css';
import ImageCard from './venta.component';

const ImageGallery = (props) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [documentIds, setDocumentIds] = useState([]);

  useEffect(() => {
    const fetchImageUrlsAndIds = async () => {
      const urls = [];
      const ids = [];
      const imagesRef = storage.ref('images');
      const images = await imagesRef.listAll();

      for (const image of images.items) {
        const url = await image.getDownloadURL();
        const id = image.name;
        urls.push(url);
        ids.push(id);
      }

      setImageUrls(urls);
      setDocumentIds(ids);
    };

    fetchImageUrlsAndIds();
  }, []);

  return (
    <div className="image-gallery">
      {imageUrls.map((url, index) => (
        <ImageCard imageUrl={url} key={url} id={documentIds[index]} email={props.email} />
      ))}
    </div>
  );
};

export default ImageGallery;
