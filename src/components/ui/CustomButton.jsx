import React from 'react';

const CustomButton = ({ text }) => {
    return (
        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#627382] rounded-2xl px-3 py-1.5 text-white'>{text}</button>
    );
};

export default CustomButton;