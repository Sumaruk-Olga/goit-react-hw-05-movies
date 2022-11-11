import styled from "@emotion/styled";

export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 12px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: ${p=>p.theme.space[4]}px;
    margin-top: ${p=>p.theme.space[0]};
    margin-bottom: ${p=>p.theme.space[4]};
    padding: ${p=>p.theme.space[0]}px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    `;


