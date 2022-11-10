import { Loading } from "components/Loading/Loading";
// import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {searchTrending} from "services/Api";


//  https://api.themoviedb.org/3/trending/all/day?api_key=52a5edf0dabfbaff9453a6a42fe80ed9

const Home = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);    

    useEffect(() => { 
        const fetchData = async () => {
            try {
                setLoading(prevLoading => !prevLoading);
                const data = await searchTrending();
                setMovies(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
    }, []);

    return <div>
        {loading && <Loading />}
        {error && <div>Sorry, ...</div>}
        { movies?.length > 0 && <>
            <p>Trending </p>
            <ul>{movies.map(item => {
                const movieId = item.id;
                return <li key={item.id}>
                    <Link to={`/movies/${movieId}`} state={{ from: location }} >{item.title}</Link>
                </li>
            })}
            </ul>

            </>
        } 
    </div>
};
export default Home;



// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
//       "genre_ids": [
//         28,
//         12,
//         14,
//         878
//       ],
//       "id": 299536,
//       "original_language": "en",
//       "original_title": "Avengers: Infinity War",
//       "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
//       "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
//       "release_date": "2018-04-25",
//       "title": "Avengers: Infinity War",
//       "video": false,
//       "vote_average": 8.3,
//       "vote_count": 6937,
//       "popularity": 358.799
//     },     
//       
//   "total_pages": 792,
//   "total_results": 15831
// }