import React from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main(props) {
   const currentUser = React.useContext(CurrentUserContext);
   const {
      onEditProfile,
      onEditAvatar,
      onAddPlace,
      onCardClick,
      onCardLike,
      onCardDelete,
      cards
   } = props;

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__avatar-overlay">
               <img className="profile__avatar" alt="Аватар пользователя" src={currentUser.avatar} />
               <button className="profile__edit-button profile__edit-button_avatar" id="avatar-edit" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__info">
               <button type="button" className="profile__edit-button" id="profile-edit" onClick={onEditProfile}></button>
               <h1 className="profile__username">{currentUser.name}</h1>
               <p className="profile__userjob">{currentUser.about}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
         </section>
         <section className="elements">
            {cards.map((card) => {
               return (
                  <Card
                     card={card}
                     key={card._id}
                     link={card.link}
                     name={card.name}
                     likes={card.likes.length}
                     onCardClick={onCardClick}
                     onCardLike={onCardLike}
                     onCardDelete={onCardDelete}
                  />
               )
            })
            }
         </section>
      </main>
   );
}

export default Main;