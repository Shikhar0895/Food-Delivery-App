/* eslint-disable react/prop-types */
import { imgURL } from "../utils/constants"

export function ItemCardWithoutImg(){
    return <div className="withoutImage my-auto pr-[17px]">
    <button className="rounded-md bg-green-600 h-8 w-20 my-auto " >
        Add
    </button>
  </div>
  }

  export function ItemCardWithImg ({item}){
    return <div className="withImage relative flex flex-col h-36">
    <div className="absolute  bottom-0 left-5">
      <button className="rounded-md bg-green-600 h-8 w-20 my-auto " >
          Add
      </button>
    </div>
     <img src={imgURL+item.card.info.imageId} alt="foodImage" className="my-auto w-[118px] h-24 rounded-md" />
  </div>
  }
  