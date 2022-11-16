import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./slider.css";
import "./category.css";
import NavigationBar from "./navigationBar";
import Footer from "./footer";
import Home from "./home.js";
import Login from "./login.js";
import Register from "./register.js";
import Category from "./category.js";
import CategoryMath from "./categoryTypes/categoryMath";
import LevelHome from "./levels/level-home.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/category" element={<Category />}></Route>
          <Route exact path="/categoryTypes/categoryMath" element={<CategoryMath />}></Route>
          <Route exact path="/levels/level-home" element={<LevelHome />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
