import "../css/nav.css"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import * as api from "../functions/api";

const Nav = ({active, listings, setListings, search}) => {

    const [query, setQuery] = useState('');
    
    useEffect(()=>{
        
        const fetchData = async () =>{
            const result = await api.findListings(query.split(" ").join("&"));

            setListings(result.payload)
        }

        if (search){
            fetchData();
        }
        

    }, [query, setListings, search])



    return (
        <div className="navigation d-flex justify-content-between align-items-center p-3">
            <div className="nav-section">
                <Link to="/" className="fw-bold text-primary text-decoration-none fs-3 text-fancy">Project HafizQ</Link>
            </div>

            {search && (<div class="input-group nav-section align-items-center">
                            <span class="input-group-text" id="search-bar"><i class='bx bx-search-alt-2' ></i></span>
                            <input type="text" class="form-control" placeholder="Search by name" aria-label="Search" aria-describedby="search-bar" value={query} onChange={e => setQuery(e.target.value)}></input>
                        </div>)}      
            <div className="nav-section d-flex justify-content-end">
                <Link to="/about" className="text-secondary text-end text-decoration-none mx-2 fs-5 fw-bold" >About</Link>
                <Link to="/create" className={`text-decoration-none text-end fs-5 mx-2 fw-bold ${active ? "text-secondary" : ""}`}>List</Link>
            </div>
        </div>
    );
}

export default Nav;
