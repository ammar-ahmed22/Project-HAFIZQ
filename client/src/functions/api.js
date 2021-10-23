import axios from "axios";



export const createListing = async (listing) =>{
    try {
        const { data } = await axios.post('http://localhost:8000/api/data/add-listing', listing);
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getListings = async () =>{
    try {
        const { data } = await axios.get('http://localhost:8000/api/data/listings');
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getListing = async (identifier) =>{
    console.log("Get Listing")
    try {
        console.log(identifier)
        const url = `http://localhost:8000/api/data/listing/${identifier}`
        const { data } = await axios.get(url)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        //return error;
    }
}

export const updateListing = async (identifier, listing) =>{
    try {
        const url = `http://localhost:8000/api/data/update/${identifier}`

        const { data } = await axios.post(url, listing)

        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateImage = async (identifier, image) =>{
    try {
        const url = `http://localhost:8000/api/data/update/${identifier}?isImage=true`;

        const { data } = await axios.post(url, image);

        return data
    } catch (error) {
        console.log(error)
    }
}

export const findListings = async (query) =>{
    try {
        const url = `http://localhost:8000/api/data/search?query=${query}`;

        const { data } = await axios.get(url);

        return data
    } catch (error) {
        console.log(error)
    }
}