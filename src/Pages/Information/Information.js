import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Information = () => {
    const detailedData = useLoaderData();
    console.log(detailedData);
    return (
        <div>
            <h1>{detailedData.name}</h1>
        </div>
    );
};

export default Information;