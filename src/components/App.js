import React from "react";
import "../index.css";
import Header from "./Header.js";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ link: '', name: '' })
    }

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
            </div>

            <PopupWithForm  //   Попап редактирования профиля пользователя
                name="user"
                title="Редактировать профиль"
                button="save"
                text="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    className="popup__input"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="error" id="name-error"></span>
                <input
                    type="text"
                    id="job"
                    name="job"
                    placeholder="О себе"
                    className="popup__input"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="error" id="job-error"></span>
            </PopupWithForm>
            <PopupWithForm //Попап добавления фотографий
                name="photo"
                title="Новое место"
                button="create"
                text="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    type="text"
                    id="photo-name"
                    name="photo-name"
                    placeholder="Название"
                    className="popup__input"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span className="error" id="photo-name-error"></span>
                <input
                    type="url"
                    id="link"
                    name="link"
                    placeholder="Ссылка на картинку"
                    className="popup__input"
                    required
                />
                <span className="error" id="link-error"></span>
            </PopupWithForm>
            <PopupWithForm //Попап подтверждения удаления фотографии
                name="delete"
                title="Вы уверены?"
                button="delete"
                text="Да"
            />
            <PopupWithForm //Попап редактирования аватара пользователя
                name="avatar"
                title="Обновить аватар"
                button="update"
                text="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    type="url"
                    id="link-avatar"
                    name="avatar"
                    placeholder="Ссылка на аватар"
                    className="popup__input"
                    required
                />
                <span className="error" id="link-avatar-error"></span>
            </PopupWithForm>
            <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;
