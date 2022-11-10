import { useLocation } from "react-router-dom";

const Reviews = () => {
    const location = useLocation();        
    console.log('locationin reviews', location.state.state);
    return <div> Reviews info </div>
};
export default Reviews;