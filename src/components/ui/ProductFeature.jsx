import React from 'react';
import { TiTickOutline } from "react-icons/ti";

const ProductFeature = ({ feature }) => {
    return (
        <li className='flex justify-start items-center gap-2'>
            <TiTickOutline className='text-green-500' /> <p className='text-gray-700 w-full h-full'>{feature}</p>
        </li>
    );
};

export default ProductFeature;