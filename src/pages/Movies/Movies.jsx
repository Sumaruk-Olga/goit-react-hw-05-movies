import { Field, Form, Formik } from "formik";
import { FcSearch } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    return <div>
        <p>Movies searchbar</p>
        <Formik>
            <Form>
                <Field />
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

// {/* <Formik
//             initialValues={{ searchValue: '' }}
//             onSubmit={(values, {resetForm}) => {
//                 onSubmit(values);
//                 resetForm();
//     }}>
//     <StyledForm>
//         <SearchButton type="submit">
//             <FcSearch/>
//         </SearchButton>

//     <StyledField
//         type="text"
//         name="searchValue"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//     />
//     </StyledForm>
// </Formik> */}