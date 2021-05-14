import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { submitLogin } from '../api/studentAPI';

import '../styles/style.css';

const handleSubmit = (username, password, idSetter, forceUpdate) => {
    console.log(`Logging in as ${username}...`);
    submitLogin(username, password)
    .then(resp => {
        if (resp.success) {
            const id = resp.userID;
            idSetter(id);
            console.log(`Logged in with id ${id}`);
            forceUpdate(true);
        } else {
            console.log('Login error! Please try again!');
        }
    });
}

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [dummy, forceUpdate] = useState(false);

    return props.userID ? (
        <Redirect to='/registerCourse'/>
    ) : (
        <>
            <Helmet>
                <title>Lab 7 - Login</title>
            </Helmet>
            <div className="login">
                <div className="heading">
                    <h2>Log in</h2>
                    <form onSubmit={(event) => {event.preventDefault();handleSubmit(username, password, props.idSetter, forceUpdate)}}>
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="Username" name="usr" onChange={(event) => {setUsername(event.target.value)}}/>
                        </div>

                        <div className="input-group input-group-lg">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="password" className="form-control" placeholder="Password" name="pwd" onChange={(event) => {setPassword(event.target.value)}}/>
                        </div>

                        <button type="submit" className="float">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;