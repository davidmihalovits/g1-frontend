import React, { useState } from "react";
import "./Signup.sass";
import signupTitle from "../../assets/signupTitle.svg";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hiddenPassword, setHiddenPassword] = useState("");

    const showPassword = () => {
        setHiddenPassword(!hiddenPassword);
    };

    const signup = (e) => {
        e.preventDefault();
    };

    return (
        <div className="signup-container">
            <img
                src={signupTitle}
                className="signup-title"
                alt="signup title"
            />
            <form className="signup-form" onSubmit={signup} noValidate>
                <input
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="signup-input"
                />
                <input
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="signup-input"
                />
                <input
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signup-input"
                />
                <input
                    placeholder="Password"
                    id="password"
                    name="password"
                    type={hiddenPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup-input"
                />
                <input
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type={hiddenPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="signup-input"
                />
                {hiddenPassword ? (
                    <img
                        src={eyeSlash}
                        onClick={showPassword}
                        className="signup-show-hide-password"
                        alt="show and hide password"
                    />
                ) : (
                    <img
                        src={eye}
                        onClick={showPassword}
                        className="signup-show-hide-password"
                        alt="show and hide password"
                    />
                )}
            </form>
        </div>
    );
};

export default Signup;
