import React from 'react';
import '../styles/clip.css'

const ReactionsComponent = ({ reactionsCount, setReactionsCount }) => {
  const handleReactionClick = () => {
    setReactionsCount(reactionsCount + 1);
  };

  return (
    <div>
      <button onClick={handleReactionClick} className='reaction-like'></button>
      <button onClick={handleReactionClick} className='reaction-love'></button>
      <button onClick={handleReactionClick} className='reaction-haha'></button>
      <button onClick={handleReactionClick} className='reaction-wow'></button>
      <button onClick={handleReactionClick} className='reaction-angry'></button>
    </div>
  );
};

export default ReactionsComponent;