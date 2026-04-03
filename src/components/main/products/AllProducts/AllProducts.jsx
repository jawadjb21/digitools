import React from 'react';
import ProductCard from '../../../ui/ProductCard';

const AllProducts = ({ products, selectedProducts, setSelectedProducts }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-10 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
            {
                products.map(product => <ProductCard key={product.id} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;