import React from "react";
import "./Dashboard.sass";
import coin from "../../assets/coin.svg";
import plus from "../../assets/plus.svg";
import selectArrow from "../../assets/selectArrow.svg";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
    const data = [
        { price: "Page A", date: 4000, pv: 2400, amt: 2400 },
        { price: "Page B", date: 3000, pv: 1398, amt: 2210 },
        { price: "Page C", date: 2000, pv: 6800, amt: 2290 },
        { price: "Page D", date: 2780, pv: 3908, amt: 2000 },
        { price: "Page E", date: 1890, pv: 4800, amt: 2181 },
        { price: "Page F", date: 2390, pv: 3800, amt: 2500 },
        { price: "Page G", date: 3490, pv: 4300, amt: 2100 },
        { price: "Page A", date: 4000, pv: 2400, amt: 2400 },
        { price: "Page B", date: 3000, pv: 1398, amt: 2210 },
        { price: "Page C", date: 2000, pv: 9200, amt: 2290 },
        { price: "Page D", date: 2780, pv: 3908, amt: 2000 },
        { price: "Page E", date: 1890, pv: 4800, amt: 2181 },
        { price: "Page F", date: 2390, pv: 3800, amt: 2500 },
        { price: "Page G", date: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">MY PORTFOLIO</h2>
            <div className="balance-box">
                <div className="balance-coin-div">
                    <p className="my-balance">0</p>
                    <img src={coin} className="balance-coin" alt="coin" />
                </div>
                <p className="total-balance">TOTAL BALANCE</p>
                <hr className="balance-box-line" />
                <button
                    className="add-new-account-button"
                    onClick={() => alert("Add an account.")}
                >
                    <img src={plus} className="plus-icon" alt="plus" />
                    Add a new account
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
                        <AreaChart data={data}>
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
                                separator={" - "}
                                cursor={{ stroke: "#D8D8D8", strokeWidth: 0.5 }}
                            />

                            <Area
                                activeDot={{
                                    stroke: "#Fff",
                                    strokeWidth: 3,
                                    r: 6,
                                }}
                                strokeWidth={4}
                                type="monotone"
                                dataKey="uv"
                                stroke="#DC9A00"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                            />

                            <Area
                                activeDot={{
                                    stroke: "#Fff",
                                    strokeWidth: 3,
                                    r: 6,
                                }}
                                strokeWidth={4}
                                type="monotone"
                                dataKey="pv"
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

export default Dashboard;
