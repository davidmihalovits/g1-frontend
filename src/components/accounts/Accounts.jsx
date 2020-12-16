import React, { useEffect } from "react";
import "./Accounts.sass";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getAccounts } from "../../redux/actions/actions";
import gold_standard from "../../assets/gold_standard.svg";
import coin from "../../assets/coin.svg";
import more from "../../assets/more2.svg";
import depositArrow from "../../assets/depositArrow.svg";
import withdrawArrow from "../../assets/withdrawArrow.svg";

const Accounts = (props) => {
    const reducer = useSelector((state) => state.reducers);

    useEffect(() => {
        props.getAccounts();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="accountswallets-container">
            <h1 className="accountswallets-title">ACCOUNTS</h1>
            <div className="accountswallets-box">
                <h2 className="accountswallets-box-title">YOUR ACCOUNTS</h2>
                <hr className="accountswallets-box-line" />
                {reducer.accounts.length !== 0 &&
                    reducer.accounts.map((acc) => {
                        return (
                            <div
                                key={acc.id}
                                className="accountswallets-wallet"
                            >
                                <div className="accountswallets-wallet-top">
                                    <img
                                        src={gold_standard}
                                        className="accountswallets-wallet-gold-icon"
                                        alt="gold icon"
                                    />
                                    <div>
                                        <div className="accountswallets-wallet-currency">
                                            {acc.currency} Wallet
                                        </div>
                                        <div className="accountswallets-wallet-balance">
                                            {acc.balance}
                                        </div>
                                    </div>
                                </div>
                                <div className="accountswallets-wallet-bottom">
                                    <Link
                                        to="/deposit"
                                        className="accountswallets-wallet-bottom-button-link"
                                    >
                                        <button className="accountswallets-wallet-bottom-button">
                                            <img
                                                src={depositArrow}
                                                alt="deposit"
                                                className="accountswallets-wallet-bottom-arrow"
                                            />
                                            Deposit
                                        </button>
                                    </Link>
                                    <Link
                                        to="/withdraw"
                                        className="accountswallets-wallet-bottom-button-link"
                                    >
                                        <button className="accountswallets-wallet-bottom-button">
                                            <img
                                                src={withdrawArrow}
                                                alt="withdraw"
                                                className="accountswallets-wallet-bottom-arrow"
                                            />
                                            Withdraw
                                        </button>
                                    </Link>
                                    <div className="accountswallets-wallet-bottom-button-link">
                                        <button className="accountswallets-wallet-bottom-button">
                                            <img
                                                src={more}
                                                className="accountswallets-wallet-bottom-more"
                                                alt="more"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <hr className="accountswallets-box-line" />
                            </div>
                        );
                    })}
                <div className="accountswallets-wallet">
                    <div className="accountswallets-wallet-top">
                        <img
                            src={coin}
                            className="accountswallets-wallet-gold-icon"
                            alt="gold icon"
                        />
                        <div>
                            <div className="accountswallets-wallet-currency">
                                G1 Wallet
                            </div>
                            <div className="accountswallets-wallet-balance">
                                {reducer.user.balance}
                            </div>
                        </div>
                    </div>
                    <div className="accountswallets-wallet-bottom">
                        <Link
                            to="/send"
                            className="accountswallets-wallet-bottom-button-link"
                        >
                            <button className="accountswallets-wallet-bottom-button">
                                Send
                            </button>
                        </Link>
                        <div className="accountswallets-wallet-bottom-button-link">
                            <button className="accountswallets-wallet-bottom-button">
                                Receive
                            </button>
                        </div>
                        <div className="accountswallets-wallet-bottom-button-link">
                            <button className="accountswallets-wallet-bottom-button">
                                <img
                                    src={more}
                                    className="accountswallets-wallet-bottom-more"
                                    alt="more"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { getAccounts })(Accounts);
