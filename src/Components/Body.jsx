/* eslint-disable react/prop-types */
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function Body({ refList, filteredList }) {

  const [fetchedList, setFetchedList] = useState([]);
  
  useEffect(() => {
    if (refList && refList.length !== 0) {
      setFetchedList(refList);
    }
  }, [refList]);
// console.log(fetchedList);
  if (fetchedList.length === 0) return <Shimmer />;
  return (
    <div className="flex justify-around bg-slate-100 p-6">
      <div className="grid p-2 grid-cols-4 gap-7">
         {fetchedList.length ===0 ? <Shimmer/> : ((filteredList?.length !== 0 ? filteredList : fetchedList).map(
          (rest) => (
            <Link to={"/restaurants/"+rest.info.id} key={rest.info.id}> <ResCard resData={rest} /></Link>
          )
        ))} 
      </div>
      
    </div>
  );
}
export default Body;
