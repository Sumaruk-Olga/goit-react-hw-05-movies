import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import SharedNavigstion from "components/SharedNavigation/SharedNavigation";





const App = () => {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<SharedNavigstion />}>
          <Route index element={ <Home/>} />
          <Route path="/movies" element={<Movies />} />        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;


