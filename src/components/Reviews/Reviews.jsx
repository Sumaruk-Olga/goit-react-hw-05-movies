import { useLocation } from "react-router-dom";

const Reviews = () => {
    const location = useLocation();    
    console.log('location.state.state in Reviews', location.state.state);
    return <div> Reviews info </div>
};
export default Reviews;