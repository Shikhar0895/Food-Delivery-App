/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useRestaurantListing from "../utils/useRestaurantListing"
import { imgURL } from "../utils/constants";

function SearchPage() {
    const ResList = useRestaurantListing();
    
    
    const [resList, setResList] = useState(null);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        setResList(ResList);
    },[ResList]);
     


const restaurants = resList?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    
if(restaurants === undefined) return <div><h1 className="mx-auto my-4">Loading .....</h1></div>;

const handleSearchEvent = (event) => {
 const inputValue = event.target.value
 const filteredData = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase()));
 inputValue === '' ? setFilteredList([]) : setFilteredList(filteredData);

};

 return (

        <div className="searchPageContainer bg-slate-200 h-auto flex flex-col content-center flex-wrap">
            <div className="searchSection my-4 p-4 ">
                <form>
                <div className="searchBarContainer bg-white w-[848px] h-12 flex flex-wrap content-center rounded-sm ">
                    <input type="text" name="searchbar" id="searchbar" className=" mx-2 h-8 w-[840px] p-2" placeholder="Search your favourite Restaurant here"  onChange={handleSearchEvent} />
                </div>
                </form>
            </div>
            {filteredList.length !== 0 &&
            (<div className="resultDisplaySection content-center">
                
               {filteredList.map((restaurant) => <Card key={restaurant.info.id} resName={restaurant.info.name} infoType={"restaurant"} ImgId={restaurant.info.cloudinaryImageId} />)} 
            </div>)}
        </div>

    );
}

const Card = ({resName, infoType, ImgId}) => { 
    
    return <div className="Card flex bg-gray-50 w-80 m-2 rounded-md" id="resultCard">
          <div className="imgContainer mr-3 w-16 h-16 rounded-sm">
            <img  src={imgURL+ImgId} alt="resImg" className="object-cover rounded-sm w-16 h-16 "/>
            </div>
             <div className="infoContainer my-auto">
               <h1>{resName}</h1>
                 <h3>{infoType}</h3>
             </div>
          </div> }
export default SearchPage;