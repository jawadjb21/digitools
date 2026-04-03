import {React, use} from 'react';

const Products = ({ productsPromise }) => {
    const products = use(productsPromise);
    console.log(products);
    return (
        <div>

        </div>
    );
};

export default Products;