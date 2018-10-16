import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: 5px solid ${props => props.theme.primaryColor}
  font-size: 20px;
  outline: none;
  color: ${props => props.theme.primaryColor};
  
  /* primary */
  ${props =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `};
`;

export default Button;
