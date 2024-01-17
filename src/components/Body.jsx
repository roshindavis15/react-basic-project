import { restaurantData } from "../config";
import RestruantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import useCheckOnline from "../../utils/useCheckOnline";



function filterData(searchInput,restaurantData){
  
   const filteredData= restaurantData.filter((restaurant)=> 
       restaurant.name.includes(searchInput)
   );  
   return filteredData
}

const Body = () => {
    
    const [allRestaurants,setAllRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState(restaurantData)  //useState for restuarant
    const [searchInput,setSearchInput]=useState('');    //useState for search
    
    const isOnline=useCheckOnline()
    
   if (!isOnline){
        return (
        <h1>you are offline</h1>
        )
    }
    



   

    return (filteredRestaurants.length===0)? <Shimmer/>:(
        <>
           <div className="search-container p-5 my-5">
    <input
        type="text"
        className="search-input bg-white focus:outline-none border-2 border-purple-300 rounded-md p-2"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
            setSearchInput(e.target.value);
        }}
    />
    <button
        className="search-btn ml-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 px-4"
        onClick={() => {
            // Function for filtering the data
            const data = filterData(searchInput, restaurantData);
            setFilteredRestaurants(data);
        }}
    >
        Search
    </button>
</div>


              
            <div className="flex gap-8">
                {filteredRestaurants.map((restaurant, index) => (

                    //passing the restuarant to the component
                    <RestruantCard key={restaurant.id} restaurant={restaurant} />
                   
                ))}
                 
            </div>
        </>
    );
};

export default Body;