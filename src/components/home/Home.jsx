import React from "react";
import "./Home.sass";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">This will be the home page.</h1>
            <p className="check-routes">Check the routes here:</p>
            <Link to="/login" className="link">
                Login
            </Link>
            <Link to="/signup" className="link">
                Signup
            </Link>
            <Link to="/verification" className="link">
                Verification
            </Link>
            <Link to="/forgot-password" className="link">
                Forgot Password
            </Link>
            <Link to="/new-password" className="link">
                New Password
            </Link>
            <Link to="/process-one" className="link">
                Process One
            </Link>
            <Link to="/process-two" className="link">
                Process Two
            </Link>
            <Link to="/process-three" className="link">
                Process Three
            </Link>
            <Link to="/process-four" className="link">
                Process Four
            </Link>
            <Link to="/dashboard" className="link">
                Dashboard
            </Link>
        </div>
    );
};

export default Home;
