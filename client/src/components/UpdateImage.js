import "../css/create.css"
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import FileBase64 from "react-file-base64"
import * as api from "../functions/api";

const UpdateImage = ({ match, history }) => {
    const [image, setImage] = useState({});
    const [listing, setListing] = useState({});
    
    const { identifier } = match.params;

    useEffect(()=>{
        // styling image input (there is most likely a "better" way to do this, however, time constraint)
        const fileInput = document.querySelector(`input[type="file"]`);
        fileInput.classList.add("form-control");
        fileInput.id = "image";

        const fetchData = async () =>{
            const result = await api.getListing(identifier);

            console.log(result)
            setListing(result.payload);
        }

        fetchData();
    }, [identifier])

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        const result = await api.updateImage(identifier, image);

        if (!result.success){
            console.log("Error:", result)
        }

        history.push(`/listing/${identifier}`)
    }

    const onCancelHandler = (e) =>{
        e.preventDefault();

        history.push(`/listing/${identifier}`);
    }

    return (
        <>
        <Nav />
        <section className="container create">
            <form className="create-form my-4 p-5" onSubmit={onSubmitHandler}>
                <h2 className="fw-bold">Change Image {listing ? `for ${listing.name}` : ""}</h2>
                <div className="form-group my-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <FileBase64 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setImage({image: base64})}
                    />
                </div>

                <div className="d-flex">
                    <button className="btn btn-danger rounded rounded-pill me-2" onClick={onCancelHandler}>Cancel</button>
                    <button className="btn btn-primary rounded rounded-pill ms-2" type="submit">Save</button>
                </div>
            </form>
        </section>

        </>
    );
}

export default UpdateImage;
