import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import SharedNavigstion from "components/SharedNavigation/SharedNavigation";
import MovieDetails from "components/MovieDetails/MovieDetails";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";





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

// <Route path="products" element={<Products />} />
// <Route path="products/:id" element={<ProductDetails />} /> 

