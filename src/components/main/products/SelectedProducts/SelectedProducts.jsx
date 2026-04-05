import React from 'react';
import { toast } from 'react-toastify';
import SelectedProductCard from '../../../ui/SelectedProductCard';
import CustomButton from '../../../ui/CustomButton';


const SelectedProducts = ({ selectedProducts, setSelectedProducts }) => {
    const prices = selectedProducts.map(product => product.price);
    let total = 0;
    total = prices.map(price => total += Number(price));
    total = total.reverse();
    let isAnySelected = false;
    if(selectedProducts.length > 0){
        isAnySelected = true;
    }

    const handleCheckout = () => {
        setSelectedProducts([]);
        toast.success("Cart has been cleared!")
    }

    return (
        <div className='flex flex-col justify-center items-start text-left gap-y-3 md:gap-5 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
            <h6 className='font-bold text-xl'>Your Cart</h6>
            {selectedProducts.length > 0 ?
                selectedProducts.map(product => <SelectedProductCard key={product.id} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></SelectedProductCard>) : <div className='flex flex-col justify-center items-center text-center col-span-full p-5 mx-auto'><h2 className='font-bold text-3xl'>No service purchased</h2><p className='font-semibold text-xl text-zinc-500'>Please purchase a service.</p></div>
            }
            {
                selectedProducts.length > 0 && <div className='flex justify-between items-center w-full'><span className='font-bold text-2xl'>Total:</span><span className='font-bold text-2xl'>{`$${total[0].toFixed(2)}`}</span></div>
            }
            {
                isAnySelected && <CustomButton text={"Checkout"} forBuying={true} onClick={() => handleCheckout()} disabled={selectedProducts.length === 0}></CustomButton>
            }
        </div>

    );
};

export default SelectedProducts;