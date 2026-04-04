import React from 'react';
import SubscriptionCard from '../../../ui/SubscriptionCard';

const AllSubscriptions = ({ subscriptions, selectedSubscriptions, setSelectedSubscriptions }) => {
    console.log(subscriptions, selectedSubscriptions)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-10 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
            {
                subscriptions.map(subscription => <SubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></SubscriptionCard>)
            }
        </div>
    );
};

export default AllSubscriptions;