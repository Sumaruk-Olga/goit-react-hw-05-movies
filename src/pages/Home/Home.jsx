import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    return <div>        
        <p>popular movies:</p>
        <StyledLink to="/movies/:movieId" state={{ from: location }} >List of links</StyledLink>
    </div>
};
export default Home;