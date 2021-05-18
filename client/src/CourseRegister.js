import React, { useState } from "react";
import Axios from 'axios';
import './index.css';

function CourseRegister() {
    const showAllCourse = () => {

    }
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const courseRegister = () => {
        Axios.post('http://localhost:3001/course-register', {
            userName: userName,
            password: password,
        }).then((Response) => {
            console.log(Response);
        });
    };
    return (
        <body>
            <p>Show list of available courses</p>
        </body>
    );
}

export default CourseRegister;
