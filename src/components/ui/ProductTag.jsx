import React from 'react';

const ProductTag = ({ tag }) => {
    return (
        <span className={`absolute -top-2 right-2 ml-auto text-zinc-500 px-2 rounded-2xl ${tag === "new" ? "bg-green-400" : tag === "popular" ? "bg-purple-400" : "bg-yellow-400" }`}>{tag}</span>
    );
};

export default ProductTag;