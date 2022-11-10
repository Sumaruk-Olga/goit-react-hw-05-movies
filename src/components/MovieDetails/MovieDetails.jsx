import { Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense } from "react";
import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";
import { Loading } from "components/Loading/Loading";

const MovieDetails = () => {    
    const { movieId } = useParams();
    const location = useLocation();
    console.log('movieId', movieId);
    
    let backLinkHref = location.state?.from ?? '/';
    console.log('backLinkHref.pathname', backLinkHref.pathname);    

    // буде приходити динамічне qwe
    return <div>
        <StyledLink to={backLinkHref}>
            <button type="button">go back</button>
        </StyledLink>
        
        <p>MovieDetails</p>
        <p>some info</p>
        <StyledLink to="cast" state={{ from: location.state.from }}>link for more cast details</StyledLink>
        <StyledLink to="reviews" state={{ from: location.state.from }}>link for more reviews details</StyledLink>
        <Suspense fallback={<Loading/>}>
            <Outlet/>
        </Suspense>
    </div>
};
export default MovieDetails;