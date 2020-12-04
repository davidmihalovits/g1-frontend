import React from "react";

const CustomTooltip = (props) => {
    return (
        <div
            style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "0px 2px 13px rgba(147, 147, 147, 0.420771)",
            }}
        >
            {props.payload[0] && (
                <div style={{ textAlign: "left" }}>
                    <p
                        style={{
                            color: "#2E4267",
                            fontWeight: "900",
                            fontSize: "14px",
                        }}
                    >
                        {props.payload[0].payload.price}
                    </p>
                    <p
                        style={{
                            color: "#858585",
                            fontWeight: "300",
                            fontSize: "12px",
                        }}
                    >
                        {props.payload[0].payload.date}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CustomTooltip;
