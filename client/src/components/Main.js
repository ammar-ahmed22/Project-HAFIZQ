import "../css/main.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from "./Nav";
import * as api from "../functions/api";

const Main = ({ history }) => {
    const [listings, setListings] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await api.getListings();

            console.log(result)
            setListings(result.payload);

            
        }

        fetchData();

        
    }, [])


    const onClickHandler = (e, id) =>{
        console.log(id);
        history.push(`/listing/${id}`);
    }

    return (
        <>
        <Nav />
        <section className="container main mt-5">
            
            {
                listings.map((item, index) =>{
                    return (
                        <div className="listing my-2" key={index} onClick={e => onClickHandler(e, item._id)}>
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <img src={item.image} alt="" className="img-fluid listing-image" />
                                </div>

                                <div className="col-md-8 col-12 p-3 d-flex flex-column justify-content-center">
                                    <h3>{item.name}</h3>
                                    <p>{item.about}</p>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    )
                    
                })
            }
        </section>
        </>
    );
}

export default Main;
