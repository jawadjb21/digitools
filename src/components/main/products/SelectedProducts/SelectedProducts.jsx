import React from 'react';
import SelectedProductCard from '../../../ui/SelectedProductCard';


const SelectedProducts = ({ selectedProducts, setSelectedProducts }) => {
    return (
        <div className='flex flex-col justify-center items-start text-left gap-y-3 md:gap-5 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
            <h6 className='font-bold text-xl'>Your Cart</h6>
            {
                selectedProducts.map(product => <SelectedProductCard key={product.id} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></SelectedProductCard>)
            }
        </div>

    );
};

export default SelectedProducts;