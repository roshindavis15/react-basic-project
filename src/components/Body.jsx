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
            <div className="search-container">
                <input 
                type="text"
                 className="search-input" 
                 placeholder="search" 
                 value={searchInput}
                 onChange={(e)=>{
                    setSearchInput(e.target.value)
                 }}
                 />
                 <button className="search-btn"
                 onClick={()=>{

                    //function for filtering the data 

                    const data=filterData(searchInput,restaurantData);
                    

                    setFilteredRestaurants(data)
                 }}
                 
                 >
                    Search
                    </button>
                 

            </div>  

              
            <div className="restraunt-list">
                {filteredRestaurants.map((restaurant, index) => (

                    //passing the restuarant to the component
                    <RestruantCard key={restaurant.id} restaurant={restaurant} />
                   
                ))}
                 
            </div>
        </>
    );
};

export default Body;