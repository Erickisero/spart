
import React from 'react';
import {Link} from 'react-router-dom';
const navbar = () => {
    return (
        <nav className="navbar">
            <h2>BlogPost</h2>
            <div className="links">
                               
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                
            </div>
        </nav>
      );
}
 
export default navbar;