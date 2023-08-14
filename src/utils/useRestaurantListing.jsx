import { useEffect, useState } from "react";


const useRestaurantListing = () => {
const [restData, setRestData] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() =>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8996632&lng=81.00506320000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     
     const json = await data.json();
     setRestData(json.data);
    }

    return restData;
};

export default useRestaurantListing;