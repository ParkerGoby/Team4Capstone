import { Link } from 'react-router-dom';

export function NavigationBar() {
    return (
        <nav class="navbar background">
            <ul class="nav-list">
                <div class="logo">
                    <img src={require("./assets/rocket.png")} alt='Astro-Learn Rocket'></img>
                </div>
                <Link to="/register"><li>Register</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <li><a href="#tutorial">Tutorial</a></li>
                <li><a href="#quizzes">Quizzes</a></li>
                <li><a href='#about'>About us</a></li>
            </ul>
            <div class="rightNav">
                <ul class="nav-list">
                    <li><a href='#profile'>Profile</a></li>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </div>
            {/*
					 Search bar here if we want it later
					<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
					*/}

        </nav>
    )
}
export default NavigationBar