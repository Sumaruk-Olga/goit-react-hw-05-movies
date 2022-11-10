import { Loading } from "components/Loading/Loading";
import { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
import { searchCast } from "services/Api";

const Cast = () => {    
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);    
    const [error, setError] = useState(null);
    const location = useLocation();    

    useEffect(() => { 
        const fetchData = async () => {        
            try {
                setLoading(prevLoading => !prevLoading);
                const data = await searchCast(location.state.state);                  
                setCast(data);                
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
    }, [location.state.state]);
    return (<>
        {loading && <Loading />}
        {error && <div>Sorry, ...</div>}
        {cast && <div>Cast info </div>}
        
        </>)
};
export default Cast;