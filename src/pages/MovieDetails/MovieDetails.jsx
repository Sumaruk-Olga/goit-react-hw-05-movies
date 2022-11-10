import { Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";
import { Loading } from "components/Loading/Loading";
import { searchById } from "services/Api";

const MovieDetails = () => {    
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);    
    const [error, setError] = useState(null);    
    
    let backLinkHref = location.state?.from ?? '/';
    

    useEffect(() => { 
        const fetchData = async () => {        
        try {
            setLoading(prevLoading => !prevLoading);
                const data = await searchById(movieId);                  
                setMovie(data);                
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
        
    }, [movieId]);

    return <main>        
        {loading && <Loading />}
        {error && <div>Sorry, ...</div>}
        {movie && <>
            <StyledLink to={backLinkHref}>
                <button type="button">go back</button>
            </StyledLink>
            <p>MovieDetails</p>
            <p>some info</p>
            <StyledLink to="cast" state={{ from: location.state.from, state:movieId }} >link for more cast details</StyledLink>
            <StyledLink to="reviews" state={{ from: location.state.from, state:movieId }}>link for more reviews details</StyledLink>
            <Suspense fallback={<Loading/>}>
                <Outlet/>
            </Suspense>
        </>}
    </main>
};
export default MovieDetails;