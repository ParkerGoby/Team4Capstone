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
import Multiplication from './categoryTypesMath/multiplication.js';
import Addition from './categoryTypesMath/addition.js';
import Division from './categoryTypesMath/division.js';
import Subtraction from './categoryTypesMath/subtraction.js';
import Fractions from './categoryTypesMath/fractions.js';
import Level_1 from './question1.js';
import NewRegister from './newRegister.js';
import Edit from './components/edit';
import Create from './components/create';
import Footer from './footer';
import Record_list from './components/recordList';
import LevelHome from './levels/level-home.js';
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
					<Route exact path='/counting' element={<Counting />}> </Route>
					<Route exact path='/multiplication' element={<Multiplication />}> </Route>
					<Route exact path='/addition' element={<Addition />}> </Route>
					<Route exact path='/division' element={<Division />}> </Route>
					<Route exact path='/subtraction' element={<Subtraction />}> </Route>
					<Route exact path='/fractions' element={<Fractions />}> </Route>
                    <Route exact path='/question1' element={<Level_1 />}> </Route>
					<Route exact path='/newregister' element={<NewRegister />}> </Route>
					<Route exact path='/create' element={<Create />}> </Route>
					<Route exact path='/edit:id' element={<Edit />}> </Route>
					<Route exact path='/recordList' element={<Record_list />}> </Route>
					<Route exact path='/levels/level-home' element={<LevelHome/>}> </Route>
					<Route exact path='/guidebook/addition/1' element={<Level1GuideAddition/>}> </Route>
					<Route exact path='/guidebook/addition/2' element={<Level2GuideAddition/>}> </Route>
					<Route exact path='/guidebook/addition/3' element={<Level3GuideAddition/>}> </Route>
					<Route exact path='/guidebook/multiplication/1' element={<Level1GuideMultiplication/>}> </Route>
					<Route exact path='/guidebook/multiplication/2' element={<Level2GuideMultiplication/>}> </Route>
					<Route exact path='/guidebook/multiplication/3' element={<Level3GuideMultiplication/>}> </Route>
					<Route exact path='/guidebook' element={<GuidebookHome/>}> </Route>
					
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