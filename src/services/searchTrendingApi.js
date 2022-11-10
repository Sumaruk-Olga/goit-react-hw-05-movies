import axios from "axios";

export const searchTrendingApi = async() => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=52a5edf0dabfbaff9453a6a42fe80ed9');
    // console.log('response.data', response.data);    
    return response.data.results;
};

