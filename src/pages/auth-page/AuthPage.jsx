import React, { useState } from "react";
import { Informer } from '@consta/uikit/Informer';


const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState('');

    const onButtonClick = (evt) => {
        evt.preventDefault();

        if ('' === email) {
            setIsError('Please enter your email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setIsError('Please enter a valid email')
            return
        }

        if ('' === password) {
            setIsError('Please enter a password')
            return
        }

        if (password.length < 7) {
            setIsError('The password must be 8 characters or longer')
            return
        }

        // TODO: redirect
        console.log('Успех!');
    }

    return (
        <form onSubmit={onButtonClick}>
            <label>Enter your email:
                <input 
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />
            </label>
            <br></br>
            <label>Enter your password:
                <input 
                    value={password} 
                    onChange={(ev) => setPassword(ev.target.value)}
                />
            </label> 
            <br></br>
            <br></br>
            { 
                isError !== '' ? <Informer status="alert" view="filled" title="Ошибка" label={isError}/> : undefined
            }
            <br></br>
            <button type='submit'>Отправить</button>
        </form> 
    )
}

export default AuthPage;