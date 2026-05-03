import React from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ShieldCheck } from 'lucide-react';


export default function LoginPage() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email.value;
            const password = e.target.password.value;

            const response = await axios.post(
                "http://localhost:3000/api/auth/user/login",
                {
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            );

            console.log(response.data);

            // Optional: store token if backend sends it
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }

            navigate("/home");

        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    };


    return (
        <div className="auth-container">
            <div className="logo">
                        
                        <span>PlugBook</span>
                    </div>


            <div className="left-section">
                
                <div className="left-content">
                    <div className="bogo">
                        
                        <span>PlugBook</span>
                    </div>
                    

                    <h1 id="tag">
                        Charge Smarter. <span>Drive Better.</span>
                    </h1>

                    <p id="pop">
                        Welcome back! Login to continue your journey with PlugBook.
                    </p>

                    <div className="badge">
                        <div>
                            <ShieldCheck size={30} />
                        </div>
                        <div>
                            <strong>Secure & Trusted</strong>
                            <p id="secure">Your data is always safe</p>
                        </div>
                    </div>
                    <div id="frontImg">
                        <img src="public\sigin.png" alt="" />
                    </div>


                </div>
            </div>

            <div className="right-section">
                <div className="form-container">
                    <h2>Welcome back</h2>
                    <p>Login to your account</p>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email address" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password" />
                        </div>

                        <button id="loginButton" type="submit" className="signup-btn">
                            <h1>Login</h1>  
                        </button>
                    </form>

                    <div className="divider">
                        <span>or </span>
                    </div>

                    <div className="Gparent">
                        <button className="google-btn">
                            <svg width="25" height="25" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.23 3.61l6.9-6.9C35.73 2.36 30.28 0 24 0 14.82 0 6.88 5.48 3.1 13.44l8.05 6.26C13.36 13.09 18.23 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9h12.73c-.55 2.97-2.21 5.49-4.72 7.18l7.33 5.7C43.98 37.5 46.5 31.5 46.5 24.5z" />
                                <path fill="#FBBC05" d="M11.15 28.09c-.5-1.5-.79-3.08-.79-4.59s.29-3.09.79-4.59l-8.05-6.26C1.12 16.14 0 19.97 0 24s1.12 7.86 3.1 11.35l8.05-6.26z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.92-2.14 15.9-5.82l-7.33-5.7c-2.03 1.36-4.63 2.17-8.57 2.17-5.77 0-10.64-3.59-12.85-8.7l-8.05 6.26C6.88 42.52 14.82 48 24 48z" />
                            </svg>
                            <span>Continue with Google</span>
                        </button>
                    </div>

                    <p className="switch">
                        Don’t have an account?{" "}
                       
                        <Link className="bold" to='/register' >Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}