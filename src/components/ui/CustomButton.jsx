import React from 'react';

const CustomButton = ({ text, forBuying, onClick, disabled = false, popularSubscription = false }) => {
    return (
        <button onClick={onClick} className={`btn rounded-2xl px-3 py-1.5 ${popularSubscription ? "text-[#4F39F6] bg-white" : "text-white bg-linear-to-r from-[#4F39F6] to-[#627382]"} ${forBuying && "w-full"}`} disabled={disabled}>{text}</button>
    );
};

export default CustomButton;