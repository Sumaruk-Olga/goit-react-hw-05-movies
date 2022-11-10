import { Loading } from "components/Loading/Loading";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {searchTrending} from "services/Api";

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

    return <main>        
        {loading && <Loading />}
        {error && <h1>Sorry, ...</h1>}
        { movies?.length > 0 && <>
            <h1>Trending movies</h1>
            <ul>{movies.map(item => {
                const movieId = item.id;
                return <li key={item.id}>
                    <Link to={`/movies/${movieId}`} state={{ from: location }} >{item.title}</Link>
                </li>
            })}
            </ul>
            </>
        } 
    </main>
};
export default Home;