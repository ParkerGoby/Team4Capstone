import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";



var token;
const userQuery = sessionStorage.getItem("token");
var obj;



 async function profileGrab() {

  // When a post request is sent to the create url, we'll add a new record to the database.


  await fetch("http://localhost:5000/login/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: userQuery
  })
  .then(res => res.json())
  .then(data => {
    obj = data;
  })
  .then(() => {
    console.log(obj);
   })
  .catch(error => {
    window.alert(error);
    return;
  });

const unameRaw=JSON.stringify(obj.uName);
const unameQuotes = unameRaw.replaceAll('"', '');
const schoolRaw=JSON.stringify(obj.uSchool);
const schoolQuotes = schoolRaw.replaceAll('"', '');


sessionStorage.setItem('uName',unameQuotes);
sessionStorage.setItem('schoolName',schoolQuotes);
sessionStorage.setItem('addition1',JSON.stringify(obj.addition.addition1));
sessionStorage.setItem('addition2',JSON.stringify(obj.addition.addition2));
sessionStorage.setItem('addition3',JSON.stringify(obj.addition.addition3));
sessionStorage.setItem('addition4',JSON.stringify(obj.addition.addition4));
sessionStorage.setItem('addition5',JSON.stringify(obj.addition.addition5));
sessionStorage.setItem('addition6',JSON.stringify(obj.addition.addition6));
sessionStorage.setItem('subtraction1',JSON.stringify(obj.subtraction.subtraction1));
sessionStorage.setItem('subtraction2',JSON.stringify(obj.subtraction.subtraction2));
sessionStorage.setItem('subtraction3',JSON.stringify(obj.subtraction.subtraction3));
sessionStorage.setItem('subtraction4',JSON.stringify(obj.subtraction.subtraction4));
sessionStorage.setItem('subtraction5',JSON.stringify(obj.subtraction.subtraction5));
sessionStorage.setItem('subtraction6',JSON.stringify(obj.subtraction.subtraction6));
sessionStorage.setItem('multiplication1',JSON.stringify(obj.multiplication.multiplication1));
sessionStorage.setItem('multiplication2',JSON.stringify(obj.multiplication.multiplication2));
sessionStorage.setItem('multiplication3',JSON.stringify(obj.multiplication.multiplication3));
sessionStorage.setItem('multiplication4',JSON.stringify(obj.multiplication.multiplication4));
sessionStorage.setItem('multiplication5',JSON.stringify(obj.multiplication.multiplication5));
sessionStorage.setItem('multiplication6',JSON.stringify(obj.multiplication.multiplication6));
sessionStorage.setItem('division1',JSON.stringify(obj.division.division1));
sessionStorage.setItem('division2',JSON.stringify(obj.division.division2));
sessionStorage.setItem('division3',JSON.stringify(obj.division.division3));
sessionStorage.setItem('division4',JSON.stringify(obj.division.division4));
sessionStorage.setItem('division5',JSON.stringify(obj.division.division5));
sessionStorage.setItem('division6',JSON.stringify(obj.division.division6));
sessionStorage.setItem('multiplication',JSON.stringify(obj.multiplication));
sessionStorage.setItem('subtraction',JSON.stringify(obj.subtraction));
sessionStorage.setItem('division',JSON.stringify(obj.division));



window.location.reload(false);


}

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
                        <Link className='nav-link' style={{color: 'white',textDecoration: 'none' }} to="/guidebook">Guidebooks</Link>
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