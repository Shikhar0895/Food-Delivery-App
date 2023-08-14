import { useState, useEffect } from "react";
import useRestaurantListing from "../utils/useRestaurantListing";

export default function Shimmer() {
  const [resList, setResList] = useState(null);
  const RestaurantListing = useRestaurantListing();
  

  useEffect(() =>{
    setResList(RestaurantListing?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  },[RestaurantListing]);

  return (
    <div className="flex justify-around bg-slate-100 p-6 h-[90vh]">
    <div className="grid p-2 grid-cols-4 gap-4">
      {resList?.map((item) => <div className="w-56 h-64 bg-slate-300 rounded-md" key={item.info.id}></div>)}
      
    </div>
    </div>
  );
}
