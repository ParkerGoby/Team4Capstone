import { useState } from "react"

const Register = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userRegistration = async (e) =>
        e.preventDefault()
    console.log(userName, password)

    return (
        <form onSubmit={userRegistration}>
            <h2>Sign Up</h2>
            <label>Username</label>
            <input type="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button>Register</button>
        </form>
    )
}
export default Register