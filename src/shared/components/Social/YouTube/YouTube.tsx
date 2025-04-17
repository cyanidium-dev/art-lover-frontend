import React from "react";

type Props = {
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
};

const YouTube: React.FC<Props> = ({
    className,
    width = 40,
    height = 40,
    fill = "var(--main-dark-color)",
    stroke="var(--main-dark-color)",
    
}) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M23.3329 20.0003L17.4996 23.3337V16.667L23.3329 20.0003Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.69318"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.47825 21.2742V18.9142C3.47825 14.0892 3.47825 11.6759 4.98658 10.1242C6.49658 8.57086 8.87325 8.5042 13.6249 8.3692C15.8749 8.30586 18.1749 8.26086 20.1449 8.26086C22.1149 8.26086 24.4132 8.30586 26.6649 8.3692C31.4166 8.5042 33.7932 8.57086 35.3016 10.1242C36.8099 11.6775 36.8116 14.0909 36.8116 18.9142V21.2725C36.8116 26.0992 36.8116 28.5109 35.3032 30.0642C33.7932 31.6159 31.4182 31.6842 26.6649 31.8175C24.4149 31.8825 22.1149 31.9275 20.1449 31.9275C18.1749 31.9275 15.8766 31.8825 13.6249 31.8175C8.87325 31.6842 6.49658 31.6175 4.98658 30.0642C3.47658 28.5109 3.47825 26.0975 3.47825 21.2742Z"
            stroke={stroke}
            strokeWidth="3"
        />
    </svg>
);

export default YouTube;
