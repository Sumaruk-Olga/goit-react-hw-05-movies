import { Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { GoBackLink, StyledLink, AdditionalInfo } from "./MovieDetails.styled";
import { Loading } from "components/Loading/Loading";
import { searchById } from "services/Api";
import { MovieInfoCard } from "components/MovieInfoCard/MovieInfoCard";
import { Error, Page } from "components/common/common.styled";


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

    return <Page>        
        {loading && <Loading />}
        {error && <Error>Sorry, something went wrong :(</Error>}
        {movie && <>
            <GoBackLink to={backLinkHref}>go back</GoBackLink>
            <MovieInfoCard movie={movie} />
            <AdditionalInfo>
                <StyledLink to="cast" state={{ from: location.state.from, state:movieId }} >link for more cast details</StyledLink>
                <StyledLink to="reviews" state={{ from: location.state.from, state:movieId }}>link for more reviews details</StyledLink>
            </AdditionalInfo>
            <Suspense fallback={<Loading />}>
                <Outlet/>
            </Suspense>
        </>}
    </Page>
};
export default MovieDetails;