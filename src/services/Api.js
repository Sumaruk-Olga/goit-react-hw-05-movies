import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3';
const key = '52a5edf0dabfbaff9453a6a42fe80ed9';


export const searchTrending = async () => {
    const url = `${baseUrl}/trending/movie/day?api_key=${key}`;
    const response = await axios.get(url);
    return response.data.results;
};


export const searchByName = async (name) => {    
    const url = `${baseUrl}/search/movie?api_key=${key}&language=en-US&page=1&query=${name}&include_adult=false`;
    const response = await axios.get(url);    
    return response.data;
};

export const searchById = async (movie_id) => {
    const url = `${baseUrl}/movie/${movie_id}?api_key=${key}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
};

export const searchCast = async (movie_id) => {
    const url = `${baseUrl}/movie/${movie_id}/credits?api_key=${key}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
};

export const searchReviews = async (movie_id) => {
    const url = `${baseUrl}/movie/${movie_id}/reviews?api_key=${key}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
};

export const makeImageSrc = (poster_path) => {    
    return `https://image.tmdb.org/t/p/w342${poster_path}`;
};