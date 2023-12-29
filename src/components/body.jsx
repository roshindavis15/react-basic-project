import { restaurantData } from "../config";
import RestruantCard from "./restaurantCard";
import { useState } from "react";


const Body = () => {

    const [searchInput,setSearchInput]=useState('');

    return (
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
                 <button className="search-btn">Search</button>

            </div>
            <div className="restraunt-list">
                {restaurantData.map((restaurant, index) => (
                    <RestruantCard key={index} restaurant={restaurant} />
                ))}
            </div>
        </>
    );
};

export default Body;