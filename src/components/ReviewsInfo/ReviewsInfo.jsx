import Gallery from "components/Gallery/Gallery";

export const ReviewsInfo = ({ reviews }) => {
    console.log('reviews', reviews);
    return <section>
        {reviews.length > 0 ? <Gallery arr={ reviews} use="reviews"/> : <div>no info</div>}
    </section>
}