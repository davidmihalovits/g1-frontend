import React from "react";
import "./Navbar.sass";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger.svg";

const Navbar = () => {
    return (
        <div className="navbar-container-auth-false">
            <div className="navbar-top-auth-false">
                <img src={logo} className="navbar-logo" alt="logo" />
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
