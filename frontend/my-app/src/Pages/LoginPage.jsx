import React from "react";
import "../css/signup.css"; // SAME CSS (important)
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

            {/* LEFT SECTION (EXACT SAME) */}
            <div className="left-section">
                <div className="left-content">
                    <div className="logo">
                        <div className="logo-icon">⚡</div>
                        <span>ChargeSlot</span>
                    </div>

                    <h1>
                        Welcome <span>Back</span>.
                    </h1>

                    <p>
                        Log in to continue your EV charging journey with ChargeSlot.
                    </p>

                    <div className="badge">
                        <span className="badge-icon">🌿</span>
                        <div>
                            <strong>Smart Charging</strong>
                            <p>Fast & reliable stations</p>
                        </div>
                    </div>

                    <img
                        src="https://cdn.dribbble.com/userupload/12345678/file/original-ev.png"
                        alt="EV"
                        className="ev-image"
                    />
                </div>
            </div>

            {/* RIGHT SECTION */}
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

                        <button type="submit" className="signup-btn">
                            Login →
                        </button>
                    </form>

                    <div className="divider">
                        <span>or continue with</span>
                    </div>

                    <div className="social-login">
                        <div className="social-btn">G</div>
                        <div className="social-btn"></div>
                        <div className="social-btn">⬜</div>
                    </div>

                    <p className="signin-text">
                        Don’t have an account?{" "}
                        <span onClick={() => navigate("/")}>
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}