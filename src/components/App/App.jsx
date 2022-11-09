import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

const MovieDetails = lazy(() => import("components/MovieDetails/MovieDetails"));
const SharedNavigstion = lazy(()=>import("components/SharedNavigation/SharedNavigation"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedNavigstion />}>
          <Route index element={ <Home/>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={ <Reviews/> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

