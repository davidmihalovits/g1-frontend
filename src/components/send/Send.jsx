import React, { useState } from "react";
import "./Send.sass";
import { connect, useSelector } from "react-redux";
import { send } from "../../redux/actions/actions";
import coin from "../../assets/coin.svg";

const Send = (props) => {
    const reducer = useSelector((state) => state.reducers);

    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");

    const disabled = amount.length !== 0;

    return (
        <div className="send-container">
            <h1 className="send-title">SEND G1</h1>
            <div className="send-box">
                <h2 className="send-box-title" style={{ marginTop: 0 }}>
                    RECIPIENT
                </h2>
                <input
                    placeholder="Recipient's email address"
                    id="recipient"
                    name="recipient"
                    type="email"
                    value={recipient}
                    onChange={(e) => {
                        setRecipient(e.target.value);
                    }}
                    className={
                        recipient.length === 0
                            ? "send-box-input"
                            : "send-box-input-filled"
                    }
                />
                <div className="send-box-goldcoin">
                    <img
                        src={coin}
                        className="send-box-goldcoin-icon"
                        alt="coin"
                    />
                    <span className="send-box-goldcoin-wallet">G1 Wallet</span>
                    <span className="send-box-goldcoin-balance">
                        {reducer.user.balance}
                    </span>
                </div>
                <div className="send-box-amount-container">
                    <input
                        placeholder="G1 Amount"
                        id="amount"
                        name="amount"
                        type="text"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        className={
                            amount.length === 0
                                ? "send-box-input"
                                : "send-box-input-filled"
                        }
                    />
                    <img className="send-box-input-coin" src={coin} alt="" />
                </div>
                <h2 className="send-box-title">NOTE</h2>
                <input
                    placeholder="Optional message to recipient"
                    id="note"
                    name="note"
                    type="text"
                    value={note}
                    onChange={(e) => {
                        setNote(e.target.value);
                    }}
                    className={
                        note.length === 0
                            ? "send-box-input"
                            : "send-box-input-filled"
                    }
                />
            </div>
            {reducer.user.balance > 0 && (
                <div className="send-box-button-container">
                    <button
                        className="send-box-button"
                        disabled={!disabled}
                        onClick={() => {
                            props.send({
                                recipient: recipient,
                                amount: amount,
                            });
                            setAmount("");
                            setNote("");
                        }}
                    >
                        SEND G1
                    </button>
                    <p className="send-box-button-cancel">Cancel</p>
                </div>
            )}
        </div>
    );
};

export default connect(null, { send })(Send);
