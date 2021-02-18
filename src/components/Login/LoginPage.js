import React, {useState} from 'react';

const LoginPage = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <input type = "text" placeholder = "Username" 
                value = {username} onChange = {(e) => {setUsername(e.target.value)}}>
            </input>
            <input type = "text" placeholder = "Password" 
                value = {password} onChange = {(e) => {setPassword(e.target.value)}}>
            </input>
        </>
    )
}

export default LoginPage