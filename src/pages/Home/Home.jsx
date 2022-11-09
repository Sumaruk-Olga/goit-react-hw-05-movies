import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";
import { useLocation } from "react-router-dom";

//  https://api.themoviedb.org/3/trending/all/day?api_key=52a5edf0dabfbaff9453a6a42fe80ed9

const Home = () => {
    const location = useLocation();

    return <div>        
        <p>popular movies:</p>
        <StyledLink to="/movies/:movieId" state={{ from: location }} >List of links</StyledLink>
    </div>
};
export default Home;