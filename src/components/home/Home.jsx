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
            <h1 className="home-title">
                This will be the home page. Nothing to see here yet.
            </h1>
            <p className="home-paragraph">
                Get started by signing up or logging in.
            </p>
        </div>
    );
};

export default Home;
