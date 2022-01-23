import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
   const { isOpen, onClose, onUpdateAvatar } = props;
   const avatarRef = React.useRef();

   React.useEffect(() => {
      avatarRef.current.value = ""
   }, [isOpen])

   function handleSubmit(event) {
      event.preventDefault();
      onUpdateAvatar({
         avatar: avatarRef.current.value
      })
   }

   return (
      <PopupWithForm //Попап редактирования аватара пользователя
         name="avatar"
         title="Обновить аватар"
         button="update"
         text="Сохранить"
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input
            type="url"
            id="link-avatar"
            name="avatar"
            placeholder="Ссылка на аватар"
            className="popup__input"
            required
            ref={avatarRef}
         />
         <span className="error" id="link-avatar-error"></span>
      </PopupWithForm>
   )
};

export default EditAvatarPopup;