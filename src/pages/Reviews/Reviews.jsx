import { Error } from "components/common/common.styled";
import { Loading } from "components/Loading/Loading";
import { ReviewsInfo } from "components/ReviewsInfo/ReviewsInfo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchReviews } from "services/Api";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);    
    const [error, setError] = useState(null);
    const location = useLocation();

    const n = location.pathname.length - 8;
    let curentLocation = location?.state?.state ?? location.pathname.slice(8, n);
    

    useEffect(() => { 
        const fetchData = async () => {        
            try {
                setError(null);
                setLoading(prevLoading => !prevLoading);
                const data = await searchReviews(curentLocation);  
                setReviews(data);                
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
    }, [curentLocation]);
    return (<>
        {error && <Error>Sorry, something went wrong. Try again</Error>}
        {loading && <Loading />}           
        {reviews?.length > 0 && <ReviewsInfo reviews={reviews} />}
        { reviews?.length === 0 && <div>We have no information about reviews :(</div>}    
    </>);
};
export default Reviews;