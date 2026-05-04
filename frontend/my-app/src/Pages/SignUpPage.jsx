import React from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { ShieldCheck } from 'lucide-react';
import { MoveRight } from 'lucide-react'
import { useState, useEffect } from "react";
export default function SignUpPage() {

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fullName = e.target.fullName.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            const response = await API.post("/api/auth/user/register", {
                fullName,
                email,
                password

            }, {
                withCredentials: true
            });

            console.log(response.data);

            navigate("/home");

        } catch (error) {
            const msg =
                error.response?.data?.message || "Signup failed";

            setError(msg);
        }
    };


    return (
        <div className="auth-container">
            <div className="plugbook-logo">

                <span>PlugBook</span>
            </div>

            {/* LEFT SECTION (DESKTOP ONLY) */}
            <div className="left-section">
                <div className="left-content">
                    <div className="bogo">

                        <span>PlugBook</span>
                    </div>

                    <h1 id="tag">
                        Charge Smarter. <span>Drive Better.</span>
                    </h1>

                    <p id="pop">
                        Create your account to start your journey with ChargeSlot.
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

            {/* RIGHT SECTION */}
            <div className="right-section">
                <div className="form-container">
                    <h2>Create your account</h2>
                    <p>Sign up to get started with ChargeSlot</p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" name="fullName" placeholder="Enter your full name" />
                        </div>

                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email"  onChange={() => setError("")} name="email" placeholder="Enter your email address" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password"  onChange={() => setError("")} name="password" placeholder="Create a password" />
                        </div>

                        {error && (
                            <div className="mb-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <button type="submit" className="signup-btn">Sign Up </button>
                    </form>

                    <div className="divider">
                        <span>or</span>
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
                        Already have an account?
                        <Link className="bold" to='/login' >Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}