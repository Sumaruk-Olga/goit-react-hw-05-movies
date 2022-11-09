import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    console.log('movieId', movieId);
    // буде приходити динамічне qwe
    return <div>MovieDetails</div>
};
export default MovieDetails;