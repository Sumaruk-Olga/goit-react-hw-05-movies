import styled from "@emotion/styled";
import { ImImage } from "react-icons/im";

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

export const AdditionalInfoTitle = styled.h3`
    display: block;
    text-align: center;
    margin-bottom:${p => p.theme.space[2]}px; 
    margin-top:${p => p.theme.space[2]}px;
`;

export const Icon = styled(ImImage)`
width: 100%;
height: 100%;
fill: ${p=>p.theme.colors.secondary};
`;
