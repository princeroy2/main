'use client'
import { useState, useEffect } from 'react';
import Ico from './ico_token';
import { IcoApiCall } from '@/app/apicallhook/icoApi';
import { useRouter } from 'next/compat/router';
import upcoming_token from '@/cryptoapis/upcoming';
import Upcoming from './upcoming';
const Upcoming2 = () => {
    const route=useRouter()
    const itemsPerPage = 5;
    // State to track the data and visible items
    const [serverData, setServerData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

    // Fetch the data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const data = await upcoming_token();
            setServerData(data); // Set the data after fetching
        };

        fetchData();
    }, []); // Empty dependency array means it runs only once when the component mounts

    // Function to show more items
    const handleShowMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };
  
    

    return (
        <div className=''>
            <Upcoming
                serverData={serverData}
                visibleItems={visibleItems}
                handleShowMore={handleShowMore}
             
            />
        </div>
    );
};

export default Upcoming2;
