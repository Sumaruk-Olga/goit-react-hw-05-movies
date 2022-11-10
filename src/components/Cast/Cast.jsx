import { useLocation } from "react-router-dom";

const Cast = () => {    
    const location = useLocation();
    console.log('location.state in cast', location.state.state);
    return <div>Cast info </div>
};
export default Cast;