import React from "react";
import "./Navbar.sass";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logo2 from "../../assets/logo2.svg";
import hamburger from "../../assets/hamburger.svg";
import bell from "../../assets/bell.svg";
import dashboard from "../../assets/dashboard.svg";
import buysell from "../../assets/buysell.svg";
import send from "../../assets/send.svg";
import search from "../../assets/search.svg";
import profilePic from "../../assets/profilePic.png";

const Navbar = () => {
    const location = useLocation();
    const authenticated = true;

    if (authenticated && location.pathname === "/dashboard") {
        return (
            <div className="navbar-container-auth-true">
                <div className="navbar-top-auth-true">
                    <div className="navbar-top-inner">
                        <img src={logo2} className="navbar-logo" alt="logo" />
                        <div className="navbar-button-bell-group">
                            <button className="navbar-button">DEPOSIT</button>
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
                        <img
                            src={dashboard}
                            className="navbar-bottom-icon"
                            alt="icon"
                        />
                        <img
                            src={buysell}
                            className="navbar-bottom-icon"
                            alt="icon"
                        />
                        <img
                            src={send}
                            className="navbar-bottom-icon"
                            alt="icon"
                        />
                        <img
                            src={search}
                            className="navbar-bottom-icon"
                            alt="icon"
                        />
                        <img
                            src={profilePic}
                            className="navbar-bottom-icon"
                            alt="icon"
                        />
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
                    <button className="navbar-button">GET STARTED</button>
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
