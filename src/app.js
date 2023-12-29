import React from "react";
import ReactDOM from "react-dom/client"




const Title = () => {
    return (
        <a href="/">
        <img
        className="logo"
        alt="logo"
        src="data:image/png;base64,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"
        
        />
        </a>
    );
};




const Header=()=>{
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
                   <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const restaurantData = [
    {
        name: "chicking 1",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9a2a8a3a027a32c8938168f9d1194c15",
        cusines: ["Burgers", "American"],
        rating: "4.2",
    },
    {
        name: "chicking 2",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9a2a8a3a027a32c8938168f9d1194c15",
        cusines: ["Burgers", "American"],
        rating: "4.2",
    },
    {
        name: "chicking 3",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9a2a8a3a027a32c8938168f9d1194c15",
        cusines: ["Burgers", "American"],
        rating: "4.2",
    },
];

const RestruantCard = ({ restaurant }) => {
    const { image, name, cusines, rating } = restaurant;

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{cusines.join(", ")}</h2>
            <h4>{rating} stars</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="restraunt-list">
            {restaurantData.map((restaurant, index) => (
                <RestruantCard key={index} restaurant={restaurant} />
            ))}
        </div>
    );
};

const Footer=()=>{
    return(
    <h1>this is footer part</h1>
    )

}
    
const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>) 
