import { useState } from "react"
import './login.css';
import PropTypes from 'prop-types';

async function loginUser(newPerson) {
  return fetch('http://localhost:5000/loginUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPerson)
  })
    .then(data => data.json())
 }
 
export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }

    return (
        <>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUserName(e.target.value)}></input>
                <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"></input>
                <label className="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</>
    )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

