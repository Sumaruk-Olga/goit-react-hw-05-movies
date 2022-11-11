import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const GoBackLink = styled(NavLink)`  
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 150px;
  height: 30px;
  text-decoration:none;
  color:${p => p.theme.text.primary};
  cursor: pointer;
  margin-top: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;

    &.active{
        color:${p => p.theme.text.secondary};
    }

    :hover:not(.active),
    :focus:not(.active) {
    transform: scale(1.25);
  }
`;

export const StyledLink = styled(NavLink)`  
text-decoration:none;
font-size: ${p=>p.theme.fontSizes.m};
cursor: pointer;

    &.active{
        color:${p => p.theme.text.secondary};
    }

    :hover:not(.active),
    :focus:not(.active) {
    font-weight: 700;
  }
`;

export const AdditionalInfo = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
margin-top: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[4]}px;
@media screen and (min-width: 768px) {
  width: 70%;
  margin-left:${p => p.theme.space[4]}px;
  margin-right: auto;
}

@media screen and (min-width: 1280px) {
  width: 40%;
}
`;