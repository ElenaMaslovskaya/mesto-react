import React from "react";
import "../index.css";
import Header from "./Header.js";
import Footer from "./Footer";

function App() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <main class="content">
                    <section class="profile">
                        <div class="profile__avatar-overlay">
                            <img class="profile__avatar" alt="Аватар пользователя" src="./images/rus-deutsch.jpg" />
                            <button class="profile__edit-button profile__edit-button_avatar" id="avatar-edit"></button>
                        </div>
                        <div class="profile__info">
                            <button type="button" class="profile__edit-button" id="profile-edit"></button>
                            <h1 class="profile__username"></h1>
                            <p class="profile__userjob"></p>
                        </div>
                        <button type="button" class="profile__add-button"></button>
                    </section>

                    <!--Карточки с фотографиями-->
                    <section class="elements">
                    </section>

                </main>
                <Footer />
            </div>

            <!-- Попап редактирования профиля пользователя -->

            <section class="popup" id="user-popup">
                <div class="popup__container popup__container_user">
                    <button type="button" class="popup__close"></button>
                    <h2 class="popup__title">Редактировать профиль</h2>
                    <form class="popup__form" action="#" id="user-form" novalidate>
                        <input type="text" name="name" class="popup__input" placeholder="Имя" id="name" required minlength="2"
                            maxlength="40">
                            <span class="error" id="name-error"></span>
                            <input type="text" name="job" class="popup__input" placeholder="О себе" id="job" required minlength="2"
                                maxlength="200">
                                <span class="error" id="job-error"></span>
                                <button type="submit" class="popup__button" id="user-button" disabled>Сохранить</button>
                            </form>
                        </div>
                    </section>

                    <!-- Попап редактирования аватара пользователя-->

                    <section class="popup" id="avatar-popup">
                        <div class="popup__container popup__container_avatar">
                            <button type="button" class="popup__close"></button>
                            <h2 class="popup__title">Обновить аватар</h2>
                            <form class="popup__form popup__form_avatar" action="#" id="avatar-form" novalidate>
                                <input type="url" name="avatar" class="popup__input" placeholder="Ссылка на аватар" id="link-avatar"
                                    required>
                                    <span class="error" id="link-avatar-error"></span>
                                    <button type="submit" class="popup__button" id="avatar-button" disabled>Сохранить</button>
                            </form>
                        </div>
                    </section>
                    <!-- Попап добавления фотографий-->

                    <section class="popup" id="photo-popup">
                        <div class="popup__container popup__container_photo">
                            <button type="button" class="popup__close"></button>
                            <h2 class="popup__title">Новое место</h2>
                            <form class="popup__form" action="#" id="photo-form" novalidate>
                                <input type="text" name="photo-name" class="popup__input" placeholder="Название" id="photo-name"
                                    required minlength="2" maxlength="30">
                                    <span class="error" id="photo-name-error"></span>
                                    <input type="url" name="link" class="popup__input" placeholder="Ссылка на картинку" id="link" required>
                                        <span class="error" id="link-error"></span>
                                        <button type="submit" class="popup__button" id="photo-button" disabled>Создать</button>
                                    </form>
                                </div>
                            </section>

                            <!--Попап просмотра фотографии-->

                            <section class="popup" id="image-popup">
                                <div class="popup__container popup__container_image">
                                    <figure class="popup__figure">
                                        <button type="button" class="popup__close"></button>
                                        <img class="popup__image"
                                            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt="...">
                                            <figcaption class="popup__caption">...</figcaption>
                                    </figure>
                                </div>
                            </section>

                            <!--Попап подтверждения удаления фотографии-->
                            <section class="popup" id="delete-popup">
                                <div class="popup__container popup__container_delete">
                                    <button type="button" class="popup__close"></button>
                                    <h2 class="popup__title">Вы уверены?</h2>
                                    <form>
                                        <button type="submit" class="popup__button popup__button_delete" id="delete-button">Да</button>
                                    </form>
                                </div>
                            </section>

                            <!--Шаблон карточки-->

                            <template class="template-card">
                                <div class="element">
                                    <img class="element__image" src="#" alt="">
                                        <button class="element__remove" type="button"></button>
                                        <div class="element__like-container">
                                            <h2 class="element__name"></h2>
                                            <div class="element__likes">
                                                <button type="button" class="element__like-icon"></button>
                                                <span class="element__likes-counter">0</span>
                                            </div>
                                        </div>
                                </div>
                            </template>
    </div>
    );
} 

export default App;
