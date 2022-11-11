import styled from "@emotion/styled";

export const Poster = styled.img`
    width: 100%;
    object-fit: cover;    
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) {
        width: 300px;
    }    
    `;

export const InfoTitle = styled.p`
    display: block;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[2]}px;
    color:${p => p.theme.text.primary};
    font-weight: 400;
    
     @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[4]}px;
        padding-right: ${p => p.theme.space[4]}px;
    }

    @media screen and (min-width: 1280px) {
        padding-left: ${p => p.theme.space[6]}px;
        padding-right: ${p => p.theme.space[6]}px;
    }
`;

export const InfoData = styled.span`
    color:${p => p.theme.text.secondary};
    margin-left: ${p=>p.theme.space[3]}px;
`;

export const DataTitle = styled.h2`
display: block;
    text-align: center;
    /* font-style: italic; */
    margin-bottom:${p => p.theme.space[2]}px; 
    margin-top:${p => p.theme.space[2]}px; 
`;

export const DataText = styled.p`
    display: block;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    text-align: justify;
    color:${p => p.theme.text.primary};
    margin-left: ${p=>p.theme.space[3]}px;
    font-weight: 400;
    @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[4]}px;
        padding-right: ${p => p.theme.space[4]}px;
    }

    @media screen and (min-width: 1280px) {
        padding-left: ${p => p.theme.space[6]}px;
        padding-right: ${p => p.theme.space[6]}px;
    }
`;

export const Wrapper = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;