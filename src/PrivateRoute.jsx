import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component }) => {
    const location = useLocation();

    const reducer = useSelector((state) => state.reducers);

    return (
        <Route
            render={() =>
                localStorage.getItem("token") ? (
                    reducer.user.verified ? (
                        <Component />
                    ) : (
                        <Redirect to="/verification" />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
