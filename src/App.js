import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src = {require("./assets/rocket.png")} alt='Astro-Learn Rocket'></img>
					</div>
					<li><a href="#tutorial">Tutorial</a></li>
					<li><a href="#quizzes">Quizzes</a></li>
					<li><a href='#about'>About us</a></li>
				</ul>
				<div class= "rightNav">
				<ul class="nav-list">
				<li><a href='#profile'>Profile</a></li>
				</ul>
				</div>
				{
					/* Search bar here if we want it later
					<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
					*/
				}
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Welcome to Astro-Learn!
						</h1>
						<p class="text-small">
							Sample text here!
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big">
							About Us
						</h1>
						<p class="text-small">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App
