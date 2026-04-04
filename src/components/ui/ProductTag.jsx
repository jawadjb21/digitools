import React from 'react';

const ProductTag = ({ tag, popularSubscription }) => {
    return (
        <span className={`absolute -top-2 ${popularSubscription ? "left-1/2 -translate-x-1/2" : "right-2"} ${popularSubscription ? "text-[#BD4D00]" : "text-zinc-500"} px-2 rounded-2xl ${popularSubscription ? "bg-[#FEF3C7]" : tag === "new" ? "bg-green-400" : tag === "popular" ? "bg-purple-400" : "bg-yellow-400"}`}>{tag}</span>
    );
};

export default ProductTag;