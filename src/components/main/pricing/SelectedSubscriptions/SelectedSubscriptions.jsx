import React from 'react';
import SelectedSubscriptionCard from '../../../ui/SelectedSubscriptionCard';


const SelectedSubscriptions = ({ selectedSubscriptions, setSelectedSubscriptions }) => {
    const prices = selectedSubscriptions.map(subscription => subscription.price);
    let total = 0;
    total = prices.map(price => total += Number(price));
    total = total.reverse();
    console.log(total[0]);
    return (
        <div className='flex flex-col justify-center items-start text-left gap-y-3 md:gap-5 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
            <h6 className='font-bold text-xl'>Your Cart</h6>
            {selectedSubscriptions.length > 0 ?
                selectedSubscriptions.map(subscription => <SelectedSubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></SelectedSubscriptionCard>) : <div className='flex flex-col justify-center items-center text-center col-span-full p-5 mx-auto'><h2 className='font-bold text-3xl'>No subscriptions purchased</h2><p className='font-semibold text-xl text-zinc-500'>Please purchase a subscription.</p></div>
            }
            {
                selectedSubscriptions.length > 0 && <div className='flex justify-between items-center w-full'><span className='font-bold text-2xl'>Total:</span><span className='font-bold text-2xl'>{`$${total[0].toFixed(2)}`}</span></div>
            }
        </div>

    );
};

export default SelectedSubscriptions;