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

    useEffect(() => { 
        const fetchData = async () => {        
            try {
                setError(null);
                setLoading(prevLoading => !prevLoading);
                const data = await searchReviews(location.state.state);  
                setReviews(data);                
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
    }, [location.state.state]);
    return (<>
        {error && <Error>Sorry, ...</Error>}
        {loading && <Loading />}           
        {reviews?.length > 0 && <ReviewsInfo reviews={reviews} />}
        { reviews?.length === 0 && <div>We have no information about reviews :(</div>}    
    </>);
};
export default Reviews;