import "../css/create.css"
import React, {useEffect, useState} from 'react';
import FileBase64 from 'react-file-base64';
import * as api from '../functions/api';

import Nav from './Nav';


const CreateListing = ({ history }) => {
    const [listing, setListing] = useState({});

    useEffect(()=>{
        // styling image input (there is most likely a "better" way to do this, however, time constraint)
        const fileInput = document.querySelector(`input[type="file"]`);
        fileInput.classList.add("form-control");
        fileInput.id = "image";


        

    }, [])

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        const result = await api.createListing(listing);

        if (!result.success){
            console.log("Error:", result)
            
        }else{
            history.push("/");
        }

        
    }


    return (
        <>
        <Nav active />
        <section className="container create">
        <form onSubmit={onSubmitHandler} className="create-form my-4 p-5">
          <h2 className="fw-bold">Create a listing</h2>
          <div className="form-group my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name"  onChange={e => setListing({...listing, name: e.target.value})}></input>
          </div>

          <div className="form-group my-3">
            <label htmlFor="about" className="form-label">About</label>
            <textarea  className="form-control" id="name" rows="3" onChange={e => setListing({...listing, about: e.target.value})}></textarea>
          </div>

          <div className="form-group my-3">
            <label htmlFor="location" className="form-label">Location</label>
            <textarea  className="form-control" id="location" rows="3" onChange={e => setListing({...listing, location: e.target.value})}></textarea>
          </div>

          <div className="form-group my-3">
            <label htmlFor="admission" className="form-label">Admission</label>
            <textarea  className="form-control" id="admission" rows="3" onChange={e => setListing({...listing, admission: e.target.value})}></textarea>
          </div>
          <div className="form-group my-3">
            <label htmlFor="image" className="form-label">Image</label>
            <FileBase64 
              type="file"
              multiple={false}
              onDone={({base64}) => setListing({...listing, image: base64})}
            />
          </div>
          
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary rounded rounded-pill" type="submit">Submit</button>
          </div>
          
        </form>
        
      </section>
      </>
    );
}

export default CreateListing;
