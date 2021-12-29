import React from "react";
import Card from "./Card.js";
import api from "../utils/Api";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

   const [userInfo, setUserInfo] = React.useState({});
   const [cards, setCards] = React.useState([]);

   React.useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
         .then((data) => {
            setUserInfo({
               userName: data[0].name,
               userDescription: data[0].about,
               userAvatar: data[0].avatar
            });
            setCards(data[1]);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         })
   }, [])

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__avatar-overlay">
               <img className="profile__avatar" alt="Аватар пользователя" src={`${userInfo.userAvatar}`} />
               <button className="profile__edit-button profile__edit-button_avatar" id="avatar-edit" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__info">
               <button type="button" className="profile__edit-button" id="profile-edit" onClick={onEditProfile}></button>
               <h1 className="profile__username">{userInfo.userName}</h1>
               <p className="profile__userjob">{userInfo.userDescription}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
         </section>
         <section class="elements">
            {cards.map((card) => {
               return (
                  <Card
                     key={card.id}
                     link={card.link}
                     name={card.name}
                     likes={card.likes.length}
                     card={card}
                     onCardClick={onCardClick}
                  ></Card>
                  )
               })
            }
         </section>
      </main>
   )
}

export default Main;