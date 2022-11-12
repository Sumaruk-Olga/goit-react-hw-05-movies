import { Formik } from "formik";
import * as Yup from 'yup';
import { FcSearch } from "react-icons/fc";
import {  useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByName } from "services/Api";
import { Loading } from "components/Loading/Loading";
import { Error, Page } from "components/common/common.styled";
import Gallery from "components/Gallery/Gallery";
import { SearchBar, SearchButton, StyledField } from "./Movies.styled";

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);  
    const [searchNotFound, setSearchNotFound] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') ?? '';

    const validationSchema = Yup.object({
        searchValue: Yup.string().required(),
});
    

    useEffect(() => { 
        const fetchData = async () => {
        if (search === '') { return }
            try {    
                setError(null);
                setMovies(null);
                setSearchNotFound(null);
                setLoading(prevLoading => !prevLoading);
                const data = await searchByName(search);
                if (data.results.length === 0) {
                    setSearchNotFound(`can't found ${search}`)
                } else {
                    setMovies(data.results);
                    setSearchNotFound(null);
                }           
        } catch (error) {
            setError(error.message);
        }finally {
                setLoading(prevLoading => !prevLoading);
            }
        };
        fetchData();
        
    }, [search]);
    
    const onSubmit = ({searchValue}) => {        
        setSearchParams(searchValue !== '' ? { search: searchValue } : {});        
    }

    return <Page>
        <Formik initialValues={{ searchValue: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                onSubmit(values);
                resetForm();
    }}>
            <SearchBar>
                <StyledField type="text"
                    name="searchValue"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search film"/>
                <SearchButton type="submit">
                    <FcSearch/>
                </SearchButton>
            </SearchBar>
            </Formik>
        {loading && <Loading />}
        {error && <Error>Sorry, can't found {search}</Error>}
        {searchNotFound && <Error>{ searchNotFound }</Error>}
        {movies?.length > 0 && <Gallery arr={movies} use="movie"/> }         
    </Page>
};
export default Movies;