import React from 'react';
import { toast } from 'react-toastify';

const SelectedSubscriptionCard = ({ subscription, selectedSubscriptions, setSelectedSubscriptions }) => {
    const handleDeletedSubscriptions = (deletedSubscription) => {
        const filteredProducts = selectedSubscriptions.filter(subscription => subscription.name !== deletedSubscription.name);
        setSelectedSubscriptions(filteredProducts);
        toast.success(`${subscription.name} has been deleted!`)
    }
    return (
        <div className='flex justify-between items-center border bg-gray-100 rounded-2xl w-full px-3 py-1.5 shadow-sm hover:shadow-lg transition:shadow'>
            <div className='flex justify-between items-center gap-2'>
                <button className='btn btn-ghost text-2xl rounded-full bg-[#e7e8ef]'>{subscription.icon}</button>
                <div>
                    <h5 className='font-bold text-xl text-zinc-800'>{subscription.name}</h5>
                    <span className='text-md text-zinc-600'>{subscription.price}</span>
                </div>
            </div>
            <button onClick={() => handleDeletedSubscriptions(subscription)} className='btn btn-ghost text-red-500 rounded-2xl'>Remove</button>
        </div>
    );
};

export default SelectedSubscriptionCard;