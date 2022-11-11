import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { MovieCard, Link, Poster } from "./GalleryItem.styled";

import { makeImageSrc } from "services/Api";


const GalleryItem = ({ item }) => {
    const {id, poster_path, title } = item;
    const location = useLocation();    
    const movieId = id;       
    const url = makeImageSrc(poster_path);
    return <MovieCard>
    <Link to={`/movies/${movieId}`} state={{ from: location }} >
            <Poster alt={title} src={ url} />            
            <p>{ title }</p>
    </Link>
</MovieCard>
};

export default GalleryItem;

GalleryItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    
}