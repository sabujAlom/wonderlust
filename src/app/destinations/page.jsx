import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res =await fetch('http://localhost:5000/destination')
    const destinations = await res.json()

    
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>All destinations</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;