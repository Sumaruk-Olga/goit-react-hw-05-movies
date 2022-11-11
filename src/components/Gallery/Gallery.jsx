import GalleryItem from "components/GalleryItem/GalleryItem";
import { MovieList } from "./Gallery.styled";

const Gallery = ({movies}) => {
    return <MovieList>{movies.map(item => {
        const movieId = item.id;
        return <GalleryItem item={item} movieId={ movieId} key={item.id}/>
        })}
    </MovieList>
};
export default Gallery;