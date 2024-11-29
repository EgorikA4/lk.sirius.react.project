import React from "react";

const AuthPage = () => {
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            console.log('Форма не отправлена');
        }}>
            <button type='submit'>Отправить</button>
        </form> 
    )
}

export default AuthPage;