import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import StyledLink from "./SharedNavigstion.styled";
import { Loading } from "components/Loading/Loading";

const SharedNavigstion = () => {
    return (
    <>
      <header>        
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>          
        </nav>
      </header>
        <Suspense fallback={<Loading/>}>
            <Outlet/>
        </Suspense>
    </>    
    )
};
export default SharedNavigstion;

