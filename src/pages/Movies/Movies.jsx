import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { FcSearch } from "react-icons/fc";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') ?? '';

    const validationSchema = Yup.object({
        searchValue: Yup.string().required(),
});
    
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
        <p>list of films after fetch</p>
        <Link to="movieId" state={{ from: location }}>film</Link>
    </div>
};
export default Movies;

//замість "movieId" треба буде вставляти динамічно
// { ` &{qwe} ` }