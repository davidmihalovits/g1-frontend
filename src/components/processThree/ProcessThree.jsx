import React, { useState } from "react";
import "./ProcessThree.sass";
import selectArrow from "../../assets/selectArrow.svg";

const ProcessThree = () => {
    const [use, setUse] = useState("Select");
    const [source, setSource] = useState("Select");
    const [current, setCurrent] = useState("Select");
    const [employer, setEmployer] = useState("");

    const submit = (e) => {
        e.preventDefault();

        alert("Submit.");
    };

    const disabled =
        employer.length > 0 &&
        use !== "Select" &&
        source !== "Select" &&
        current !== "Select";

    return (
        <div className="process-three-container">
            <div className="process-three-pagination">
                <p className="process-three-page-selected">1</p>
                <hr className="process-three-hr" />
                <p className="process-three-page-selected">2</p>
                <hr className="process-three-hr" />
                <p className="process-three-page-selected">3</p>
                <hr className="process-three-hr" />
                <p className="process-three-page-unselected">4</p>
            </div>
            <h1 className="process-three-title">VERIFY YOUR IDENTITY</h1>
            <form className="process-three-form" onSubmit={submit} noValidate>
                <p className="process-three-form-label">
                    What will you use Gold Coin for?
                </p>
                <div
                    className={
                        use === "Select"
                            ? "process-three-select-unselected"
                            : "process-three-select-selected"
                    }
                >
                    <span>{use}</span>
                    <img
                        src={selectArrow}
                        className="process-three-arrow"
                        alt="select"
                    />
                </div>
                <p className="process-three-form-label">
                    What is your source of fund?
                </p>
                <div
                    className={
                        source === "Select"
                            ? "process-three-select-unselected"
                            : "process-three-select-selected"
                    }
                >
                    <span>{source}</span>
                    <img
                        src={selectArrow}
                        className="process-three-arrow"
                        alt="select"
                    />
                </div>
                <p className="process-three-form-label">
                    What is your current occupation?
                </p>
                <div
                    className={
                        current === "Select"
                            ? "process-three-select-unselected"
                            : "process-three-select-selected"
                    }
                >
                    <span>{current}</span>
                    <img
                        src={selectArrow}
                        className="process-three-arrow"
                        alt="select"
                    />
                </div>
                <p className="process-three-form-label">Employer</p>
                <input
                    placeholder="Employer"
                    id="employer"
                    name="employer"
                    type="text"
                    value={employer}
                    onChange={(e) => setEmployer(e.target.value)}
                    className={
                        employer.length === 0
                            ? "process-three-input"
                            : "process-three-input-filled"
                    }
                />
                <button
                    type="submit"
                    disabled={!disabled}
                    className="process-three-button"
                >
                    CONTINUE
                </button>
            </form>
        </div>
    );
};

export default ProcessThree;
