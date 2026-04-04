import React from 'react';
import SubscriptionCard from '../../../ui/SubscriptionCard';
import HighlightedSubscriptionCard from '../../../ui/HighlightedSubscriptionCard';

const AllSubscriptions = ({ subscriptions, selectedSubscriptions, setSelectedSubscriptions }) => {
    return (
        <>
            <div className='hidden md:grid md:grid-cols-4 gap-y-3 md:gap-10 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
                {
                    subscriptions.map(subscription => { return subscription.tagType !== 'popular' ? <SubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></SubscriptionCard> : <HighlightedSubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></HighlightedSubscriptionCard> })
                }
            </div>
            <div className="carousel w-full md:hidden rounded-box mt-5">
                {
                    subscriptions.map(subscription => { return subscription.tagType !== 'popular' ? <SubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions} carousel={true}></SubscriptionCard> : <HighlightedSubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions} carousel={true}></HighlightedSubscriptionCard> })
                }
            </div >
        </>
    );
};

export default AllSubscriptions;