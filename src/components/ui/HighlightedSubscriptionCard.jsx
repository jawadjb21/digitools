import React, { useState } from 'react';
import { toast } from "react-toastify";
import ProductFeature from './ProductFeature';
import CustomButton from './CustomButton';
import ProductTag from './ProductTag';

const HighlightedSubscriptionCard = ({ subscription, selectedSubscriptions, setSelectedSubscriptions, carousel }) => {
    console.log(selectedSubscriptions, setSelectedSubscriptions);
    const [isSelected, setIsSelected] = useState(false);
    const handleSelectedSubscriptions = (subscription) => {
        const newSelectedSubscriptions = [...selectedSubscriptions, subscription];
        setSelectedSubscriptions(newSelectedSubscriptions);
        setIsSelected(true);
        toast.success(`${subscription.name} has been selected!`);
    }
    return (
        <>
            {
                !carousel ?
                    <div id={subscription.id} className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 bg-linear-to-r from-[#4F39F6] to-[#627382] shadow-sm hover:shadow-md transition-shadow'>
                        <ProductTag tag={subscription.tagType} popularSubscription={true}></ProductTag>
                        <span className='text-2xl rounded-full bg-[#e7e8ef] p-3'>{subscription.icon}</span>
                        <h5 className='font-bold text-xl text-white'>{subscription.name}</h5>
                        <p className='font-medium text-white'>{subscription.description}</p>
                        <p className='text-white text-sm'>{`$`}<span className='font-bold text-2xl text-white'>{subscription.price}</span>{`/${subscription.period}`}</p>
                        <ul className='list-none h-full'>
                            {
                                subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature} popularSubscription={true}></ProductFeature>)
                            }
                        </ul>
                        <CustomButton text={"Subscribe"} forBuying={true} onClick={() => { handleSelectedSubscriptions(subscription) }} disabled={isSelected}></CustomButton>
                    </div> :
                    <div className='carousel-item shrink-0 w-full px-4'>
                        <div id={subscription.id} className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 bg-linear-to-r from-[#4F39F6] to-[#627382] shadow-sm hover:shadow-md transition-shadow'>
                            <ProductTag tag={subscription.tagType} popularSubscription={true}></ProductTag>
                            <span className='text-2xl rounded-full bg-[#e7e8ef] p-3'>{subscription.icon}</span>
                            <h5 className='font-bold text-xl text-white'>{subscription.name}</h5>
                            <p className='font-medium text-white'>{subscription.description}</p>
                            <p className='text-white text-sm'>{`$`}<span className='font-bold text-2xl text-white'>{subscription.price}</span>{`/${subscription.period}`}</p>
                            <ul className='list-none'>
                                {subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature} popularSubscription={true}></ProductFeature>)}
                            </ul>
                            <CustomButton text={"Subscribe"} forBuying={true} onClick={() => handleSelectedSubscriptions(subscription)} disabled={isSelected}></CustomButton>
                        </div>
                    </div>
            }
        </>
    );
};

export default HighlightedSubscriptionCard;