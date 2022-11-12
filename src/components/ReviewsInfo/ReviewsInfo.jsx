import PropTypes, { shape } from "prop-types";
import Gallery from "components/Gallery/Gallery";

export const ReviewsInfo = ({ reviews }) => {
    // console.log('масив коментарів', reviews);
    return <section>
        {reviews?.length > 0 && <Gallery arr={reviews} use="reviews" />}
        {reviews?.length===0 && <div>We have no information about reviews</div>}
    </section>
}

ReviewsInfo.propTypes = {
    reviews: PropTypes.arrayOf(shape()).isRequired,
}