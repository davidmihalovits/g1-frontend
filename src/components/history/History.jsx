import React, { useEffect } from "react";
import "./History.sass";
import { connect, useSelector } from "react-redux";
import { getHistory } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import back from "../../assets/back.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const History = (props) => {
    const reducer = useSelector((state) => state.reducers);

    useEffect(() => {
        props.getHistory();
        // eslint-disable-next-line
    }, []);

    dayjs.extend(relativeTime);

    return (
        <div className="history-container">
            <Link to="/settings" className="history-back-link">
                <img src={back} alt="back" className="history-back-icon" /> Back
            </Link>
            <div className="history-box">
                <h1 className="history-title">TRANSACTION HISTORY</h1>
                {reducer.transactions.length > 0 &&
                    reducer.transactions.map((tr) => {
                        return (
                            <div key={tr.id} className="history-transaction">
                                <div className="history-transaction-type-completed">
                                    <p className="history-transaction-type">
                                        {tr.type}
                                    </p>
                                    <p className="history-transaction-completed">
                                        COMPLETED
                                    </p>
                                </div>
                                <p className="history-transaction-created">
                                    {dayjs(tr.createdAt).format("DD.MM.YYYY")}
                                </p>
                                <div className="history-transaction-amount-arrow-gold">
                                    <p className="history-transaction-amount">
                                        {Number(tr.amount).toFixed(3)}{" "}
                                        {tr.wallet}
                                    </p>
                                    {tr.type === "Buy" && (
                                        <img
                                            src={arrowRight}
                                            alt="arrow"
                                            className="history-transaction-arrow"
                                        />
                                    )}
                                    {tr.type === "Sell" && (
                                        <img src={arrowLeft} alt="arrow" />
                                    )}
                                    <p className="history-transaction-gold">
                                        {Number(tr.goldAmount).toFixed(3)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default connect(null, { getHistory })(History);
