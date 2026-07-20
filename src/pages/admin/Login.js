import React from 'react';
import { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      // await signInWithEmailAndPassword(auth, email, password);
      // alert("Login Successful");
      // navigate("/admin/dashboard");

      // Store authentication in browser
      await setPersistence(auth, browserLocalPersistence);

      // Login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save login timestamp
      localStorage.setItem(
        "loginTime",
        Date.now().toString()
      );

      alert("Login Successful");

      navigate("/admin/dashboard");

    } catch (error) {

      alert(error.message);

    }
  };


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <h2 className="mb-4">Admin Login</h2>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100">
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}
