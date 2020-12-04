import React, { useState } from "react";
import "./AddNewAccount.sass";
import { connect, useSelector } from "react-redux";
import { addAccount } from "../../redux/actions/actions";
import account from "../../assets/account.svg";
import cross from "../../assets/cross.svg";
import selectRight from "../../assets/selectRight.svg";
import selectArrow from "../../assets/selectArrow.svg";
import gold_standard from "../../assets/gold_standard.svg";

const AddNewAccount = (props) => {
    const [addBankAccount, setAddBankAccount] = useState(false);
    const [currency, setCurrency] = useState("EUR");
    const [dropDown, setDropDown] = useState(false);
    const [accountNumber, setAccountNumber] = useState("");

    const reducer = useSelector((state) => state.reducers);

    return (
        <div className="add-new-account-container">
            <img
                src={cross}
                alt=""
                className="add-new-account-close"
                onClick={() => props.setNewAccountModal(false)}
            />
            <h1 className="add-new-account-title">ADD NEW ACCOUNT</h1>
            {addBankAccount ? (
                <div className="add-bank-account-container">
                    <div
                        className="add-new-account-selected"
                        onClick={() => setDropDown(!dropDown)}
                    >
                        <img
                            src={gold_standard}
                            className="add-new-account-coin"
                            alt="select"
                        />
                        <span>{currency}</span>
                        <img
                            src={selectArrow}
                            className="add-new-account-select-arrow"
                            alt="select"
                        />
                    </div>
                    {dropDown && (
                        <div className="add-new-account-dropdown">
                            <div className="add-new-account-select-currency">
                                <img
                                    src={gold_standard}
                                    className="add-new-account-coin"
                                    alt="select"
                                />
                                <span
                                    onClick={() => {
                                        setCurrency("EUR");
                                        setDropDown(false);
                                    }}
                                >
                                    EUR
                                </span>
                            </div>
                            <div className="add-new-account-select-currency">
                                <img
                                    src={gold_standard}
                                    className="add-new-account-coin"
                                    alt="select"
                                />
                                <span
                                    onClick={() => {
                                        setCurrency("USD");
                                        setDropDown(false);
                                    }}
                                >
                                    USD
                                </span>
                            </div>
                            <div className="add-new-account-select-currency">
                                <img
                                    src={gold_standard}
                                    className="add-new-account-coin"
                                    alt="select"
                                />
                                <span
                                    onClick={() => {
                                        setCurrency("HUF");
                                        setDropDown(false);
                                    }}
                                >
                                    HUF
                                </span>
                            </div>
                            <div className="add-new-account-select-currency">
                                <img
                                    src={gold_standard}
                                    className="add-new-account-coin"
                                    alt="select"
                                />
                                <span
                                    onClick={() => {
                                        setCurrency("CAD");
                                        setDropDown(false);
                                    }}
                                >
                                    CAD
                                </span>
                            </div>
                            <div className="add-new-account-select-currency">
                                <img
                                    src={gold_standard}
                                    className="add-new-account-coin"
                                    alt="select"
                                />
                                <span
                                    onClick={() => {
                                        setCurrency("THB");
                                        setDropDown(false);
                                    }}
                                >
                                    THB
                                </span>
                            </div>
                        </div>
                    )}
                    <input
                        placeholder="Account Number"
                        id="accountNumber"
                        name="accountNumber"
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className={
                            accountNumber.length === 0
                                ? "add-new-account-number"
                                : "add-new-account-number-filled"
                        }
                    />
                    <button
                        className="add-new-account-button"
                        onClick={() => {
                            props.addAccount({
                                email: reducer.user.email,
                                currency: currency,
                            });
                            props.setNewAccountModal(false);
                        }}
                    >
                        ADD
                    </button>
                </div>
            ) : (
                <>
                    <div
                        className="add-new-bank-account"
                        onClick={() => setAddBankAccount(true)}
                    >
                        <img
                            src={account}
                            alt=""
                            className="add-new-icon-account"
                        />
                        <div className="add-new-bank-account-middle">
                            <h2 className="add-new-bank-account-middle-title">
                                Bank Account
                            </h2>
                            <p className="add-new-bank-account-middle-description">
                                Invest large amounts
                            </p>
                            <p className="add-new-bank-account-middle-instruction">
                                Add a Bank account that can make and accept
                                faster payments. Ones verifed, you can withdraw
                                to this account.
                            </p>
                        </div>
                        <img
                            src={selectRight}
                            alt=""
                            className="add-new-icon-select"
                        />
                    </div>
                    <hr className="add-new-account-line" />
                    <div className="add-new-bank-account">
                        <img
                            src={account}
                            alt=""
                            className="add-new-icon-account"
                        />
                        <div className="add-new-bank-account-middle">
                            <h2 className="add-new-bank-account-middle-title">
                                Credit Card
                            </h2>
                            <p className="add-new-bank-account-middle-description">
                                Add another currency
                            </p>
                            <p className="add-new-bank-account-middle-instruction">
                                Use any VISA and MasterCard. Add a bank or
                                wallet to sell.
                            </p>
                        </div>
                        <img
                            src={selectRight}
                            alt=""
                            className="add-new-icon-select"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default connect(null, { addAccount })(AddNewAccount);
