import { useState } from "react"
import './register.css';
const Register = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userRegistration = async (e) =>
        e.preventDefault()
    console.log(userName, password)

    return (
        <>
            <div class="outside_register_div">
                <div class="inside_register_div">
                    <form class="register_form" onSubmit={userRegistration}>
                        <h2 class="register_heading2">Sign Up</h2>
                        <div class="register_form_div">
                            {/* <label>Username</label> */}
                            <input class="register_input" placeholder="Username" type="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
                            <br />
                            <input class="register_input" placeholder="School" type="school" onChange={(e) => setUserName(e.target.value)} value={userName} />
                            <br />
                            {/* <label >Password</label> */}
                            <input class="register_input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                           <br />
                                           <input class="register_input" type="confirmPassword" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                           <br />
                            <button class="login_button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>        
    )
}
export default Register