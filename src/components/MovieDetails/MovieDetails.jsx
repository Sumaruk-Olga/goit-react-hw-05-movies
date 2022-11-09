import { Outlet, useLocation, useParams } from "react-router-dom";
import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";

const MovieDetails = () => {    
    const { movieId } = useParams();
    const location = useLocation();
    console.log('movieId', movieId);
    console.log('location', location);
    console.log('location.state', location.state);
    console.log('location.state.from', location.state.from);
    const backLinkHref = location.state?.from ?? '/';
    
    // буде приходити динамічне qwe
    return <div>
        <StyledLink to={backLinkHref}>
            <button type="button">go back</button>
        </StyledLink>
        
        <p>MovieDetails</p>
        <p>some info</p>
        <StyledLink to="cast">link for more cast details</StyledLink>
        <StyledLink to="reviews">link for more reviews details</StyledLink>
        <Outlet/>
    </div>
};
export default MovieDetails;

// reviews  Reviews