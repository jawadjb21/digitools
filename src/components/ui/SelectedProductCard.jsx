import React from 'react';
import { toast } from 'react-toastify';

const SelectedProductCard = ({ product, selectedProducts, setSelectedProducts }) => {
    const handleDeletedProducts = (deletedProduct) => {
        const filteredProducts = selectedProducts.filter(product => product.name !== deletedProduct.name);
        setSelectedProducts(filteredProducts);
        toast.success(`${product.name} has been deleted!`)
    }
    return (
        <div className='flex justify-between items-center'>
            <div>
                <button className='btn btn-ghost text-2xl rounded-2xl bg-[#e7e8ef]'>{product.icon}</button>
                <div>
                    <h5 className='font-bold text-xl text-zinc-800'>{product.name}</h5>
                    <span className='text-2xl text-zinc-600'>{product.price}</span>
                </div>
                <button onClick={() => handleDeletedProducts(product)} className='btn btn-ghost text-red'>Remove</button>
            </div>
        </div>
    );
};

export default SelectedProductCard;