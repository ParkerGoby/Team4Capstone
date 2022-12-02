import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './slider.css';
import './category.css'
import NavigationBar from './navigationBar';
import Slider from './slider.js';
import Login from './login.js';
import Register from './register.js';
import Category from './category.js';
import Counting from './categoryTypesMath/counting.js';
import Addition from './categoryTypesMath/addition.js';
import Subtraction from './categoryTypesMath/subtraction.js';
import Multiplication from './categoryTypesMath/multiplication.js';
import Division from './categoryTypesMath/division.js';
import Fractions from './categoryTypesMath/fractions.js';
import Level_1 from './question1.js';
import Edit from './components/edit';
import Create from './components/create';
import Footer from './footer';
import Record_list from './components/recordList';

//Quizzes:
import AdditionQuiz from './levels/quizzes/additionQuiz.js';
import SubtractionQuiz from './levels/quizzes/subtractionQuiz.js';
import MultiplicationQuiz from './levels/quizzes/multiplicationQuiz.js';
import DivisionQuiz from './levels/quizzes/divisionQuiz.js';
import FractionsQuiz from './levels/quizzes/fractionsQuiz.js';

//Guidebook:
import GuidebookHome from './guidebook/guidebook';
import AdditionGuide from './guidebook/addition/level1guidebook';
import MultiplicationGuide from './guidebook/multiplication/level1guidebook';
import SubtractionGuide from './guidebook/subtraction/level1guidebook';
import DivisionGuide from './guidebook/division/level1guidebook'

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavigationBar />
				<Routes>
					<Route exact path='/' element={<Slider />}> </Route>
					<Route exact path='/register' element={<Register />}> </Route>
					<Route exact path='/login' element={<Login />}> </Route>
					<Route exact path='/category' element={<Category />}> </Route>
					<Route exact path='/counting' element={<Counting />}> </Route>
					<Route exact path='/addition' element={<Addition />}> </Route>
					<Route exact path='/subtraction' element={<Subtraction />}> </Route>
					<Route exact path='/multiplication' element={<Multiplication />}> </Route>
					<Route exact path='/division' element={<Division />}> </Route>
					<Route exact path='/fractions' element={<Fractions />}> </Route>
                    <Route exact path='/question1' element={<Level_1 />}> </Route>
					<Route exact path='/create' element={<Create />}> </Route>
					<Route exact path='/edit:id' element={<Edit />}> </Route>
					<Route exact path='/recordList' element={<Record_list />}> </Route>
					<Route exact path='/levels/quizzes/additionQuiz' element={<AdditionQuiz/>}> </Route>
					<Route exact path='/levels/quizzes/subtractionQuiz' element={<SubtractionQuiz/>}> </Route>
					<Route exact path='/levels/quizzes/multiplicationQuiz' element={<MultiplicationQuiz/>}> </Route>
					<Route exact path='/levels/quizzes/divisionQuiz' element={<DivisionQuiz/>}> </Route>
					<Route exact path='/levels/quizzes/fractionsQuiz' element={<FractionsQuiz/>}> </Route>
					<Route exact path='/guidebook' element={<GuidebookHome/>}> </Route>
					<Route exact path='/guidebook/addition' element={<AdditionGuide/>}> </Route>
					<Route exact path='/guidebook/multiplication' element={<MultiplicationGuide/>}> </Route>
					<Route exact path='/guidebook/division' element={<DivisionGuide/>}> </Route>
					<Route exact path='/guidebook/subtraction' element={<SubtractionGuide/>}> </Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App