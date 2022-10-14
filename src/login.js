import { useState } from "react"

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = async (e) =>
        e.preventDefault()
    console.log(userName, password)

    return (
        <form onSubmit={userLogin}>
            <h2>Login</h2>
            <label>Username</label>
            <input type="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button>Login</button>
        </form>
    )
}
export default Login