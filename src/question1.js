import { useState } from "react"
import './login.css';
const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = async (e) =>
        e.preventDefault()
    console.log(userName, password)

    return (
        <>
        
        <>

            <div class="title-container">        
            <div class="container-fluid">
            
                <div class="row">
                <div class="col-xs-1 text-center"><h1>What is 2 + 2 = ?</h1></div>
                </div>
            </div>
            </div>
        
        <div class="container-thing">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">123</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">345</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">3</h5>
                        { /* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">4</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                       { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </>
</>
    )
}

export default Login