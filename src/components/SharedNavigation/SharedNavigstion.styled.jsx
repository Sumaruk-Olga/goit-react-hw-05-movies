import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`    
    color: black;

    &.active{
        color:red;
    }

     :hover:not(.active) {
    color: orange;
  }
`;

export default StyledLink;

