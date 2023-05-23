import React from "react";
import '../styles/clip.css'
import kafkaService from "../services/kakfa.service";

function ReactionsComponent() {
  function saveLike(e, status) {
  
     let data = {
       id: 0,
       status: status
     };
  
     console.log(JSON.stringify(data));
  
     kafkaService.reaction("i-love-adsoftsito");
     e.preventDefault();
 }

  return (
    <div class="reactions">
      <div class="reaction-like" onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction-love"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction-haha"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction-wow"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction-sad"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction-angry"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
    </div>
  );
}

export default ReactionsComponent;