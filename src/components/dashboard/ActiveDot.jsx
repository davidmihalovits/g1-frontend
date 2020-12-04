import React from "react";

export class ActiveDot extends React.Component {
    render() {
        return (
            <svg
                width="29"
                height="29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                x={this.props.cx - 15}
                y={this.props.cy - 15}
            >
                <g filter="url(#filter0_d)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5 21C19.1944 21 23 17.1944 23 12.5C23 7.80558 19.1944 4 14.5 4C9.80558 4 6 7.80558 6 12.5C6 17.1944 9.80558 21 14.5 21Z"
                        fill="white"
                    />
                </g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4999 17.5999C17.3166 17.5999 19.5999 15.3166 19.5999 12.4999C19.5999 9.68325 17.3166 7.3999 14.4999 7.3999C11.6833 7.3999 9.3999 9.68325 9.3999 12.4999C9.3999 15.3166 11.6833 17.5999 14.4999 17.5999Z"
                    fill="url(#paint0_linear)"
                />
                <defs>
                    <filter
                        id="filter0_d"
                        x="0"
                        y="0"
                        width="29"
                        height="29"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="3" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.332229 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear"
                        x1="19.5999"
                        y1="17.5999"
                        x2="19.5999"
                        y2="7.3999"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#DC9A00" />
                        <stop offset="1" stopColor="#FAB95B" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }
}
