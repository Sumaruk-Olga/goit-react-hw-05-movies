import { useLocation } from "react-router-dom";

const Reviews = () => {
    const location = useLocation();        
    return <div> Reviews info {location.state.state.id}</div>
};
export default Reviews;