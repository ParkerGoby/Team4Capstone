import React, { useState } from "react";
import { useNavigate } from "react-router";

var obj;

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    school: "",
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

    await fetch("http://localhost:5000/login/register", {
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
    .catch(error => {
      window.alert(error);
      return;
    });
    
    setForm({ email: "", school: "", password: ""});
    sessionStorage.setItem('token', JSON.stringify(obj))
    navigate("/");
    window.location.reload(false);
  }

  // This following section will display the form that takes the input from the user.
 return (
        <>
 <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form onSubmit={onSubmit}>
              <div class="form-floating mb-3">
              <input type="text" className="form-control" id="email" placeholder="name@example.com" value={form.email} onChange={(e) => updateForm({ email: e.target.value })}>
               </input>
                <label htmlFor="email">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="school" placeholder="Oakland Elementary School" value={form.school} onChange={(e) => updateForm({ school: e.target.value })}></input>
                <label htmlFor="school">School</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" value={form.password} onChange={(e) => updateForm({ password: e.target.value })}></input>
                <label htmlFor="password">Password</label>
              </div>
              {/* <div class="form-floating mb-3">
                <input type="password" class="form-control" id=" placeholder="Password"></input>
                <label htmlFor=">Confirm Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"></input>
                <label class="form-check-label" htmlFor="rememberPasswordCheck">
                  Remember password
                </label>
              </div> */}
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" value="Submit" type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
}
