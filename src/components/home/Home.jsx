import React, { useEffect } from "react";
import "./Home.sass";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const reducer = useSelector((state) => state.reducers);

    const history = useHistory();

    useEffect(() => {
        if (reducer.authenticated) {
            history.push("/dashboard");
        }
    });

    return (
        <div className="home-container">
            <h1 className="home-title">This is an ongoing project.</h1>
            <p className="home-paragraph">
                Frontend code:{" "}
                <a
                    href="https://github.com/davidmihalovits/g1-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-link"
                >
                    https://github.com/davidmihalovits/g1-frontend
                </a>
            </p>
            <p className="home-paragraph">
                Backend code:{" "}
                <a
                    href="https://github.com/davidmihalovits/g1-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-link"
                >
                    https://github.com/davidmihalovits/g1-backend
                </a>
            </p>
        </div>
    );
};

export default Home;
