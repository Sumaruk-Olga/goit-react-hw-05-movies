import styled from "@emotion/styled";

export const Page = styled.main`
    padding-bottom: ${p => p.theme.space[5]}px;  
`;

export const Error = styled.h1`
background-color: red;
color: black;
`;

export const PageTitle = styled.h1`
    display: block;
    text-align: center;
    font-style: italic;
    margin-bottom:${p => p.theme.space[4]}px; 
    margin-top:${p => p.theme.space[4]}px;   
`;

