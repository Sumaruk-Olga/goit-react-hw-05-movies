import { Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";
import { Loading } from "components/Loading/Loading";
import { searchById, searchCast, searchReviews } from "services/Api";

const MovieDetails = () => {    
    const { movieId } = useParams();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);
    console.log('movieId', movieId);
    
    let backLinkHref = location.state?.from ?? '/';
    

    useEffect(() => { 
        const fetchData = async () => {        
        try {
            setLoading(prevLoading => !prevLoading);
                const data = await searchById(movieId);  
                console.log('data', data);
                setMovie(data);                
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
        
    }, [ movieId]);


        const handleCastClick = async () => {
        let data;
            try {
                data = await searchCast(movieId);
                console.log('data', data);
                setCast(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                console.log('cast', cast);
            }  
            return data;
    }    
    
    const handleReviewsClick = async () => {
        let data;
            try {
                data = await searchReviews(movieId);
                console.log('data', data);
                setReviews(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                console.log('reviews', reviews);
            }  
        return data;
        }

    return <div>        
        {loading && <Loading />}
        {error && <div>Sorry, ...</div>}
        {movie && <>
            <StyledLink to={backLinkHref}>
                <button type="button">go back</button>
            </StyledLink>
            <p>MovieDetails</p>
            <p>some info</p>
            <StyledLink to="cast" state={{ from: location.state.from, state:cast }} onClick={handleCastClick}>link for more cast details</StyledLink>
            <StyledLink to="reviews" state={{ from: location.state.from, state:reviews }} id={movieId} onClick={handleReviewsClick}>link for more reviews details</StyledLink>
            <Suspense fallback={<Loading/>}>
                <Outlet/>
            </Suspense>
        </>}
    </div>
};
export default MovieDetails;