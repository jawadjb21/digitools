import React from 'react';

const Link = ({ link }) => {
    return (
        <li className='text-black font-mono'><a href={link.path}>{link.name}</a></li>
    );
};

export default Link;