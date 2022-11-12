import PropTypes, { shape } from "prop-types";
import Gallery from "components/Gallery/Gallery";

export const ReviewsInfo = ({ reviews }) => {
    // console.log('reviews', reviews);
    return <section>
        {reviews.length > 0 ? <Gallery arr={ reviews} use="reviews"/> : <div>no info</div>}
    </section>
}

ReviewsInfo.propTypes = {
    reviews: PropTypes.arrayOf(shape()).isRequired,
}