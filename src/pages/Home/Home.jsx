import StyledLink from "components/SharedNavigation/SharedNavigstion.styled";

const Home = () => {
    return <div>        
        <p>popular movies:</p>
        <StyledLink to="/movies/:movieId">List of links</StyledLink>
    </div>
};
export default Home;