import React from 'react';

const CustomButton = ({ text, forBuying, onClick, disabled = false }) => {
    return (
        <button onClick={onClick} className={`btn bg-linear-to-r from-[#4F39F6] to-[#627382] rounded-2xl px-3 py-1.5 text-white ${forBuying && "w-full"}`} disabled={disabled}>{text}</button>
    );
};

export default CustomButton;