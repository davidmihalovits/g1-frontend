import React, { useState } from "react";
import "./Login.sass";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();

        alert("Login.");
    };

    const disabled = email.length !== 0 && password.length !== 0;

    return (
        <div className="login-container">
            <h1 className="login-title">LOG IN</h1>
            <form className="login-form" onSubmit={login} noValidate>
                <input
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={
                        email.length === 0
                            ? "login-input"
                            : "login-input-filled"
                    }
                />
                <input
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={
                        password.length === 0
                            ? "login-input"
                            : "login-input-filled"
                    }
                />
                <button
                    type="submit"
                    disabled={!disabled}
                    className="login-button"
                >
                    LOG IN
                </button>
                <Link to="/forgot-password" className="forgot-password-link">
                    <p className="forgot-password">Forgot password?</p>
                </Link>
                <Link to="/signup" className="dont-have-account-link">
                    <p className="dont-have-account">Don't have an account?</p>
                </Link>
                <Link to="/verification" className="two-fa-issue-link">
                    <p className="two-fa-issue">
                        Have an issue with two-factor authentication?
                    </p>
                </Link>
            </form>
        </div>
    );
};

export default Login;
