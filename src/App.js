import React, { useEffect } from "react";
import "./App.sass";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getProfile } from "./redux/actions/actions";
import { PrivateRoute } from "./PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import TwoFactorAuth from "./components/twoFactorAuth/TwoFactorAuth";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import NewPassword from "./components/newPassword/NewPassword";
import Verification from "./components/verification/Verification";
import Dashboard from "./components/dashboard/Dashboard";
import BuySell from "./components/buysell/BuySell";
import Deposit from "./components/deposit/Deposit";
import Send from "./components/send/Send";
import Settings from "./components/settings/Settings";
import Profile from "./components/settings/profile/Profile";
import Accounts from "./components/accounts/Accounts";
import History from "./components/history/History";

const App = (props) => {
    const reducer = useSelector((state) => state.reducers);

    useEffect(() => {
        props.getProfile();
        // eslint-disable-next-line
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route
                    exact
                    path="/two-factor-auth"
                    component={TwoFactorAuth}
                />
                <Route
                    exact
                    path="/forgot-password"
                    component={ForgotPassword}
                />
                <Route exact path="/new-password" component={NewPassword} />
                <Route exact path="/verification" component={Verification} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/buy-sell" component={BuySell} />
                <PrivateRoute exact path="/deposit" component={Deposit} />
                <PrivateRoute exact path="/send" component={Send} />
                <PrivateRoute exact path="/settings" component={Settings} />
                <PrivateRoute
                    exact
                    path="/settings/profile"
                    component={Profile}
                />
                <PrivateRoute
                    exact
                    path="/settings/history"
                    component={History}
                />
                <PrivateRoute exact path="/accounts" component={Accounts} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default connect(null, { getProfile })(App);
