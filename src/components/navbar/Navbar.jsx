import React from "react";
import "./Navbar.sass";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import logo2 from "../../assets/logo2.svg";
import hamburger from "../../assets/hamburger.svg";
import bell from "../../assets/bell.svg";
import dashboard from "../../assets/dashboard.svg";
import buysell from "../../assets/buysell.svg";
import send from "../../assets/send.svg";
import chart from "../../assets/chart.svg";
import noImg from "../../assets/noimg.png";

const Navbar = () => {
    const reducer = useSelector((state) => state.reducers);

    if (reducer.authenticated && reducer.user.verified) {
        return (
            <div className="navbar-container-auth-true">
                <div className="navbar-top-auth-true">
                    <div className="navbar-top-inner">
                        <img src={logo2} className="navbar-logo" alt="logo" />
                        <div className="navbar-button-bell-group">
                            <Link to="/deposit" className="navbar-button-link">
                                <button className="navbar-button">
                                    DEPOSIT
                                </button>
                            </Link>
                            <img
                                src={bell}
                                className="navbar-bell"
                                alt="bell"
                            />
                        </div>
                    </div>
                </div>
                <div className="navbar-bottom-auth-true">
                    <div className="navbar-bottom-inner">
                        <Link
                            className="navbar-bottom-icon-link"
                            to="/dashboard"
                        >
                            <img
                                src={dashboard}
                                className="navbar-bottom-icon"
                                alt="icon"
                            />
                        </Link>
                        <Link
                            className="navbar-bottom-icon-link"
                            to="/buy-sell"
                        >
                            <img
                                src={buysell}
                                className="navbar-bottom-icon"
                                alt="icon"
                            />
                        </Link>
                        <Link className="navbar-bottom-icon-link" to="/send">
                            <img
                                src={send}
                                className="navbar-bottom-icon"
                                alt="icon"
                            />
                        </Link>
                        <Link className="navbar-bottom-icon-link" to="/chart">
                            <img
                                src={chart}
                                className="navbar-bottom-icon"
                                alt="icon"
                            />
                        </Link>
                        <Link
                            className="navbar-bottom-icon-link"
                            to="/settings"
                        >
                            {reducer.user.image ? (
                                <img
                                    className="navbar-bottom-profile-pic"
                                    src={reducer.user.image}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="navbar-bottom-profile-pic"
                                    src={noImg}
                                    alt=""
                                />
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="navbar-container-auth-false">
            <div className="navbar-top-auth-false">
                <Link to="/" className="navbar-logo-link">
                    <img src={logo} className="navbar-logo" alt="logo" />
                </Link>
                <div className="navbar-button-hamburger-group">
                    <Link to="/signup" className="navbar-button-link">
                        <button className="navbar-button">GET STARTED</button>
                    </Link>
                    <img
                        src={hamburger}
                        className="navbar-hamburger"
                        alt="hamburger"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
