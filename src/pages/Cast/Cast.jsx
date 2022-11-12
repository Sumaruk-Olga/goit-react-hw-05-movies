import { CastInfo } from "components/CastInfo/CastInfo";
import { Error } from "components/common/common.styled";
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
                setError(null);
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
        {error && <Error>Sorry, something went wrong. Try again</Error>}        
        {loading && <Loading />}
        {cast?.length > 0 && <CastInfo arr={cast} />}
        {cast?.length === 0 && <div>We have no information about the cast :(</div>}
    </>)
};
export default Cast;