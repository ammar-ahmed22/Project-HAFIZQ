import "../css/main.css"
import React, { useEffect, useState } from 'react';

import Nav from "./Nav";
import Loading from "./Loading";
import Footer from "./Footer";
import * as api from "../functions/api";

const Main = ({ history }) => {
    const [listings, setListings] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await api.getListings();

            setListings(result.payload);

        }

        fetchData();

        
    }, [])


    const onClickHandler = (e, id) =>{
        console.log(id);
        history.push(`/listing/${id}`);
    }

    if (listings){
        return (
            <>
            <Nav listings={listings} setListings={setListings} search/>
            <section className="container main mt-5">
                
                {
                    listings.map((item, index) =>{
                        return (
                            <div className="listing my-4" key={index} onClick={e => onClickHandler(e, item._id)}>
                                <div className="row">
                                    <div className="col-md-4 col-12 listing-image-box">
                                        <img src={item.image} alt="" className="img-fluid listing-image" />
                                        <div className="listing-image-hover">
                                            <h4>VIEW</h4>
                                        </div>
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
            <Footer />
            </>
        );
    }else{
        return (
            <>
            <Nav listings={listings} setListings={setListings} search/>
            <div className="container loading-cont d-flex justify-content-center align-items-center">
                <Loading />
            </div>
            <Footer />
            </>
        )
    }
    
}

export default Main;
