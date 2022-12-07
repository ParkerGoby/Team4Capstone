import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { profileGrab } from './profile';


var token;

export function NavigationBar() {
    const navigate = useNavigate();
    if (sessionStorage.getItem("token") === null) {
        
      
    return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
        <Link style={{color: 'white',textDecoration: 'none' }} to="/"><a className="navbar-brand text-white" >
                 <img src={require("./assets/rocket.png")} alt='Astro-Learn Rocket' width="50" height="50" ></img>
                Astro-Learn
            </a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/category">Categories</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook">Guidebooks</Link></a>
                    </li>
                </ul>
                
            </div>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                        <a className="nav-link" aria-current="page"><Link style={{color: 'white',textDecoration: 'none' }} to="/register"><li>Register</li></Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/login">Login</Link></a>
                    </li>
            </ul>


        </div>
        
        </nav>
)
}

else{
    function logOut() {
        sessionStorage.clear(token)
        window.location.reload();
        navigate("/");
    }    
return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand text-white" style={{color: 'white',textDecoration: 'none' }} to="/">
                 <img src={require("./assets/rocket.png")} alt='Astro-Learn Rocket' width="50" height="50" ></img>
                Astro-Learn
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' style={{color: 'white',textDecoration: 'none' }} to="/category">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={{color: 'white',textDecoration: 'none' }} to="/guidebook/guidebook">Guidebooks</Link>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' style={{color: 'white',textDecoration: 'none' }}  onClick={profileGrab} to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={{color: 'white',textDecoration: 'none' }} onClick={logOut}>Logout</Link>
                    </li>
            </ul>
        </div>  
    </nav>
)
}}



export default NavigationBar