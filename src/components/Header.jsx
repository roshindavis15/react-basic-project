    import { useState } from "react";
    import { Link } from "react-router-dom";
    import { IMG_CDN_URL } from "../config";

    const Title = () => {
        
        return (
            <a href="/">
                <img
                    className="logo"
                    alt="logo"
                    src={IMG_CDN_URL}

                />
            </a>
        );
    };

    const Header = () => {

        const [isLoggedIn, setIsLoggedIn] = useState(false);
        return (
            <div className="header">
                <Title />
                <div className="nav-items">
                    <ul>
                      
                       <li> <Link to="/">Home </Link>  </li>
                       
                       
                       <li><Link to="/about">About</Link></li>
                        
                        <li> <Link to="/contact">Contact</Link></li> 
                        <li> <Link to="/cart">Cart</Link></li> 

                    </ul>


                </div>
            
            {isLoggedIn?(
                <button className="login-btn" onClick={()=>setIsLoggedIn(false)} >Logout</button>
            ):(
                <button className="login-btn" onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
        }

                

            </div>
        )
    }

    export default Header;