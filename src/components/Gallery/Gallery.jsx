import PropTypes, { shape } from 'prop-types';
import GalleryItem from "components/GalleryItem/GalleryItem";
import { MovieList } from "./Gallery.styled";

const Gallery = ({movies}) => {
    return <MovieList>{movies.map(item => {        
        return <GalleryItem item={item} key={item.id}/>
        })}
    </MovieList>
};
export default Gallery;

Gallery.propTypes = {
    movies: PropTypes.arrayOf(shape({
        id: PropTypes.number.isRequired,
    })).isRequired,        
}