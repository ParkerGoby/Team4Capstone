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
            <div class="outside_login_div">
                <div class="inside_login_div">
                    <form onSubmit={userLogin} class="login_form">
                
                    <h2 class="login_heading2">Log In</h2>
                        {/* <label>Username</label> */}
                        <div class="login_form_div">
                            <input class="login_input" type="userName" placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={userName} />
                        {/* <label>Password</label> */}
                            <br />

                            <input class="login_input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <br />
                
                            <button class="login_button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login