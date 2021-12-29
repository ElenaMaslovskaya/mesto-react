import React from "react";

function Card(card) {
   function handleClick() {
      card.onCardClick(card.card);
   }

   return (
      <div className="element">
         <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
            <button className="element__remove" type="button"></button>
            <div className="element__like-container">
               <h2 className="element__name">{card.name}</h2>
               <div className="element__likes">
                  <button type="button" className="element__like-icon"></button>
                  <span className="element__likes-counter">{card.likes}</span>
               </div>
            </div>
      </div>
   )
}

export default Card;