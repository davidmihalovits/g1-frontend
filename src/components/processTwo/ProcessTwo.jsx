import React, { useState } from "react";
import "./ProcessTwo.sass";

const ProcessTwo = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [main, setMain] = useState("");
    const [unit, setUnit] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    const submit = (e) => {
        e.preventDefault();

        alert("Submit.");
    };

    const disabled =
        first.length > 0 &&
        last.length > 0 &&
        month.length > 0 &&
        day.length > 0 &&
        year.length > 0 &&
        main.length > 0 &&
        unit.length > 0 &&
        city.length > 0 &&
        zip.length > 0;

    return (
        <div className="process-two-container">
            <div className="process-two-pagination">
                <p className="process-two-page-selected">1</p>
                <hr className="process-two-hr" />
                <p className="process-two-page-selected">2</p>
                <hr className="process-two-hr" />
                <p className="process-two-page-unselected">3</p>
                <hr className="process-two-hr" />
                <p className="process-two-page-unselected">4</p>
            </div>
            <h1 className="process-two-title">VERIFY YOUR IDENTITY</h1>
            <form className="process-two-form" onSubmit={submit} noValidate>
                <input
                    placeholder="First Name"
                    id="first"
                    name="first"
                    type="text"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    className={
                        first.length === 0
                            ? "process-two-input"
                            : "process-two-input-filled"
                    }
                />
                <input
                    placeholder="Last Name"
                    id="last"
                    name="last"
                    type="text"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    className={
                        last.length === 0
                            ? "process-two-input"
                            : "process-two-input-filled"
                    }
                />
                <p className="process-two-label">Date of birth</p>
                <div className="birth-input-group">
                    <input
                        placeholder="MM"
                        id="month"
                        name="month"
                        type="number"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className={
                            month.length === 0
                                ? "process-two-input birth"
                                : "process-two-input-filled birth"
                        }
                    />
                    <input
                        placeholder="DD"
                        id="day"
                        name="day"
                        type="number"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className={
                            day.length === 0
                                ? "process-two-input birth"
                                : "process-two-input-filled birth"
                        }
                    />
                    <input
                        placeholder="YYYY"
                        id="year"
                        name="year"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className={
                            year.length === 0
                                ? "process-two-input birth"
                                : "process-two-input-filled birth"
                        }
                    />
                </div>
                <p className="process-two-label">Address</p>
                <input
                    placeholder="Main Street"
                    id="street"
                    name="street"
                    type="text"
                    value={main}
                    onChange={(e) => setMain(e.target.value)}
                    className={
                        main.length === 0
                            ? "process-two-input"
                            : "process-two-input-filled"
                    }
                />
                <input
                    placeholder="Unit"
                    id="unit"
                    name="unit"
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className={
                        unit.length === 0
                            ? "process-two-input"
                            : "process-two-input-filled"
                    }
                />
                <input
                    placeholder="City"
                    id="city"
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={
                        city.length === 0
                            ? "process-two-input"
                            : "process-two-input-filled"
                    }
                />
                <input
                    placeholder="ZIP"
                    id="zip"
                    name="zip"
                    type="number"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className={
                        zip.length === 0
                            ? "process-two-input"
                            : "process-two-input-filled"
                    }
                    style={{ width: "50%" }}
                />
                <button
                    type="submit"
                    disabled={!disabled}
                    className="process-two-button"
                >
                    CONTINUE
                </button>
            </form>
        </div>
    );
};

export default ProcessTwo;
