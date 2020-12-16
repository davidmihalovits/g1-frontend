import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Dashboard.sass";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getAccounts } from "../../redux/actions/actions";
import { Provider } from "react-redux";
import { store } from "../../index";
import coin from "../../assets/coin.svg";
import plus from "../../assets/plus.svg";
import selectArrow from "../../assets/selectArrow.svg";
import gold_standard from "../../assets/gold_standard.svg";
import more from "../../assets/more.svg";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ActiveDot } from "./ActiveDot";
import CustomTooltip from "./CustomTooltip";
import AddNewAccount from "../addNewAccount/AddNewAccount";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Dashboard = (props) => {
    const data = [
        { price: "USD 1332.76", p: 1332.76, date: "10.11.2020 18:19:22" },
        { price: "USD 1412.29", p: 1412.29, date: "10.11.2020 18:19:22" },
        { price: "USD 1729.94", p: 1729.94, date: "10.11.2020 18:19:22" },
        { price: "USD 2582.41", p: 2582.41, date: "10.11.2020 18:19:22" },
        { price: "USD 1973.55", p: 1973.55, date: "10.11.2020 18:19:22" },
        { price: "USD 1894.80", p: 1894.8, date: "10.11.2020 18:19:22" },
        { price: "USD 1203.36", p: 1203.36, date: "10.11.2020 18:19:22" },
        { price: "USD 2398.72", p: 2398.72, date: "10.11.2020 18:19:22" },
        { price: "USD 2155.61", p: 2155.61, date: "10.11.2020 18:19:22" },
        { price: "USD 1781.11", p: 1781.11, date: "10.11.2020 18:19:22" },
        { price: "USD 1332.76", p: 1332.76, date: "10.11.2020 18:19:22" },
        { price: "USD 1412.29", p: 1412.29, date: "10.11.2020 18:19:22" },
        { price: "USD 1729.94", p: 1729.94, date: "10.11.2020 18:19:22" },
        { price: "USD 2582.41", p: 2582.41, date: "10.11.2020 18:19:22" },
        { price: "USD 1973.55", p: 1973.55, date: "10.11.2020 18:19:22" },
        { price: "USD 1894.80", p: 1894.8, date: "10.11.2020 18:19:22" },
        { price: "USD 1203.36", p: 1203.36, date: "10.11.2020 18:19:22" },
        { price: "USD 2398.72", p: 2398.72, date: "10.11.2020 18:19:22" },
        { price: "USD 2155.61", p: 2155.61, date: "10.11.2020 18:19:22" },
        { price: "USD 1781.11", p: 1781.11, date: "10.11.2020 18:19:22" },
        { price: "USD 2155.61", p: 2155.61, date: "10.11.2020 18:19:22" },
        { price: "USD 1781.11", p: 1781.11, date: "10.11.2020 18:19:22" },
        { price: "USD 1332.76", p: 1332.76, date: "10.11.2020 18:19:22" },
        { price: "USD 1412.29", p: 1412.29, date: "10.11.2020 18:19:22" },
        { price: "USD 1729.94", p: 1729.94, date: "10.11.2020 18:19:22" },
    ];

    const [newAccountModal, setNewAccountModal] = useState(false);

    const reducer = useSelector((state) => state.reducers);

    useEffect(() => {
        props.getAccounts();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    {newAccountModal && (
                        <AddNewAccount
                            setNewAccountModal={setNewAccountModal}
                        />
                    )}
                </Provider>
            </React.StrictMode>,
            document.getElementById("modal")
        );
    }, [newAccountModal]);

    if (newAccountModal) {
        document.getElementById("root").style.opacity = "0.1";
        document.body.classList.add("modal-open");
        document.getElementById("root").style.pointerEvents = "none";
    } else {
        document.getElementById("root").style.opacity = "1";
        document.body.classList.remove("modal-open");
        document.getElementById("root").style.pointerEvents = "auto";
    }

    dayjs.extend(relativeTime);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">MY PORTFOLIO</h2>
            <div className="balance-box">
                <div className="balance-coin-div">
                    <p className="my-balance">{reducer.user.balance}</p>
                    <img src={coin} className="balance-coin" alt="coin" />
                </div>
                <p className="total-balance">TOTAL BALANCE</p>
                <hr className="balance-box-line" />
                {reducer.accounts.length > 0 && (
                    <div className="buy-send-gold-container">
                        <Link to="/buy-sell" className="buy-send-gold-link">
                            <button className="buy-send-gold-button">
                                BUY G1
                            </button>
                        </Link>
                        <Link to="/send" className="buy-send-gold-link">
                            <button className="buy-send-gold-button">
                                SEND G1
                            </button>
                        </Link>
                    </div>
                )}
                {reducer.accounts.length !== 0 &&
                    reducer.accounts.map((acc) => {
                        return (
                            <div key={acc.id} className="accounts-container">
                                <img
                                    src={gold_standard}
                                    className="accounts-gold-icon"
                                    alt="gold icon"
                                />
                                <div className="accounts-currency-created">
                                    <div className="accounts-currency">
                                        {acc.currency}
                                    </div>
                                    <div className="accounts-created">
                                        {dayjs(acc.createdAt).format(
                                            "DD.MM.YYYY"
                                        )}
                                    </div>
                                </div>
                                <div className="accounts-balance">
                                    {acc.balance}
                                </div>
                                <img
                                    src={more}
                                    className="accounts-more"
                                    alt="more"
                                />
                            </div>
                        );
                    })}
                <button
                    className="add-new-account-button"
                    onClick={() => setNewAccountModal(true)}
                >
                    <img src={plus} className="plus-icon" alt="plus" />
                    <span className="add-new-account">Add a new account</span>
                </button>
            </div>
            <h2 className="dashboard-title">PRICE CHART</h2>
            <div className="chart-box">
                <div className="chart-box-top">
                    <p className="chart-box-price">
                        <span className="currency">USD</span> <br />
                        <span className="price">1754.88</span>
                    </p>
                    <div className="chart-box-filter">
                        <span>USD</span>
                        <img
                            src={selectArrow}
                            className="chart-box-filter-arrow"
                            alt="select"
                        />
                    </div>
                    <div className="chart-box-filter">
                        <span>1D</span>
                        <img
                            src={selectArrow}
                            className="chart-box-filter-arrow"
                            alt="select"
                        />
                    </div>
                </div>
                <hr className="chart-box-line" />
                <div className="chart-container">
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorUv"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#FAB95B"
                                        stopOpacity={0.5}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#FAB95B"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="colorPv"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#FAB95B"
                                        stopOpacity={0.5}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#FAB95B"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            <XAxis dataKey="price" hide />

                            <Tooltip
                                content={<CustomTooltip data={data} />}
                                cursor={false}
                            />

                            <Area
                                activeDot={<ActiveDot />}
                                strokeWidth={4}
                                type="monotone"
                                dataKey="p"
                                stroke="#DC9A00"
                                fillOpacity={1}
                                fill="url(#colorPv)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { getAccounts })(Dashboard);
