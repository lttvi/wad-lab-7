//import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import CourseRegister from './CourseRegister';
import UserInfo from './UserInfo';


function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Login}/>
			<Route exact path="/course-register" component={CourseRegister}/>
			<Route exact path="/user-info" component={UserInfo}/>
		</BrowserRouter>
	);
}


/*
function App() {
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
    <div className="App">
      <div className="Login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" onChange={(e) => {
          setUserName(e.target.value);
        }} /><br></br>
        <input type="password" placeholder="Password" onChange={(e) => {
          setPassword(e.target.value);
        }} />
        <br></br>
        <button onClick={login} >Login</button>
      </div>
    </div>
  );
}
*/

export default App;
