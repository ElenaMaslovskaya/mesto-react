class Api {
   constructor(config) {
      this._baseUrl = config.baseUrl;
      this._headers = config.headers;
   }

   //Ответ сервера
   _serverResponse(res) {
      if (res.ok) {
         return res.json();
      }
      return Promise.reject(`Ошибка: ${res}`)
   }

   //Получить данные пользователя
   getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
         method: 'GET',
         headers: this._headers
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }

   //Получить карточки
   getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
         method: 'GET',
         headers: this._headers
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }

   //Обновить информацию о пользователе
   updateUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
         method: 'PATCH',
         headers: this._headers,
         body: JSON.stringify({
            name: data.name,
            about: data.about
         })
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }

   // Обновить аватар
   updateAvatar({ avatar }) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
         method: 'PATCH',
         headers: this._headers,
         body: JSON.stringify({
            avatar
         })
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }

   //Добавить новую карточку
   addNewCard(data) {
      console.log(data);
      return fetch(`${this._baseUrl}/cards`, {
         method: 'POST',
         headers: this._headers,
         body: JSON.stringify({
            name: data['photo-name'],
            link: data['link']
         })
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }

   // Удалить карточку
   deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
         method: 'DELETE',
         headers: this._headers,
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }

   //лайки
   changeCardLike(cardId, isLiked) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
         method: (isLiked ? 'PUT' : 'DELETE'),
         headers: this._headers,
      })
         .then((res) => {
            return this._serverResponse(res)
         })
   }
}

const api = new Api({
   baseUrl: "https://nomoreparties.co/v1/cohort-30",
   headers: {
      "Content-Type": "application/json",
      authorization: "eb8cafe8-806f-4128-87f6-a89a8c96159b",
   }
})

export default api;