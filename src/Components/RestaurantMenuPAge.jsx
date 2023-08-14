/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { Fragment, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {ItemCardWithoutImg,ItemCardWithImg} from "./ItemCard";

const RestaurantMenuPage = () => {
 
  const [expandedIndex, setExpandedIndex] = useState(null);
  const customHookData = useRestaurantMenu();
 if (customHookData === null) return <Shimmer />;

  const { name, cuisines, costForTwo, areaName } =
    customHookData?.cards[0]?.card?.card?.info;

  const groupedItemCards =
    customHookData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
console.log(groupedItemCards);
    

return (
    <div className="ResMenuSection p-4">
      <div className="w-[60vw] bg-orange-300 mx-auto my-4 p-4 rounded-md">
        <div className="menuSectionHeader">
          <h1 className="font-bold text-xl">{name}</h1>
          <h2>{areaName}</h2>
          <h2>{cuisines.join(",")}</h2>
          <ul>
            <li>{`₹${costForTwo / 100} for two`}</li>
          </ul>
        </div>
        <hr />
        <button className="px-3 py-1 my-3 bg-lime-700 rounded-md">Veg Only</button>
        <hr />
        
        <div className="menuCategories">
          {groupedItemCards.map((item, index) => {
            const {title, itemCards} = item.card.card;

            if (title !== undefined && itemCards !== undefined)
              return (
              <CategoryList key={title}  
              item = {item} 
              showItem = {index === expandedIndex} 
              indirectStateSetter={()=> {
                setExpandedIndex(index === expandedIndex ? null : index)
              }} />
                 );
          })}
        </div>
      </div>
    </div>
  );
};

const CategoryList = ({item, showItem, indirectStateSetter}) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandEvent = () => {
      indirectStateSetter()
  };

  const {title, itemCards} = item.card.card;

    return <div  className="my-3">
             <div className="flex justify-between mb-3 cursor-pointer" onClick={handleExpandEvent}>
                <h1 className="font-bold text-lg">{title}</h1>
                <button onClick={handleExpandEvent}>{showItem ? "🔼" : "🔽"}</button>
             </div>
  {showItem && (<div className= "categoryItems" id="title">
    
      {itemCards.map((item2) => {
        const price = item2.card.info.price ? item2.card.info.price : item2.card.info.defaultPrice ;
        
        return <Fragment key={item2.card.info.id}>
          <div className="itemContainer flex justify-between ml-2 mr-2 mt-2 mb-3 ">
              <div className="dishDesc flex flex-col justify-center">
                <span className="font-bold" >{item2.card.info.name}</span>
                <span className="font-semibold" >{`₹`+price/100}</span>
                <span className="text-sm font-light mt-2 w-96" >{item2.card.info.description}</span>
              </div>
              {item2.card.info.imageId !== undefined ?<ItemCardWithImg item={item2}/> : 
                <ItemCardWithoutImg/> }
                </div>
              <hr />
              </Fragment>
        })}
  
    
  </div>)}
</div>
}

export default RestaurantMenuPage;
