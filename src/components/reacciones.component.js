import React from 'react';
import '../styles/clip.css'
import KafkaService from "../services/kakfa.service";


const ReactionsComponent = ({ reactionsCount, setReactionsCount }) => {
  const handleReactionClick = () => {
    setReactionsCount(reactionsCount + 1);
  };

  function saveLike(e, status) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction("i-love-adsoftsito");
    e.preventDefault();
}


  return (
    <div>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 'like');
    }} className='reaction-like'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 'love');
    }} className='reaction-love'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 'haha');
    }} className='reaction-haha'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 'wow');
    }} className='reaction-wow'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 'angry');
    }} className='reaction-angry'></button>
  </div>

  );
};

export default ReactionsComponent;
