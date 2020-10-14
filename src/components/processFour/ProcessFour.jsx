import React, { useState } from "react";
import "./ProcessFour.sass";

const ProcessFour = () => {
    const [image, setImage] = useState("");

    const submit = (e) => {
        e.preventDefault();

        alert("Submit.");
    };

    /*const disabled =
        image.length > 0;*/

    return (
        <div className="process-four-container">
            <div className="process-four-pagination">
                <p className="process-four-page-selected">1</p>
                <hr className="process-four-hr" />
                <p className="process-four-page-selected">2</p>
                <hr className="process-four-hr" />
                <p className="process-four-page-selected">3</p>
                <hr className="process-four-hr" />
                <p className="process-four-page-selected">4</p>
            </div>
            <h1 className="process-four-title">VERIFY YOUR IDENTITY</h1>
        </div>
    );
};

export default ProcessFour;
