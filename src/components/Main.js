import React from "react";

function Main() {
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
         </section>

      </main>
   )
}

export default Main