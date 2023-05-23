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
      saveLike(e, 1);
    }} className='reaction-like'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 1);
    }} className='reaction-love'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 1);
    }} className='reaction-haha'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 1);
    }} className='reaction-wow'></button>
    <button onClick={(e) => {
      e.preventDefault();
      handleReactionClick();
      saveLike(e, 1);
    }} className='reaction-angry'></button>
  </div>

  );
};

export default ReactionsComponent;
