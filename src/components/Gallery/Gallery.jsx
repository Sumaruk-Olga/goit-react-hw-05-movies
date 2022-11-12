import PropTypes, { shape } from 'prop-types';
import GalleryItem from "components/GalleryItem/GalleryItem";
import { List } from "./Gallery.styled";
import { CastCard } from 'components/CastCard/CastCard';
import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';

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
        })}
        </List>
    }
    if (use === "reviews") {
        return <li>{arr.map(item => {
            return <ReviewsCard item={item} key={item.id} />
        })}
        </li>
    }
};
export default Gallery;

Gallery.propTypes = {
    arr: PropTypes.arrayOf(shape({
        id: PropTypes.number.isRequired,
    })).isRequired, 
    use: PropTypes.string.isRequired,
}