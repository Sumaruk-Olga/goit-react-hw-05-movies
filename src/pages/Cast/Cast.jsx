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
    const n = location.pathname.length - 5;
    let curentLocation = location?.state?.state ?? location.pathname.slice(8, n);
    
    useEffect(() => { 
        const fetchData = async () => {        
            try {
                setError(null);
                setLoading(prevLoading => !prevLoading);
                const data = await searchCast(curentLocation); 
                setCast(data);                
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
        {cast?.length > 0 && <CastInfo arr={cast} />}
        {cast?.length === 0 && <div>We have no information about the cast :(</div>}
    </>)
};
export default Cast;