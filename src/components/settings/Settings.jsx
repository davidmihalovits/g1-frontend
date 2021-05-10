import React from "react";
import "./Settings.sass";
import { Link, useHistory } from "react-router-dom";
import selectRight from "../../assets/selectRight.svg";
import { logout } from "../../redux/actions/actions";
import { connect } from "react-redux";

const Settings = (props) => {
    const history = useHistory();

    return (
        <div className="settings-container">
            <div className="settings-box">
                <Link to="/settings/profile" className="settings-button">
                    <p className="settings-button-text">My Profile</p>
                    <img
                        src={selectRight}
                        alt="select"
                        className="settings-button-icon"
                    />
                </Link>
                <Link to="/settings/history" className="settings-button">
                    <p className="settings-button-text">History</p>
                    <img
                        src={selectRight}
                        alt="select"
                        className="settings-button-icon"
                    />
                </Link>
                <button
                    className="settings-logout"
                    onClick={() => props.logout(history)}
                >
                    LOGOUT
                </button>
            </div>
        </div>
    );
};

export default connect(null, { logout })(Settings);
