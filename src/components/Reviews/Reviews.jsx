import { useLocation } from "react-router-dom";

const Reviews = () => {
    const location = useLocation();
    console.log('location.state.state', location.state.state);
    return <div> Reviews info -{location.state.state.id}</div>
};
export default Reviews;