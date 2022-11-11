import { Error, Page } from "components/common/common.styled";
import Gallery from "components/Gallery/Gallery";
import { Loading } from "components/Loading/Loading";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import {searchTrending} from "services/Api";
import { PageTitle } from "./Home.styled";


const Home = () => {
    // const location = useLocation();
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

    return <Page>        
        {loading && <Loading />}
        {error && <Error>Sorry, something went wrong. Please, refresh the page.</Error>}
        { movies?.length > 0 && <>
            <PageTitle>Trending movies</PageTitle>
            <Gallery movies={movies}/>
            {/* <MovieList>{movies.map(item => {
                const movieId = item.id;
                return <MovieCard key={item.id}>
                    <Link to={`/movies/${movieId}`} state={{ from: location }} >
                        <Poster/>
                        <MovieTitle>{item.title}</MovieTitle>
                    </Link>
                </MovieCard>
            })}
            </MovieList> */}
            </>
        } 
    </Page>
};
export default Home;