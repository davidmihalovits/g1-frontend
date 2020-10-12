import React from "react";
import "./App.sass";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Verification from "./components/verification/Verification";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import NewPassword from "./components/newPassword/NewPassword";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/verification" component={Verification} />
                <Route
                    exact
                    path="/forgot-password"
                    component={ForgotPassword}
                />
                <Route exact path="/new-password" component={NewPassword} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
