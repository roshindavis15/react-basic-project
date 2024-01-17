  import { Link } from "react-router-dom";
  //restruant card component
  
  const RestruantCard = ({ restaurant }) => {
    
    const { id,image, name, cusines, rating } = restaurant;

    return (
        <Link to={`/restaurant/${id}`} className="card-link">
        <div className="w-56 bg-slate-300 shadow-lg p-4 hover:bg-orange-300 transition duration-300">
            <img src={image} alt={name} />
            <h2 className="font-bold 2xl:">{name}</h2>
            <h2>{cusines.join(", ")}</h2>
            <h4>{rating} stars</h4>
        </div>
        </Link>
    );
};


export default RestruantCard;