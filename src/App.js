import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './slider.css';
import NavigationBar from './navigationBar';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavigationBar />
				<Routes>
					<Route exact path='/' element={<Home />}> </Route>
					<Route exact path='/register' element={<Register />}> </Route>
					<Route exact path='/login' element={<Login />}> </Route>
				</Routes>
			</BrowserRouter>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App