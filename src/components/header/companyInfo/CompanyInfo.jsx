import React, { use } from 'react';
import StatCard from '../../ui/StatCard';

const CompanyInfo = ({ companyInfoPromise }) => {
    const companyInfo = use(companyInfoPromise);
    const stats = companyInfo.company.stats;

    return (
        <div className='bg-[#4F39F6] mx-auto text-center grid grid-cols-2 md:flex md:justify-evenly md:items-center py-5 px-4'>
            {stats.map((stat, index) => (
                <React.Fragment key={stat.id}>
                    <StatCard stat={stat}></StatCard>
                    {index < stats.length - 1 && <div className="hidden md:flex divider divider-horizontal after:bg-white before:bg-zinc-400"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default CompanyInfo;