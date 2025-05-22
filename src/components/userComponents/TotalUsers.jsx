import React from 'react'
import listingStore from '../../store/listingStore';

const TotalUsers = () => {
    const { totalData } = listingStore();
    return (
        <div>
            <p className="font-medium text-sky-600">Total Users: <span className="text-sky-600 ">{totalData}</span></p>
        </div>
    )
}

export default TotalUsers
