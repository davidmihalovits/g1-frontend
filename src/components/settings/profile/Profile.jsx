import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../../index";
import "./Profile.sass";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { storage } from "../../../firebase";
import { updateProfile, changePassword } from "../../../redux/actions/actions";
import back from "../../../assets/back.svg";
import lock from "../../../assets/lock.svg";
import cross from "../../../assets/cross.svg";
import noImg from "../../../assets/noimg.png";

const Profile = (props) => {
    const reducer = useSelector((state) => state.reducers);

    const [firstName, setFirstName] = useState(reducer.user.firstName);
    const [lastName, setLastName] = useState(reducer.user.lastName);
    const [email, setEmail] = useState(reducer.user.email);
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const profilePicOnChange = (e) => {
        const profilePic = e.target.files[0];
        const uploadTask = storage
            .ref(`profilePic/${profilePic.name}`)
            .put(profilePic);
        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("profilePic")
                    .child(profilePic.name)
                    .getDownloadURL()
                    .then((url) => {
                        const u = url;
                        props.updateProfile({
                            image: u,
                        });
                    });
            }
        );
    };

    useEffect(() => {
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    {changePasswordModal && changePasswordModalOpen}
                </Provider>
            </React.StrictMode>,
            document.getElementById("modal")
        );
        // eslint-disable-next-line
    }, [changePasswordModal, oldPassword, newPassword, confirmNewPassword]);

    if (changePasswordModal) {
        document.getElementById("root").style.opacity = "0.1";
        document.body.classList.add("modal-open");
        document.getElementById("root").style.pointerEvents = "none";
    } else {
        document.getElementById("root").style.opacity = "1";
        document.body.classList.remove("modal-open");
        document.getElementById("root").style.pointerEvents = "auto";
    }

    const changePasswordModalOpen = (
        <div className="profile-box-change-password-container">
            <img
                src={cross}
                alt=""
                className="profile-box-change-password-close"
                onClick={() => setChangePasswordModal(false)}
            />
            <h1 className="profile-box-change-password-title">
                CHANGE PASSWORD
            </h1>
            <label className="profile-box-change-password-label">
                Old Password
            </label>
            <input
                placeholder="Old Password"
                id="oldPassword"
                name="oldPassword"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className={
                    oldPassword.length === 0
                        ? "profile-box-change-password-input"
                        : "profile-box-change-password-input-filled"
                }
            />
            <label className="profile-box-change-password-label">
                New Password
            </label>
            <input
                placeholder="New Password"
                id="newPassword"
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={
                    newPassword.length === 0
                        ? "profile-box-change-password-input"
                        : "profile-box-change-password-input-filled"
                }
            />
            <label className="profile-box-change-password-label">
                Confirm New Password
            </label>
            <input
                placeholder="Confirm New Password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className={
                    confirmNewPassword.length === 0
                        ? "profile-box-change-password-input"
                        : "profile-box-change-password-input-filled"
                }
            />
            <button
                className="profile-box-change-password-button"
                onClick={() => {
                    props.changePassword({
                        oldPassword: oldPassword,
                        newPassword: newPassword,
                    });
                    setChangePasswordModal(false);
                }}
            >
                SAVE
            </button>
        </div>
    );

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
                <input
                    style={{ display: "none" }}
                    name="image"
                    id="image"
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    value={""}
                    onChange={profilePicOnChange}
                />
                <label
                    className="profile-box-button-changeprofilepic"
                    htmlFor="image"
                >
                    UPLOAD
                </label>
                <hr className="profile-box-line" />
                <p className="profile-box-instruction">Change your password</p>
                <p className="profile-box-instruction2">
                    Enable 2-factor authentication on the privacy page.
                </p>
                <button
                    className="profile-box-button"
                    onClick={() => setChangePasswordModal(true)}
                >
                    CHANGE PASSWORD
                </button>
                <hr className="profile-box-line" />
                <h2 className="profile-box-title">PERSONAL DETAILS</h2>
                <p className="profile-box-instruction2">
                    Your personal information is never shown to other users.
                </p>
                <label className="profile-box-label" htmlFor="email">
                    Email Address
                </label>
                <input
                    placeholder="Email Address"
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
                    placeholder="First Name"
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
                    placeholder="Last Name"
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

export default connect(null, { updateProfile, changePassword })(Profile);
