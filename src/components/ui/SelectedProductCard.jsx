import React from 'react';
import { toast } from 'react-toastify';

const SelectedProductCard = ({ product, selectedProducts, setSelectedProducts }) => {
    const handleDeletedProducts = (deletedProduct) => {
        const filteredProducts = selectedProducts.filter(product => product.name !== deletedProduct.name);
        setSelectedProducts(filteredProducts);
        toast.success(`${product.name} has been deleted!`)
    }
    return (
        <div className='flex justify-between items-center border bg-gray-100 rounded-2xl w-full px-3 py-1.5 shadow-sm hover:shadow-lg transition:shadow'>
            <div className='flex justify-between items-center gap-2'>
                <button className='btn btn-ghost text-2xl rounded-full bg-[#e7e8ef]'>{product.icon}</button>
                <div>
                    <h5 className='font-bold text-xl text-zinc-800'>{product.name}</h5>
                    <span className='text-md text-zinc-600'>{product.price}</span>
                </div>
            </div>
            <button onClick={() => handleDeletedProducts(product)} className='btn btn-ghost text-red-500 rounded-2xl'>Remove</button>
        </div>
    );
};

export default SelectedProductCard;