import "../css/nav.css"
import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({active}) => {
    return (
        <div className="navigation d-flex justify-content-between align-items-center p-3">
            <div className="">
                <Link to="/" className="fw-bold text-dark text-decoration-none fs-3">Project HafizQ</Link>
            </div>

            <div className="">
                <Link to="/about" className="text-secondary text-decoration-none mx-2 fs-5 fw-bold" >About</Link>
                <Link to="/create" className={`text-decoration-none fs-5 mx-2 fw-bold ${active ? "text-secondary" : ""}`}>List</Link>
            </div>
        </div>
    );
}

export default Nav;
