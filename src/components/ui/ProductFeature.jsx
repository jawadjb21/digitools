import React from 'react';
import { TiTickOutline } from "react-icons/ti";

const ProductFeature = ({ feature, popularSubscription = false }) => {
    return (
        <li className='flex justify-start items-center gap-2'>
            <TiTickOutline className={`${popularSubscription ? "text-white":"text-green-500"}`} /> <p className={`text-gray-700 ${popularSubscription && "text-white"} w-full h-full`}>{feature}</p>
        </li>
    );
};

export default ProductFeature;