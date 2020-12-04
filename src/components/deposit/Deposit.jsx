import React, { useState, useEffect } from "react";
import "./Deposit.sass";
import { connect, useSelector } from "react-redux";
import { deposit, getAccounts } from "../../redux/actions/actions";
import mastercard from "../../assets/mastercard.svg";
import selectArrow from "../../assets/selectArrow.svg";
import gold_standard from "../../assets/gold_standard.svg";

const Deposit = (props) => {
    const reducer = useSelector((state) => state.reducers);

    const [dropDown, setDropDown] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(
        reducer.accounts.length !== 0 && reducer.accounts[0].currency
    );
    const [selectedBalance, setSelectedBalance] = useState(
        reducer.accounts.length !== 0 && reducer.accounts[0].balance
    );
    const [amount, setAmount] = useState("");

    const disabled = amount.length !== 0;

    return (
        <div className="deposit-container">
            <h1 className="deposit-title">DEPOSIT</h1>
            <div className="deposit-box">
                <h2 className="deposit-box-title">SELECT CREDIT CARD</h2>
                <div className="deposit-box-credit-card">
                    <img
                        src={mastercard}
                        className="deposit-box-mastercard"
                        alt="mastercard"
                    />
                    <span>**** **** **** 1234</span>
                    <img
                        src={selectArrow}
                        className="deposit-box-select-arrow"
                        alt="select"
                    />
                </div>
                <h2 className="deposit-box-title">DEPOSIT TO</h2>
                {reducer.accounts.length !== 0 ? (
                    <>
                        <div
                            className="deposit-box-accounts"
                            onClick={() => setDropDown(!dropDown)}
                        >
                            <img
                                src={gold_standard}
                                className="deposit-box-accounts-gold-icon"
                                alt="gold icon"
                            />
                            <div className="deposit-box-accounts-wallet-balance">
                                <div className="deposit-box-accounts-currency">
                                    {selectedWallet} Wallet
                                </div>
                                <div className="deposit-box-accounts-balance">
                                    {selectedBalance}
                                </div>
                            </div>
                            <img
                                src={selectArrow}
                                className="deposit-box-accounts-select-arrow"
                                alt="select"
                            />
                        </div>

                        <div className="deposit-box-dropdown-container">
                            {dropDown && (
                                <div className="deposit-box-dropdown">
                                    {reducer.accounts.length !== 0 &&
                                        reducer.accounts.map((acc) => {
                                            return (
                                                <div
                                                    key={acc.id}
                                                    className="deposit-box-dropdown-accounts"
                                                    onClick={() => {
                                                        setSelectedWallet(
                                                            acc.currency
                                                        );
                                                        setSelectedBalance(
                                                            acc.balance
                                                        );
                                                        setDropDown(false);
                                                    }}
                                                >
                                                    <img
                                                        src={gold_standard}
                                                        className="deposit-box-dropdown-accounts-gold-icon"
                                                        alt="gold icon"
                                                    />
                                                    <div className="deposit-box-dropdown-accounts-wallet-balance">
                                                        <div className="deposit-box-dropdown-accounts-currency">
                                                            {acc.currency}{" "}
                                                            Wallet
                                                        </div>
                                                        <div className="deposit-box-dropdown-accounts-balance">
                                                            {acc.balance}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            )}
                        </div>
                        <h2 className="deposit-box-title">AMOUNT</h2>
                        <input
                            placeholder="0.00"
                            id="amount"
                            name="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={
                                amount.length === 0
                                    ? "deposit-box-amount"
                                    : "deposit-box-amount-filled"
                            }
                        />
                    </>
                ) : (
                    <div>No account/wallet found.</div>
                )}
            </div>
            {reducer.accounts.length !== 0 && (
                <div className="deposit-box-button-container">
                    <button
                        className="deposit-box-button"
                        disabled={!disabled}
                        onClick={() => {
                            props.deposit({
                                deposit: amount,
                                currency: selectedWallet,
                            });
                            setSelectedBalance(
                                parseFloat(selectedBalance) + parseFloat(amount)
                            );
                            setAmount("");
                        }}
                    >
                        CONTINUE
                    </button>
                    <p className="deposit-box-button-cancel">Cancel</p>
                </div>
            )}
        </div>
    );
};

export default connect(null, { deposit, getAccounts })(Deposit);
