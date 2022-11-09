import { Link, useLocation } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    return <div>
        <p>Movies searchbar</p>
        <p>list of films after fetch</p>
        <Link to="movieId" state={{ from: location }}>film</Link>
    </div>
};
export default Movies;

//замість "movieId" треба буде вставляти динамічно 
// { ` &{qwe} ` }