import { useEffect, useState } from "react";
import { restaurantData } from "../src/config";

const useSelectedRestaurant=(id,restaurantData)=>{
    const [selectedRestaurant, setSelectedRestaurant]=useState(null)


useEffect(()=>{
    const restaurant=restaurantData.find((restaurant)=>restaurant.id===id);
    setSelectedRestaurant(restaurant);
},[id,restaurantData])

return selectedRestaurant

}

export default useSelectedRestaurant