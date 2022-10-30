import { Link } from 'react-router-dom';



export function NavigationBar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div class="container-fluid">
        <Link style={{color: 'white',textDecoration: 'none' }} to="/"><a class="navbar-brand text-white" >
                 <img src={require("./assets/rocket.png")} alt='Astro-Learn Rocket' width="50" height="50" ></img>
                Astro-Learn
            </a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active " aria-current="page"><Link style={{color: 'white',textDecoration: 'none' }} to="/register"><li>Register</li></Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/login">Login</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/category">Categories</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/create">Create-Record</Link></a>
                    </li>
                    
            
                </ul>
                
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                        <a class="nav-link" aria-current="page"><Link style={{color: 'white',textDecoration: 'none' }} to="/register"><li>Register</li></Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/login">Login</Link></a>
                    </li>
            </ul>

            {/*
            <form class="d-flex justify-content-end">
                <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form> */}
        </div>
        
        </nav>
)
}
export default NavigationBar