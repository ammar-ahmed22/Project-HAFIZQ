import "../css/listing.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from "../functions/api";

import Nav from "./Nav";

const Listing = ({ match }) => {


    const [listing, setListing] = useState({});

    const { identifier } = match.params;

    useEffect(()=>{
        

        const fetchData = async () =>{
            const result = await api.getListing(identifier);

            console.log(result);

            setListing(result.payload)
        }

        

        fetchData()

        console.log("inside useEffect")
    }, [identifier])

    console.log(listing)

    return (
        <>
        <Nav />
        <div className="container-fluid mainimg p-0">
            <img src={listing.image} alt="" className="img-fluid w-100" />
            <div className="edit-hover">
                <Link className="text-decoration-none border border-primary bg-primary text-light rounded rounded-pill px-3 py-2"><i className='bx bxs-edit align-middle'></i> Change Image</Link>
            </div>
        </div>
        <section className="container listing-page my-3">
            <div className="d-flex justify-content-between align-items-center">
                <h1>{listing.name}</h1>
                <Link to={`/edit/${identifier}`} className='text-decoration-none border border-primary bg-primary text-light rounded rounded-pill p-3 py-2'><i className='bx bxs-edit align-middle'></i> Edit</Link>
            </div>
            
            <h3>About</h3>
            <p>{listing.about}</p>
            <h3>Location</h3>
            <p>{listing.location}</p>
            <h3>Admission</h3>
            <p>{listing.admission}</p>
        </section>
        </>
    );
}

export default Listing;
