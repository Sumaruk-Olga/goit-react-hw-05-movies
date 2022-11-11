import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {StyledLink, Header} from "./SharedNavigstion.styled";
import { Loading } from "components/Loading/Loading";

const SharedNavigstion = () => {
    return (
    <>
      <Header>        
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>          
        </nav>
      </Header>
        <Suspense fallback={<Loading/>}>
            <Outlet/>
        </Suspense>
    </>    
    )
};
export default SharedNavigstion;

