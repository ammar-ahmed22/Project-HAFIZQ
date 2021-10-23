import "../css/create.css"
import React, {useEffect, useState} from 'react';
import FileBase64 from 'react-file-base64';
import * as api from '../functions/api';

import Nav from './Nav';

const UpdateListing = ({ match, history }) => {

    const [listing, setListing] = useState({});
    

    const { identifier } = match.params;

    useEffect(()=>{
        
        const fetchData = async () =>{
            const result = await api.getListing(identifier);

            setListing(result.payload);
        }

        fetchData();
    }, [identifier])

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const result = await api.updateListing(identifier, listing)
        if (!result.success){
            console.log("Error", result)
        }
        
        history.push(`/listing/${identifier}`)
    }

    const onCancelHandler = (e) =>{
        e.preventDefault();

        history.push(`/listing/${identifier}`)
    }

    return (
        <>
        <Nav active />
        <section className="container create">
        <form onSubmit={onSubmitHandler} className="create-form my-4 p-5">
          <h2 className="fw-bold">Edit this listing</h2>
          <div className="form-group my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name" value={listing.name}   onChange={e => setListing({...listing, name: e.target.value})}></input>
          </div>

          <div className="form-group my-3">
            <label htmlFor="about" className="form-label">About</label>
            <textarea  className="form-control" id="name" rows="3" value={listing.about} onChange={e => setListing({...listing, about: e.target.value})}></textarea>
          </div>

          <div className="form-group my-3">
            <label htmlFor="location" className="form-label">Location</label>
            <textarea  className="form-control" id="location" rows="3" value={listing.location} onChange={e => setListing({...listing, location: e.target.value})}></textarea>
          </div>

          <div className="form-group my-3">
            <label htmlFor="admission" className="form-label">Admission</label>
            <textarea  className="form-control" id="admission" rows="3" value={listing.admission} onChange={e => setListing({...listing, admission: e.target.value})}></textarea>
          </div>
         
          <div className="d-flex">
            <button className="btn btn-danger me-2" onClick={onCancelHandler}>Cancel</button>
            <button className="btn btn-primary ms-2" type="submit">Save</button>
          </div>
          
        </form>
        
      </section>
      </>
    );
}

export default UpdateListing;
