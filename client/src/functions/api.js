import axios from "axios";

const urlPrefix = "https://projecthafizq.herokuapp.com/api/data"

export const createListing = async (listing) =>{
    try {
        const { data } = await axios.post(urlPrefix + '/add-listing', listing);
        
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getListings = async () =>{
    try {
        const { data } = await axios.get(urlPrefix + '/listings');
        
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getListing = async (identifier) =>{
    
    try {
        
        const url = `/listing/${identifier}`
        const { data } = await axios.get(urlPrefix + url)
        
        return data
    } catch (error) {
        console.log(error)
        
    }
}

export const updateListing = async (identifier, listing) =>{
    try {
        const url = `/update/${identifier}`

        const { data } = await axios.post(urlPrefix + url, listing)

        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateImage = async (identifier, image) =>{
    try {
        const url = `/update/${identifier}?isImage=true`;

        const { data } = await axios.post(urlPrefix + url, image);

        return data
    } catch (error) {
        console.log(error)
    }
}

export const findListings = async (query) =>{
    try {
        const url = `/search?query=${query}`;

        const { data } = await axios.get(urlPrefix + url);

        return data
    } catch (error) {
        console.log(error)
    }
}