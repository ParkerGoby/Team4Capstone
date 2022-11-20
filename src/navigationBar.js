import { Link } from 'react-router-dom';



export function NavigationBar() {
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

    {/* Removing these for now, since we have them twice on the navbar.
                    <li className="nav-item">
                        <a className="nav-link active " aria-current="page"><Link style={{color: 'white',textDecoration: 'none' }} to="/newRegister"><li>Register</li></Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/login">Login</Link></a>
                    </li>
    */}
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/category">Categories</Link></a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/create">Create-Record</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/recordList">DB Records</Link></a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/guidebook">Guidebooks</Link></a>
                    </li>
                </ul>
                
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                        <a className="nav-link" aria-current="page"><Link style={{color: 'white',textDecoration: 'none' }} to="/newRegister"><li>Register</li></Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link style={{color: 'white',textDecoration: 'none' }} to="/login">Login</Link></a>
                    </li>
            </ul>

            {/*
            <form className="d-flex justify-content-end">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form> */}
        </div>
        
        </nav>
)
}
export default NavigationBar