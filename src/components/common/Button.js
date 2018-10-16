import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: white;
  border: 5px solid black;
  font-size: 20px;
  color: #212121;

  ${props =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `};
`;

export default Button;
