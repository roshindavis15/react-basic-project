    import { useState } from "react";
    import { Link } from "react-router-dom";
    import { IMG_CDN_URL } from "../config";

    const Title = () => {
        
        return (
            <a href="/">
                <img
                    className="h-28 p-5"
                    alt="logo"
                    src={IMG_CDN_URL}

                />
            </a>
        );
    };

    const Header = () => {

        const [isLoggedIn, setIsLoggedIn] = useState(false);
        return (
            <div className="flex justify-between items-center bg-orange-200 shadow-lg p-4">
    <Title />

    <div className="nav-items">
        <ul className="flex space-x-4">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
            <li className="nav-item"><Link to="/letsEatMart" className="nav-link">Let's Eat Mart</Link></li>
        </ul>
    </div>

    {isLoggedIn ? (
        <button className="login-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
    ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
    )}
</div>

        )
    }

    export default Header;