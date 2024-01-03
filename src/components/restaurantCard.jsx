  
  //restruant card component
  
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


export default RestruantCard;