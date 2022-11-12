import { Error, Page } from "components/common/common.styled";
import Gallery from "components/Gallery/Gallery";
import { Loading } from "components/Loading/Loading";
import { useEffect, useState } from "react";
import {searchTrending} from "services/Api";
import { PageTitle } from "components/common/common.styled";


const Home = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {     
    const fetchData = async () => {
        try {
            setError(null);
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
            <Gallery arr={movies} use="movie"/>
        </>} 
    </Page>
};
export default Home;