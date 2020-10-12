import React, { useState } from "react";
import "./NewPassword.sass";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hiddenPassword, setHiddenPassword] = useState("");
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState("");

    const showPassword = () => {
        setHiddenPassword(!hiddenPassword);
    };

    const showConfirmPassword = () => {
        setHiddenConfirmPassword(!hiddenConfirmPassword);
    };

    const change = (e) => {
        e.preventDefault();

        alert("Change Password.");
    };

    const disabled = password.length !== 0 && confirmPassword.length !== 0;

    return (
        <div className="new-password-container">
            <h1 className="new-password-title">NEW PASSWORD</h1>
            <form className="new-password-form" onSubmit={change} noValidate>
                <p className="new-password-instructions">
                    In order to protect your account, make sure your password:
                    <br />
                    - is longer than 7 characters
                    <br />
                    - Does not match or significantly contain your username,
                    e-g- do not use ‘username12345’
                    <br />
                    - Contains capital letters
                    <br />- Contains numbers
                </p>
                <input
                    placeholder="New Password"
                    id="password"
                    name="password"
                    type={hiddenPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={
                        password.length === 0
                            ? "new-password-input"
                            : "new-password-input-filled"
                    }
                />
                {hiddenPassword ? (
                    <img
                        src={eyeSlash}
                        onClick={showPassword}
                        className="new-password-show-hide-password"
                        alt="show and hide password"
                    />
                ) : (
                    <img
                        src={eye}
                        onClick={showPassword}
                        className="new-password-show-hide-password"
                        alt="show and hide password"
                    />
                )}
                <input
                    placeholder="Confirm New Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type={hiddenConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={
                        confirmPassword.length === 0
                            ? "new-password-input"
                            : "new-password-input-filled"
                    }
                />
                {hiddenConfirmPassword ? (
                    <img
                        src={eyeSlash}
                        onClick={showConfirmPassword}
                        className="new-password-show-hide-password"
                        alt="show and hide password"
                    />
                ) : (
                    <img
                        src={eye}
                        onClick={showConfirmPassword}
                        className="new-password-show-hide-password"
                        alt="show and hide password"
                    />
                )}
                <button
                    type="submit"
                    disabled={!disabled}
                    className="new-password-button"
                >
                    CHANGE PASSWORD
                </button>
            </form>
        </div>
    );
};

export default NewPassword;
