import React, { useState } from 'react';
import ReactionsComponent from './reacciones.component.js';
import CommentBox from './coments.component.js';

const ImageCard = ({ imageUrl }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [reactionsCount, setReactionsCount] = useState(0);
  const [commentText, setCommentText] = useState('');

  const handleImageClick = () => {
    setShowDetails(!showDetails);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      // Envía el comentario
      console.log(commentText);
      // Limpia el campo de texto
      setCommentText('');
    }
  };

  return (
    <div className="image-card" onClick={handleImageClick}>
      <img src={imageUrl} alt="Imagen" />
      {showDetails && (
        <>
          <ReactionsComponent
            reactionsCount={reactionsCount}
            setReactionsCount={setReactionsCount}
          />
         
        </>
      )}
      <div>Cantidad de reacciones: {reactionsCount}</div>
      <CommentBox/>
    </div>
    
  );
};

export default ImageCard;