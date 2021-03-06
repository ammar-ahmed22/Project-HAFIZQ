import "../css/listing.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from "../functions/api";

import Nav from "./Nav";
import Loading from "./Loading";
import Footer from "./Footer";

const Listing = ({ match }) => {


    const [listing, setListing] = useState({});

    const { identifier } = match.params;

    useEffect(()=>{
        

        const fetchData = async () =>{
            const result = await api.getListing(identifier);

            console.log(result);

            setListing(result.payload)
        }

    
        fetchData();

        
    }, [identifier])

    
    

    if (listing){
        const updatedAt = new Date(listing.updatedAt)
        const date = updatedAt.toLocaleString('en-US', {weekday: "long", year: "numeric", month: "short", day: "numeric"});
        const time = updatedAt.toLocaleTimeString('en-US', {hour: "2-digit", minute: "2-digit"})
        return (
            <>
            <Nav />
            <div className="container-fluid mainimg p-0">
                <img src={listing.image} alt="" className="img-fluid w-100" />
                <div className="edit-hover p-3">
                    <Link to={`/edit-image/${identifier}`} className="text-decoration-none border border-primary bg-primary text-light rounded rounded-pill px-3 py-2"><i className='bx bxs-edit align-middle'></i> Change Image</Link>
                </div>
            </div>
            <section className="container listing-page my-3">
                
                <h1 className="m-0">{listing.name}</h1>
                <p className="text-secondary">Last Updated: {date} at {time}</p>
                <h3>About</h3>
                <p>{listing.about}</p>
                <h3>Location</h3>
                <p>{listing.location}</p>
                <h3>Admission</h3>
                <p>{listing.admission}</p>

                <div className="listing-buttons d-flex justify-content-between">
                    <Link to="/" className="text-decoration-none"><i className='bx bx-chevron-left align-middle' ></i>Back</Link>
                    <Link to={`/edit/${identifier}`} className='text-decoration-none'><i className='bx bxs-edit align-middle'></i> Edit</Link>
                </div>
            </section>
            <Footer />
            </>
        )
    }else{
        return (
            <>
            <Nav />
            <div className="container container loading-cont d-flex justify-content-center align-items-center">
                <Loading />
            </div>
            <Footer />
            </>
        )
        
    }
    
}

export default Listing;
