import { Link, useLocation } from "react-router-dom";
import { MovieCard, MovieTitle, Poster } from "./GalleryItem.styled";

const GalleryItem = ({ item, movieId }) => {
    const location = useLocation();
    return <MovieCard>
    <Link to={`/movies/${movieId}`} state={{ from: location }} >
        <Poster/>
        <MovieTitle>{item.title}</MovieTitle>
    </Link>
</MovieCard>
};

export default GalleryItem;