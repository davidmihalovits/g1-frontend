import React, { useState } from "react";
import "./ForgotPassword.sass";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const verify = (e) => {
        e.preventDefault();

        alert("Send email.");
    };

    const disabled = email.length !== 0;

    return (
        <div className="forgot-password-container">
            <h1 className="forgot-password-title">FORGOT PASSWORD</h1>
            <form className="forgot-password-form" onSubmit={verify} noValidate>
                <p className="forgot-password-instruction">
                    We'll send password reset instructions to the email address
                    associated with your account.
                </p>
                <input
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={
                        email.length === 0
                            ? "forgot-password-input"
                            : "forgot-password-input-filled"
                    }
                />
                <button
                    type="submit"
                    disabled={!disabled}
                    className="forgot-password-button"
                >
                    VERIFY
                </button>
                <Link to="/login" className="remember-password-link">
                    <p className="remember-password">I remember my password.</p>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPassword;
