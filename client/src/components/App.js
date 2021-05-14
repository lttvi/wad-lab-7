import { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import '../styles/style.css';

import Login from './Login'
import CourseRegister from './CourseRegister'
import UserInfo from './UserInfo'

function App() {
	const [_userID, setID] = useState('');

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" 			component={() => {return (<Login userID={_userID} idSetter={setID}/>)}}/>
				<Route path="/registerCourse" 	component={() => {return (<CourseRegister userID={_userID} />) }}/>
				<Route path="/info" 			component={() => {return (<UserInfo userID={_userID} />) }} />
				<Route path="/"					render={() => 
				<div className='login'>
					<div className='heading'>
						<h2>Login to continue</h2>
						<br/>
						<Link to='/login'>Login</Link>
					</div>
				</div>
				}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
