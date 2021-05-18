import React, { useState } from "react";
import Axios from 'axios';
import './index.css';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            userName: userName,
            password: password,
        }).then((Response) => {
            console.log(Response);
        });
    };
    return (
        <body>
            <div className="Login">
                <h1 sytle="text-align:center">Student Login</h1>
                <input type="text" placeholder="Username" onChange={(e) => {
                    setUserName(e.target.value);
                }} /><br></br>
                <input type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <br></br>
                <button onClick={login} >Login</button>
            </div>
        </body>
    );
}

export default Login;
