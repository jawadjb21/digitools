import React, { useState } from 'react';
import { toast } from "react-toastify";
import ProductFeature from './ProductFeature';
import CustomButton from './CustomButton';
import ProductTag from './ProductTag';

const SubscriptionCard = ({ subscription, selectedSubscriptions, setSelectedSubscriptions }) => {
    console.log(selectedSubscriptions, setSelectedSubscriptions);
    const [isSelected, setIsSelected] = useState(false);
    const handleSelectedSubscriptions = (subscription) => {
        const newSelectedSubscriptions = [...selectedSubscriptions, subscription];
        setSelectedSubscriptions(newSelectedSubscriptions);
        setIsSelected(true);
        toast.success(`${subscription.name} has been selected!`);
    }
    return (
        <div className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <ProductTag tag={subscription.tagType}></ProductTag>
            <button className='btn btn-ghost text-2xl rounded-2xl bg-[#e7e8ef]'>{subscription.icon}</button>
            <h5 className='font-bold text-xl text-zinc-800'>{subscription.name}</h5>
            <p className='font-medium text-zinc-500 h-full'>{subscription.description}</p>
            <p className='text-zinc-400 text-sm'>{`$`}<span className='font-bold text-2xl text-zinc-800'>{subscription.price}</span>{`/${subscription.period}`}</p>
            <ul className='list-none h-full'>
                {
                    subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature}></ProductFeature>)
                }
            </ul>
            <CustomButton text={"Subscribe"} forBuying={true} onClick={() => { handleSelectedSubscriptions(subscription) }} disabled={isSelected}></CustomButton>
        </div>
    );
};

export default SubscriptionCard;