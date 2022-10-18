import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './slider.css';
import './category.css'
import NavigationBar from './navigationBar';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';
import Category from './category.js';
import Counting from './categoryTypesMath/counting.js';
import Multiplication from './categoryTypesMath/multiplication.js';
import Addition from './categoryTypesMath/addition.js';
import Division from './categoryTypesMath/division.js';
import Subtraction from './categoryTypesMath/subtraction.js';
import Fractions from './categoryTypesMath/fractions.js';
import Level_1 from './question1.js';



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
					<Route exact path='/counting' element={<Counting />}> </Route>
					<Route exact path='/multiplication' element={<Multiplication />}> </Route>
					<Route exact path='/addition' element={<Addition />}> </Route>
					<Route exact path='/division' element={<Division />}> </Route>
					<Route exact path='/subtraction' element={<Subtraction />}> </Route>
					<Route exact path='/fractions' element={<Fractions />}> </Route>
					<Route exact path='/question1' element={<Level_1 />}> </Route>
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