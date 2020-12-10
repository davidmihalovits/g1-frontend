import React, { useState } from "react";
import "./Profile.sass";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import back from "../../../assets/back.svg";
import noImg from "../../../assets/noimg.png";

const Profile = () => {
    const reducer = useSelector((state) => state.reducers);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="profile-container">
            <Link to="/settings" className="profile-back-link">
                <img src={back} alt="back" className="profile-back-icon" /> Back
            </Link>
            <div className="profile-box">
                <h2 className="profile-box-title">USER PROFILE</h2>
                {reducer.user.image ? (
                    <img
                        className="profile-box-pic"
                        src={reducer.user.image}
                        alt=""
                    />
                ) : (
                    <img className="profile-box-pic" src={noImg} alt="" />
                )}
                <p className="profile-box-instruction">
                    Change profile picture
                </p>
                <p className="profile-box-instruction2">
                    Max file size is 20 MB.
                </p>
                <p className="profile-box-remove">Remove</p>
                <button className="profile-box-button">UPLOAD</button>
                <hr className="profile-box-line" />
                <p className="profile-box-instruction">Change your password</p>
                <p className="profile-box-instruction2">
                    Enable 2-factor authentication on the privacy page.
                </p>
                <button className="profile-box-button">CHANGE PASSWORD</button>
                <hr className="profile-box-line" />
                <h2 className="profile-box-title">PERSONAL DETAILS</h2>
                <p className="profile-box-instruction2">
                    Your personal information is never shown to other users.
                </p>
                <label className="profile-box-label" htmlFor="email">
                    Email Address
                </label>
                <input
                    placeholder={reducer.user.email}
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={
                        email.length === 0
                            ? "profile-box-input"
                            : "profile-box-input-filled"
                    }
                />
                <label className="profile-box-label" htmlFor="firstName">
                    First Name
                </label>
                <input
                    placeholder={reducer.user.firstName}
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={
                        firstName.length === 0
                            ? "profile-box-input"
                            : "profile-box-input-filled"
                    }
                />
                <label className="profile-box-label" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    placeholder={reducer.user.lastName}
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={
                        lastName.length === 0
                            ? "profile-box-input"
                            : "profile-box-input-filled"
                    }
                />
                <button className="profile-box-button">SAVE</button>
            </div>
        </div>
    );
};

export default Profile;
