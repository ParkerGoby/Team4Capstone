import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './slider.css';
import './category.css'
import NavigationBar from './navigationBar';
import Slider from './slider.js';
import Login from './login.js';
import Register from './register.js';
import Category from './category.js';

//Math category types:
import Addition from './mathSubjects/addition.js';
import Subtraction from './mathSubjects/subtraction.js';
import Multiplication from './mathSubjects/multiplication.js';
import Division from './mathSubjects/division.js';

import Level_1 from './question1.js';
import Edit from './components/edit';
import Create from './components/create';
import Footer from './footer';
import Record_list from './components/recordList';

//Addition Quizzes:
import AdditionQuiz1 from './levels/quizzes/additionQuizzes/addQuiz1.js';
import AdditionQuiz2 from './levels/quizzes/additionQuizzes/addQuiz2.js';
import AdditionQuiz3 from './levels/quizzes/additionQuizzes/addQuiz3.js';
import AdditionQuiz4 from './levels/quizzes/additionQuizzes/addQuiz4.js';
import AdditionQuiz5 from './levels/quizzes/additionQuizzes/addQuiz5.js';
import AdditionQuiz6 from './levels/quizzes/additionQuizzes/addQuiz6.js';

//Subtraction Quizzes:
import SubtractionQuiz1 from './levels/quizzes/subtractionQuizzes/subQuiz1.js';
import SubtractionQuiz2 from './levels/quizzes/subtractionQuizzes/subQuiz2.js';
import SubtractionQuiz3 from './levels/quizzes/subtractionQuizzes/subQuiz3.js';
import SubtractionQuiz4 from './levels/quizzes/subtractionQuizzes/subQuiz4.js';
import SubtractionQuiz5 from './levels/quizzes/subtractionQuizzes/subQuiz5.js';
import SubtractionQuiz6 from './levels/quizzes/subtractionQuizzes/subQuiz6.js';

//Multiplication Quizzes:
import MultiplicationQuiz1 from './levels/quizzes/multiplicationQuizzes/multQuiz1.js';
import MultiplicationQuiz2 from './levels/quizzes/multiplicationQuizzes/multQuiz2.js';
import MultiplicationQuiz3 from './levels/quizzes/multiplicationQuizzes/multQuiz3.js';
import MultiplicationQuiz4 from './levels/quizzes/multiplicationQuizzes/multQuiz4.js';
import MultiplicationQuiz5 from './levels/quizzes/multiplicationQuizzes/multQuiz5.js';
import MultiplicationQuiz6 from './levels/quizzes/multiplicationQuizzes/multQuiz6.js';

//Division Quizzes:
import DivisionQuiz1 from './levels/quizzes/divisionQuizzes/divisionQuiz1.js';
import DivisionQuiz2 from './levels/quizzes/divisionQuizzes/divisionQuiz2.js';
import DivisionQuiz3 from './levels/quizzes/divisionQuizzes/divisionQuiz3.js';
import DivisionQuiz4 from './levels/quizzes/divisionQuizzes/divisionQuiz4.js';
import DivisionQuiz5 from './levels/quizzes/divisionQuizzes/divisionQuiz5.js';
import DivisionQuiz6 from './levels/quizzes/divisionQuizzes/divisionQuiz6.js';

//Guidebook:
import Level1GuideAddition from './guidebook/addition/level1guidebook';
import Level2GuideAddition from './guidebook/addition/level2guidebook';
import Level3GuideAddition from './guidebook/addition/level3guidebook';
import Level1GuideMultiplication from './guidebook/multiplication/level1guidebook';
import Level2GuideMultiplication from './guidebook/multiplication/level2guidebook';
import Level3GuideMultiplication from './guidebook/multiplication/level3guidebook';
import GuidebookHome from './guidebook/guidebook';
import Level1GuideFraction from './guidebook/fractions/level1guidebook';
import Level1GuideSubtraction from './guidebook/subtraction/level1guidebook';
import Level1GuideDivision from './guidebook/division/level1guidebook'
import Level1GuideCounting from './guidebook/counting/level1guidebook'
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
                    <Route exact path='/question1' element={<Level_1 />}> </Route>
					<Route exact path='/create' element={<Create />}> </Route>
					<Route exact path='/edit:id' element={<Edit />}> </Route>
					<Route exact path='/recordList' element={<Record_list />}> </Route>
					<Route exact path='/addition-levels' element={<Addition />}> </Route>
					<Route exact path='/subtraction-levels' element={<Subtraction />}> </Route>
					<Route exact path='/multiplication-levels' element={<Multiplication />}> </Route>
					<Route exact path='/division-levels' element={<Division />}> </Route>
					<Route exact path='/additionQuiz1' element={<AdditionQuiz1/>}> </Route>
					<Route exact path='/additionQuiz2' element={<AdditionQuiz2/>}> </Route>
					<Route exact path='/additionQuiz3' element={<AdditionQuiz3/>}> </Route>
					<Route exact path='/additionQuiz4' element={<AdditionQuiz4/>}> </Route>
					<Route exact path='/additionQuiz5' element={<AdditionQuiz5/>}> </Route>
					<Route exact path='/additionQuiz6' element={<AdditionQuiz6/>}> </Route>
					<Route exact path='/subtractionQuiz1' element={<SubtractionQuiz1/>}> </Route>
					<Route exact path='/subtractionQuiz2' element={<SubtractionQuiz2/>}> </Route>
					<Route exact path='/subtractionQuiz3' element={<SubtractionQuiz3/>}> </Route>
					<Route exact path='/subtractionQuiz4' element={<SubtractionQuiz4/>}> </Route>
					<Route exact path='/subtractionQuiz5' element={<SubtractionQuiz5/>}> </Route>
					<Route exact path='/subtractionQuiz6' element={<SubtractionQuiz6/>}> </Route>
					<Route exact path='/multiplicationQuiz1' element={<MultiplicationQuiz1/>}> </Route>
					<Route exact path='/multiplicationQuiz2' element={<MultiplicationQuiz2/>}> </Route>
					<Route exact path='/multiplicationQuiz3' element={<MultiplicationQuiz3/>}> </Route>
					<Route exact path='/multiplicationQuiz4' element={<MultiplicationQuiz4/>}> </Route>
					<Route exact path='/multiplicationQuiz5' element={<MultiplicationQuiz5/>}> </Route>
					<Route exact path='/multiplicationQuiz6' element={<MultiplicationQuiz6/>}> </Route>
					<Route exact path='/divisionQuiz1' element={<DivisionQuiz1/>}> </Route>
					<Route exact path='/divisionQuiz2' element={<DivisionQuiz2/>}> </Route>
					<Route exact path='/divisionQuiz3' element={<DivisionQuiz3/>}> </Route>
					<Route exact path='/divisionQuiz4' element={<DivisionQuiz4/>}> </Route>
					<Route exact path='/divisionQuiz5' element={<DivisionQuiz5/>}> </Route>
					<Route exact path='/divisionQuiz6' element={<DivisionQuiz6/>}> </Route>
					<Route exact path='/guidebook/addition/1' element={<Level1GuideAddition/>}> </Route>
					<Route exact path='/guidebook/addition/2' element={<Level2GuideAddition/>}> </Route>
					<Route exact path='/guidebook/addition/3' element={<Level3GuideAddition/>}> </Route>
					<Route exact path='/guidebook/multiplication/1' element={<Level1GuideMultiplication/>}> </Route>
					<Route exact path='/guidebook/multiplication/2' element={<Level2GuideMultiplication/>}> </Route>
					<Route exact path='/guidebook/multiplication/3' element={<Level3GuideMultiplication/>}> </Route>
					<Route exact path='/guidebook/guidebook' element={<GuidebookHome/>}> </Route>
					<Route exact path='/guidebook/fractions/1' element={<Level1GuideFraction/>}> </Route>
					<Route exact path='/guidebook/division/1' element={<Level1GuideDivision/>}> </Route>
					<Route exact path='/guidebook/subtraction/1' element={<Level1GuideSubtraction/>}> </Route>
					<Route exact path='/guidebook/counting/1' element={<Level1GuideCounting/>}> </Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App