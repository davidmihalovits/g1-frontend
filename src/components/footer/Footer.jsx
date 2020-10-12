import React from "react";
import "./Footer.sass";
import logo from "../../assets/logo.svg";
import apple from "../../assets/apple.svg";
import android from "../../assets/android.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
    return (
        <div className="footer-container">
            <hr className="footer-line" />
            <div className="footer-top">
                <img src={logo} className="footer-logo" alt="logo" />
                <img src={apple} className="footer-apple" alt="apple" />
                <img src={android} className="footer-android" alt="android" />
            </div>
            <div className="footer-middle1">
                <p className="footer-middle-p">Home</p>
                <p className="footer-middle-p">White Paper</p>
                <p className="footer-middle-p">About Us</p>
                <p className="footer-middle-p">Blog</p>
            </div>
            <div className="footer-middle2">
                <p className="footer-middle-p">Support</p>
                <p className="footer-middle-p">FAQ</p>
            </div>
            <div className="social-icons">
                <img src={facebook} className="social-icon fb" alt="facebook" />
                <img src={twitter} className="social-icon ttr" alt="twitter" />
                <img
                    src={instagram}
                    className="social-icon ig"
                    alt="instagram"
                />
            </div>
            <p className="copyright">&copy; 2018 GOLDCOIN</p>
        </div>
    );
};

export default Footer;
