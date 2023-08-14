import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuAPIUrl } from "./constants";


const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(`${menuAPIUrl}${resId}`);
        const json = await data.json();
        setResInfo(json.data)

    }

    return resInfo;
}

export default useRestaurantMenu;