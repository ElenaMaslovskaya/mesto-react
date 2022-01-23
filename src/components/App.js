import React from "react";
import Header from "./Header.js";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/Api";
import "../index.css";

function App() {
    //создаем стейты
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    //Получить данные пользователя
    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(`Ошибка при загрузке информации о пользователе: ${err}`);
            });
        api.getInitialCards()
            .then((cards) => {
                setCards(cards)
            })
            .catch((err) => {
                console.log(`Ошибка при загрузке фотографий: ${err}`);
            })
    }, [])

    //Функция поставить/снять лайк карточки
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api
            .changeCardLike(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(`Ошибка при попытке поставить/снять лайк: ${err}`);
            })
    }

    //Функция удаления карточки
    function handleCardDelete(card) {
        api
            .deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((item) => item._id !== card._id);
                setCards(newCards);
            })
            .catch((err) => {
                console.log(`Ошибка при удалении карточки: ${err}`)
            });
    }

    function handleUpdateUser(user) {
        api.updateUserInfo(user)
            .then((user) => {
                setCurrentUser(user);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка при обновлении информации о пользователе: ${err}`)
            });
    };

    function handleUpdateAvatar(avatar) {
        api.updateAvatar(avatar)
            .then((avatar) => {
                setCurrentUser(avatar);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка при обновлении аватара пользователя: ${err}`)
            });
    };

    function handleAddPlaceSubmit(newCard) {
        api.addNewCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка при добавлении новой фотографии: ${err}`)
            });
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    };

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    };

    function handleCardClick(card) {
        setSelectedCard(card);
    };


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ link: '', name: '' });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__container">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onEditAvatar={handleEditAvatarClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    />
                    <Footer />
                </div>

                <EditProfilePopup //Попап редактирования профиля
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />

                <AddPlacePopup //Попап добавления фотографий
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                />
                <PopupWithForm //Попап подтверждения удаления фотографии
                    name="delete"
                    title="Вы уверены?"
                    button="delete"
                    text="Да"
                />

                <EditAvatarPopup //Попап редактирования аватара пользователя
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;
