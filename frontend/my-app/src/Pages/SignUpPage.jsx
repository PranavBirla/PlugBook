import React from "react";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fullName = e.target.fullName.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            const response = await axios.post("http://localhost:3000/api/auth/user/register", {
                fullName,
                email,
                password

            }, {
                withCredentials: true
            });

            console.log(response.data);

            navigate("/home");

        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    };


    return (
        <div className="auth-container">

            {/* LEFT SECTION (DESKTOP ONLY) */}
            <div className="left-section">
                <div className="left-content">
                    <div className="logo">
                        <div className="logo-icon">⚡</div>
                        <span>ChargeSlot</span>
                    </div>

                    <h1>
                        Powering a <span>Cleaner</span> Tomorrow.
                    </h1>

                    <p>
                        Join ChargeSlot and be a part of the smarter EV charging revolution.
                    </p>

                    <div className="badge">
                        <span className="badge-icon">🌿</span>
                        <div>
                            <strong>Zero Emissions</strong>
                            <p>For a better future</p>
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
                    <h2>Create your account</h2>
                    <p>Sign up to get started with ChargeSlot</p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" name="fullName" placeholder="Enter your full name" />
                        </div>

                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email address" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Create a password" />
                        </div>

                        <div className="password-hints">
                            <span>✔ 8+ characters</span>
                            <span>✔ 1 number</span>
                            <span>✔ 1 special character</span>
                        </div>

                        <button type="submit" className="signup-btn">Sign Up →</button>
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
                        Already have an account? <span>Sign in</span>
                    </p>
                </div>
            </div>
        </div>
    );
}