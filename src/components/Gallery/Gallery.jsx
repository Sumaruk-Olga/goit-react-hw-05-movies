import PropTypes, { shape } from 'prop-types';
import GalleryItem from "components/GalleryItem/GalleryItem";
import { List } from "./Gallery.styled";
import { CastCard } from 'components/CastCard/CastCard';

const Gallery = ({ arr, use }) => {
    if (use === "movie") {
        return <List>{arr.map(item => {
            return <GalleryItem item={item} key={item.id} />
        })}
        </List>
    }
    if (use === "cast") {
        return <List>{arr.map(item => {
            return <CastCard item={item} key={item.id} />
            // return<p>{item.id}</p>
        })}
        </List>
    }
};
export default Gallery;

Gallery.propTypes = {
    arr: PropTypes.arrayOf(shape({
        id: PropTypes.number.isRequired,
    })).isRequired, 
    use: PropTypes.string.isRequired,
}