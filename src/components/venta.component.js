import React, { useState } from 'react';
import Reactions from './reacciones';
import CommentBox from './coments.component.js';

const ImageCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [reactionsCount, ] = useState(0);

  const handleImageClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="image-card" onClick={handleImageClick}>
      <img src={imageUrl} alt="Imagen" />
      {showDetails && (
        <>
          
         
        </>
      )}
      <div>Cantidad de reacciones: {reactionsCount}</div>
      <Reactions id={props.imageUrl} email={props.email}/>
      <CommentBox/>
    </div>
    
  );
};

export default ImageCard;