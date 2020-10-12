import React from "react";
import "./App.sass";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Signup />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
