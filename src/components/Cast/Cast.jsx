import { useLocation } from "react-router-dom";

const Cast = () => {    
    const location = useLocation();
    // console.log('location.state.state in cast', location.state.state);
    return <div>Cast info { location.state.state.id}</div>
};
export default Cast;