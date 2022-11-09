import { Link, Outlet } from "react-router-dom";

const SharedNavigstion = () => {
    return (
    <>
      <header>        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>          
        </nav>
      </header>
        <Outlet />
    </>
    
    )
};
export default SharedNavigstion;