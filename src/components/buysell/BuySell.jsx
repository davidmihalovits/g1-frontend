import React, { useState } from "react";
import "./BuySell.sass";
import { connect, useSelector } from "react-redux";
import { buy } from "../../redux/actions/actions";
import coin from "../../assets/coin.svg";
import gold_standard from "../../assets/gold_standard.svg";
import selectArrow from "../../assets/selectArrow.svg";
import convert from "../../assets/convert.svg";
import account from "../../assets/account.svg";

const BuySell = (props) => {
    const reducer = useSelector((state) => state.reducers);

    const [dropDown, setDropDown] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(
        reducer.accounts.length !== 0 && reducer.accounts[0].currency
    );
    const [selectedBalance, setSelectedBalance] = useState(
        reducer.accounts.length !== 0 && reducer.accounts[0].balance
    );
    const [amount1, setAmount1] = useState("");
    const [amount2, setAmount2] = useState("");

    const disabled = amount1.length !== 0 && amount2.length !== 0;

    return (
        <div className="buysell-container">
            <h1 className="buysell-title">BUY / SELL</h1>
            <div className="buysell-box">
                <h2 className="buysell-box-title">CRYPTOCURRENCY</h2>
                <div className="buysell-box-cryptocurrency">
                    <img
                        src={coin}
                        className="buysell-box-coin-icon"
                        alt="coin"
                    />
                    <span className="buysell-box-coin">Gold Coin</span>
                    <span className="buysell-box-balance">
                        {reducer.user.balance}
                    </span>
                </div>
                <h2 className="buysell-box-title">PAYMENT METHOD</h2>
                {reducer.accounts.length !== 0 ? (
                    <>
                        <div
                            className="buysell-box-accounts"
                            onClick={() => setDropDown(!dropDown)}
                        >
                            <img
                                src={gold_standard}
                                className="buysell-box-accounts-gold-icon"
                                alt="gold icon"
                            />
                            <div className="buysell-box-accounts-wallet-balance">
                                <div className="buysell-box-accounts-currency">
                                    {selectedWallet} Wallet
                                </div>
                                <div className="buysell-box-accounts-balance">
                                    {selectedBalance}
                                </div>
                            </div>
                            <img
                                src={selectArrow}
                                className="buysell-box-accounts-select-arrow"
                                alt="select"
                            />
                        </div>
                        <div className="buysell-box-dropdown-container">
                            {dropDown && (
                                <div className="buysell-box-dropdown">
                                    {reducer.accounts.length !== 0 &&
                                        reducer.accounts.map((acc) => {
                                            return (
                                                <div
                                                    key={acc.id}
                                                    className="buysell-box-dropdown-accounts"
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
                                                        className="buysell-box-dropdown-accounts-gold-icon"
                                                        alt="gold icon"
                                                    />
                                                    <div className="buysell-box-dropdown-accounts-wallet-balance">
                                                        <div className="buysell-box-dropdown-accounts-currency">
                                                            {acc.currency}{" "}
                                                            Wallet
                                                        </div>
                                                        <div className="buysell-box-dropdown-accounts-balance">
                                                            {acc.balance}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            )}
                        </div>
                        <h2 className="buysell-box-title">AMOUNT</h2>
                        <p className="buysell-box-limit">
                            Weekly limit: $100,000
                        </p>
                        <div className="buysell-box-convert">
                            <div className="buysell-box-amount-box">
                                <input
                                    placeholder="Amount"
                                    id="amount1"
                                    name="amount1"
                                    type="text"
                                    value={amount1 === 0 ? "" : amount1}
                                    onChange={(e) => {
                                        setAmount1(e.target.value);
                                        setAmount2(e.target.value / 1754.888);
                                    }}
                                    className={
                                        amount1.length === 0
                                            ? "buysell-box-amount"
                                            : "buysell-box-amount-filled"
                                    }
                                />
                                <p className="buysell-box-input-currency">
                                    {selectedWallet}
                                </p>
                            </div>
                            <img
                                src={convert}
                                alt="convert"
                                className="buysell-box-convert-icon"
                            />
                            <div className="buysell-box-amount-box">
                                <input
                                    placeholder="Amount"
                                    id="amount2"
                                    name="amount2"
                                    type="text"
                                    value={amount2 === 0 ? "" : amount2}
                                    onChange={(e) => {
                                        setAmount2(e.target.value);
                                        setAmount1(e.target.value * 1754.888);
                                    }}
                                    className={
                                        amount2.length === 0
                                            ? "buysell-box-amount"
                                            : "buysell-box-amount-filled"
                                    }
                                />
                                <img
                                    className="buysell-box-input-coin"
                                    src={coin}
                                    alt=""
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div>No account/wallet found.</div>
                )}
            </div>
            {reducer.accounts.length !== 0 && (
                <>
                    <div className="buysell-confirmation-box">
                        <h2 className="buysell-confirmation-box-title">
                            YOU ARE BUYING
                        </h2>
                        <div className="buysell-confirmation-box-amount-coin">
                            <p className="buysell-confirmation-box-amount">
                                {Number(amount2).toFixed(3)}
                            </p>
                            <img
                                src={coin}
                                alt="coin"
                                className="buysell-confirmation-box-coin"
                            />
                        </div>
                        <p className="buysell-confirmation-box-current">
                            @1754.88 per G1
                        </p>
                        <hr className="buysell-confirmation-box-line" />
                        <div className="buysell-confirmation-box-details">
                            <div className="buysell-confirmation-box-detail">
                                <img
                                    src={gold_standard}
                                    alt="gold"
                                    className="buysell-confirmation-box-icon"
                                />
                                <div>
                                    <p className="buysell-confirmation-box-method">
                                        PAYMENT METHOD
                                    </p>
                                    <p className="buysell-confirmation-box-wallet">
                                        {selectedWallet}
                                    </p>
                                </div>
                            </div>
                            <div className="buysell-confirmation-box-detail">
                                <div></div>
                                <hr className="buysell-confirmation-box-line" />
                            </div>
                            <div className="buysell-confirmation-box-detail">
                                <img
                                    src={account}
                                    alt="account"
                                    className="buysell-confirmation-box-icon"
                                />
                                <div>
                                    <p className="buysell-confirmation-box-method">
                                        DEPOSIT TO
                                    </p>
                                    <p className="buysell-confirmation-box-wallet">
                                        G1 Wallet
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="buysell-confirmation-box-line" />
                        <div className="buysell-confirmation-box-total">
                            <p className="buysell-confirmation-box-start">
                                {Number(amount2).toFixed(3)} G1
                            </p>
                            <p className="buysell-confirmation-box-end">
                                {selectedWallet}
                                {Number(amount1).toFixed(3)}
                            </p>
                        </div>
                        <div className="buysell-confirmation-box-total">
                            <p className="buysell-confirmation-box-start">
                                G1 fee
                            </p>
                            <p className="buysell-confirmation-box-end">
                                {selectedWallet}
                                {Number(amount1).toFixed(3) / 100}
                            </p>
                        </div>
                        <div className="buysell-confirmation-box-total">
                            <p className="buysell-confirmation-box-start">
                                Total
                            </p>
                            <p className="buysell-confirmation-box-end">
                                {selectedWallet}
                                {Number(
                                    parseFloat(Number(amount1).toFixed(3)) +
                                        parseFloat(
                                            Number(amount1).toFixed(3) / 100
                                        )
                                ).toFixed(3)}
                            </p>
                        </div>
                    </div>
                    <div className="buysell-box-button-container">
                        <p className="buysell-box-button-fees">
                            Learn more about our fees here
                        </p>
                        <button
                            className="buysell-box-button"
                            disabled={!disabled}
                            onClick={() => {
                                props.buy({
                                    currency: selectedWallet,
                                    amount: Number(
                                        parseFloat(Number(amount1).toFixed(3)) +
                                            parseFloat(
                                                Number(amount1).toFixed(3) / 100
                                            )
                                    ).toFixed(3),
                                    goldAmount: amount2,
                                });
                                setAmount1("");
                                setAmount2("");
                            }}
                        >
                            BUY G1
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default connect(null, { buy })(BuySell);
