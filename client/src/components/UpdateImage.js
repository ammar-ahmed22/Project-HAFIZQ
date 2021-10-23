import "../css/create.css"
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import FileBase64 from "react-file-base64"
import * as api from "../functions/api";

const UpdateImage = ({ match }) => {
    const [image, setImage] = useState({});

    return (
        <>
        <Nav />
        <section className="container create">

        </section>

        </>
    );
}

export default UpdateImage;
