import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSelectedRestaurant from "../../utils/useSelectedRestaurant";

const RestaurantMenu=({restaurantData})=>{
    const {id}=useParams();
    const selectedRestaurant=useSelectedRestaurant(id,restaurantData);

  

    


return (
    <div>
      {selectedRestaurant ? (
        <div>
          <h2>{selectedRestaurant.name}</h2>
          <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
          
        </div>
      ) : (
        <p>Restaurant not found</p>
      )}
    </div>
  );
}

export default RestaurantMenu;

