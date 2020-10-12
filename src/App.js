import React from "react";
import "./App.sass";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";

const App = () => {
    return (
        <div>
            <Navbar />
            <Signup />
        </div>
    );
};

export default App;
