import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MovieCard = styled.li`
    border-radius: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.page};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
    `;

export const Link = styled(NavLink)`
color: ${p => p.theme.text.primary};
text-decoration: none;
`;

export const Poster = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;    
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    `;