import { Outlet } from "react-router-dom";
import { Suspense } from "react";
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
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    </>    
    )
};
export default SharedNavigstion;

