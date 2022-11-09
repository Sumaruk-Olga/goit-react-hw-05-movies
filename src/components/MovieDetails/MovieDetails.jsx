import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {    
    const { movieId } = useParams();
    console.log('movieId', movieId);
    
    // буде приходити динамічне qwe
    return <div>
        <p>MovieDetails</p>
        <p>some info</p>
        <Link to="cast">link for more cast details</Link>
        <Link to="reviews">link for more reviews details</Link>
        <Outlet/>
    </div>
};
export default MovieDetails;

// reviews  Reviews