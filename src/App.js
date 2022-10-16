import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './slider.css';
import './category.css'
import NavigationBar from './navigationBar';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';
import Category from './category.js';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavigationBar />
				<Routes>
					<Route exact path='/' element={<Home />}> </Route>
					<Route exact path='/register' element={<Register />}> </Route>
					<Route exact path='/login' element={<Login />}> </Route>
					<Route exact path='/category' element={<Category />}> </Route>
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