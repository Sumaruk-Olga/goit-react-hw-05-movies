import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const Container = styled.div`
margin-top: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SearchBar = styled(Form)`
    display: flex;
    top: 0;
    right: 0;
    position: sticky;
    align-items: center;
    width: 50%;
    max-width: 600px;
    background-color: #fff;
    border-radius: ${p => p.theme.space[2]}px;
    overflow: hidden;
    margin-top: ${p => p.theme.space[3]}px;    
    margin-bottom: ${p => p.theme.space[3]}px; 
    margin-left: auto;   
    margin-right: ${p => p.theme.space[2]}px;  

    @media screen and (min-width: 768px) {
        width: 90%;
        margin-right: ${p => p.theme.space[3]}px;
    }
`;

export const SearchButton = styled.button`
    display: inline-block;
    width: 40px;
    height: 40px;
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[6]}px;
    border: 0;  
    background-color: ${p=>p.theme.colors.page};
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
}

    & > svg{
        width: 100%;
        height: 100%;
    }
`;

export const StyledField = styled(Field)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: ${p => p.theme.fontSizes.l};
    border: none;
    outline: none;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;

    &::placeholder {
        font: inherit;
        font-size: ${p => p.theme.fontSizes.m};;
}
`;