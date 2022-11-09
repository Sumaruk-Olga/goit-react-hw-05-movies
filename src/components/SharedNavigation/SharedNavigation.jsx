import { Outlet } from "react-router-dom";
import StyledLink from "./SharedNavigstion.styled";

const SharedNavigstion = () => {
    return (
    <>
      <header>        
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>          
        </nav>
      </header>
        <Outlet />
    </>
    
    )
};
export default SharedNavigstion;

