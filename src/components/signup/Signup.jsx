import React, { useState, useEffect } from "react";
import "./Signup.sass";
import { Link, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { signup } from "../../redux/actions/actions";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";
import checkboxFalse from "../../assets/checkboxFalse.svg";
import checkboxTrue from "../../assets/checkboxTrue.svg";

const Signup = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hiddenPassword, setHiddenPassword] = useState("");
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const reducer = useSelector((state) => state.reducers);

    const history = useHistory();

    useEffect(() => {
        if (reducer.authenticated) {
            history.push("/dashboard");
        }
    });

    const showPassword = () => {
        setHiddenPassword(!hiddenPassword);
    };

    const showConfirmPassword = () => {
        setHiddenConfirmPassword(!hiddenConfirmPassword);
    };

    const signup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return;
        }

        props.signup({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        });
    };

    const disabled =
        firstName.length !== 0 &&
        lastName.length !== 0 &&
        email.length !== 0 &&
        password.length !== 0 &&
        confirmPassword.length !== 0 &&
        checked;

    return (
        <div className="signup-container">
            <h1 className="signup-title">CREATE YOUR ACCOUNT</h1>
            <form className="signup-form" onSubmit={signup} noValidate>
                <input
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={
                        firstName.length === 0
                            ? "signup-input"
                            : "signup-input-filled"
                    }
                />
                <input
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={
                        lastName.length === 0
                            ? "signup-input"
                            : "signup-input-filled"
                    }
                />
                <input
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={
                        email.length === 0
                            ? "signup-input"
                            : "signup-input-filled"
                    }
                />
                <input
                    placeholder="Password (min 6)"
                    id="password"
                    name="password"
                    type={hiddenPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={
                        password.length === 0
                            ? "signup-input"
                            : "signup-input-filled"
                    }
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
                <input
                    placeholder="Confirm Password (min 6)"
                    id="confirmPassword"
                    name="confirmPassword"
                    type={hiddenConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={
                        confirmPassword.length === 0
                            ? "signup-input"
                            : "signup-input-filled"
                    }
                />
                {hiddenConfirmPassword ? (
                    <img
                        src={eyeSlash}
                        onClick={showConfirmPassword}
                        className="signup-show-hide-password"
                        alt="show and hide password"
                    />
                ) : (
                    <img
                        src={eye}
                        onClick={showConfirmPassword}
                        className="signup-show-hide-password"
                        alt="show and hide password"
                    />
                )}
                <div className="signup-checkbox-policy-group">
                    <img
                        src={checked ? checkboxTrue : checkboxFalse}
                        alt="checkbox"
                        onClick={() => setChecked(!checked)}
                        className="signup-checkbox"
                    />
                    <p className="signup-policy">
                        I certify that I am 18 years of age or older, and{" "}
                        <span
                            style={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            I agree to the User Agreement and Privacy Policy
                        </span>
                        .
                    </p>
                </div>
                <button
                    type="submit"
                    disabled={!disabled}
                    className="signup-button"
                >
                    CREATE YOUR ACCOUNT
                </button>
                <Link to="/login" className="already-have-account-link">
                    <p className="already-have-account">
                        Already have an account? Log in here!
                    </p>
                </Link>
            </form>
        </div>
    );
};

export default connect(null, { signup })(Signup);
