import { Link } from "react-router-dom";

const Movies = () => {
    return <div>
        <p>Movies searchbar</p>
        <p>list of films after fetch</p>
        <Link to="movieId">film</Link>
    </div>
};
export default Movies;

//замість "movieId" треба буде вставляти динамічно 
// { ` &{qwe} ` }