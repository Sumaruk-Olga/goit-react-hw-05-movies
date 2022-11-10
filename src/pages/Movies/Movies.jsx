import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { FcSearch } from "react-icons/fc";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByName } from "services/Api";
import { Loading } from "components/Loading/Loading";

const Movies = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);  
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') ?? '';

    const validationSchema = Yup.object({
        searchValue: Yup.string().required(),
});
    

    useEffect(() => { 
        const fetchData = async () => {
        if (search === '') { return }
            try {
            setLoading(prevLoading => !prevLoading);
                const data = await searchByName(search);
                setMovies(data.results);
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
        
    }, [search]);
    
    const onSubmit = ({searchValue}) => {
        // console.log('searchValue', searchValue);
        setSearchParams(searchValue !== '' ? { search: searchValue } : {});
        console.log('search', search);
    }
    return <div>
        <p>Movies searchbar</p>
        <Formik initialValues={{ searchValue: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                onSubmit(values);
                resetForm();
    }}>
            <Form>
                <Field type="text"
                    name="searchValue"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search film"/>
                <button type="submit">
                    <FcSearch/>
                </button>
            </Form>
        </Formik>
        {loading && <Loading />}
        {error && <div>Sorry, ...</div>}
        { movies?.length > 0 && <>
            
            <ul>{movies.map(item => {
                const movieId = item.id;
                return <li key={item.id}>
                    <Link to={`/movies/${movieId}`} state={{ from: location }} >{item.title}</Link>
                </li>
            })}
            </ul>

            </> 
        }         
    </div>
};
export default Movies;

//замість "movieId" треба буде вставляти динамічно
// { ` &{qwe} ` }