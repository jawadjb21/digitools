import React from 'react';

const OutlineButton = ({ children }) => {
    return (
        <button className="btn border rounded-2xl border-[#4F39F6] bg-linear-to-r from-[#4F39F6] to-[#627382] bg-clip-text text-transparent">{children}</button>);
};

export default OutlineButton;