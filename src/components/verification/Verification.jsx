import React, { useState, useEffect } from "react";
import "./Verification.sass";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import selectArrow from "../../assets/selectArrow.svg";
import checkmarkGreen from "../../assets/checkmarkGreen.svg";
import ProcessTwo from "./processTwo/ProcessTwo";

const Verification = () => {
    const [format, setFormat] = useState("+36 (HUN)");
    const [phone, setPhone] = useState("");
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState("");
    const [processTwo, setProcessTwo] = useState(false);

    const reducer = useSelector((state) => state.reducers);

    const history = useHistory();

    useEffect(() => {
        if (reducer.user.verified) {
            history.push("/dashboard");
        }

        if (!reducer.authenticated) {
            history.push("/login");
        }
    });

    const disabled = phone.length > 0;
    const disabled2 = code.length > 0;

    const sendCode = (e) => {
        e.preventDefault();
        setCodeSent(true);
    };

    const resendSms = (e) => {
        e.preventDefault();

        alert("Resend SMS.");
    };

    const submit = (e) => {
        e.preventDefault();

        setProcessTwo(true);
    };

    if (processTwo) {
        return <ProcessTwo format={format} phone={phone} />;
    }

    return (
        <div className="process-one-container">
            <div className="process-one-pagination">
                <p className="process-one-page-selected">1</p>
                <hr className="process-one-hr" />
                <p className="process-one-page-unselected">2</p>
                <hr className="process-one-hr" />
                <p className="process-one-page-unselected">3</p>
                <hr className="process-one-hr" />
                <p className="process-one-page-unselected">4</p>
            </div>
            {codeSent ? (
                <>
                    <form
                        className="process-one-form"
                        onSubmit={submit}
                        noValidate
                    >
                        <h1 className="process-one-title">CONFIRMATION CODE</h1>
                        <p className="process-one-instruction">
                            Please enter the seven digit code we sent to your
                            phone number.
                        </p>
                        <input
                            placeholder="Confirmation Code"
                            id="code"
                            name="code"
                            type="number"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className={
                                code.length === 0
                                    ? "process-one-code-input"
                                    : "process-one-code-input-filled"
                            }
                        />
                        <p
                            className="process-one-didnt-get-code"
                            onClick={resendSms}
                        >
                            I didn’t get the code. Re-send SMS.
                        </p>
                        <button
                            type="submit"
                            disabled={!disabled2}
                            className="process-one-button"
                        >
                            SUBMIT
                        </button>
                    </form>{" "}
                </>
            ) : (
                <>
                    <h1 className="process-one-title">ADD A PHONE NUMBER</h1>
                    <form
                        className="process-one-form"
                        onSubmit={sendCode}
                        noValidate
                    >
                        <div className="process-one-form-phone">
                            <div className="process-one-format-arrow">
                                <span className="process-one-format">
                                    {format}
                                </span>
                                <img
                                    src={selectArrow}
                                    className="process-one-arrow"
                                    alt="select"
                                />
                            </div>
                            <input
                                placeholder="Phone Number"
                                id="phone"
                                name="phone"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={
                                    phone.length === 0
                                        ? "process-one-input"
                                        : "process-one-input-filled"
                                }
                            />
                            {phone.length > 0 && (
                                <img
                                    src={checkmarkGreen}
                                    className="process-one-checkmark"
                                    alt="checkmark"
                                />
                            )}
                        </div>
                        <p className="process-one-instruction">
                            This will secure your account by texting a short
                            confirmation code to your phone when logging in.
                        </p>
                        <button
                            type="submit"
                            disabled={!disabled}
                            className="process-one-button"
                        >
                            SEND CODE
                        </button>
                    </form>{" "}
                </>
            )}
        </div>
    );
};

export default Verification;
