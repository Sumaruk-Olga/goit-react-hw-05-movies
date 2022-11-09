import { Outlet, useParams } from "react-router-dom";
import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";

const MovieDetails = () => {    
    const { movieId } = useParams();
    console.log('movieId', movieId);
    
    // буде приходити динамічне qwe
    return <div>
        <p>MovieDetails</p>
        <p>some info</p>
        <StyledLink to="cast">link for more cast details</StyledLink>
        <StyledLink to="reviews">link for more reviews details</StyledLink>
        <Outlet/>
    </div>
};
export default MovieDetails;

// reviews  Reviews