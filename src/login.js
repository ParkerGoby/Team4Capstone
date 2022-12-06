import React, { useState } from "react";
import './login.css';
import {useNavigate} from "react-router";
var obj;


export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

    // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newLogin = { ...form };

    await fetch("http://localhost:5000/login/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLogin),
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
    sessionStorage.setItem('token', JSON.stringify(obj))
    setForm({ email: "", password: ""});
    navigate("/");
    window.location.reload(false);
  }


    return (
        <>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" value={form.email} placeholder="name@example.com" onChange={(e) => updateForm({ email: e.target.value })}></input>
                <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" value={form.password} placeholder="Password" onChange={(e) => updateForm({ password: e.target.value })}></input>
                <label for="floatingPassword">Password</label>
              </div>

              {/* <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"></input>
                <label className="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div> */}
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

};

