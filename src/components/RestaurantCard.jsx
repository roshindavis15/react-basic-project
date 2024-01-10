  import { Link } from "react-router-dom";
  //restruant card component
  
  const RestruantCard = ({ restaurant }) => {
    
    const { id,image, name, cusines, rating } = restaurant;

    return (
        <Link to={`/restaurant/${id}`} className="card-link">
        <div className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{cusines.join(", ")}</h2>
            <h4>{rating} stars</h4>
        </div>
        </Link>
    );
};


export default RestruantCard;