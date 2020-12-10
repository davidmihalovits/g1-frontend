import React from "react";
import "./Settings.sass";
import { Link } from "react-router-dom";
import selectRight from "../../assets/selectRight.svg";

const Settings = () => {
    return (
        <div className="settings-container">
            <Link to="/settings/profile" className="settings-button">
                <p className="settings-button-text">My Profile</p>
                <img
                    src={selectRight}
                    alt="select"
                    className="settings-button-icon"
                />
            </Link>
            <div className="settings-button">
                <p className="settings-button-text">Preferences</p>
                <img
                    src={selectRight}
                    alt="select"
                    className="settings-button-icon"
                />
            </div>
            <div className="settings-button">
                <p className="settings-button-text">Security</p>
                <img
                    src={selectRight}
                    alt="select"
                    className="settings-button-icon"
                />
            </div>
            <div className="settings-button">
                <p className="settings-button-text">Privacy Rights</p>
                <img
                    src={selectRight}
                    alt="select"
                    className="settings-button-icon"
                />
            </div>
            <div className="settings-button">
                <p className="settings-button-text">Linked Accounts</p>
                <img
                    src={selectRight}
                    alt="select"
                    className="settings-button-icon"
                />
            </div>
            <div className="settings-button">
                <p className="settings-button-text">Limits</p>
                <img
                    src={selectRight}
                    alt="select"
                    className="settings-button-icon"
                />
            </div>
        </div>
    );
};

export default Settings;
