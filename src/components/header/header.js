import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-product">Create Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-category">Create Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/delete-category">Delete Category</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;