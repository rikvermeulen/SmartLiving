import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.svg};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  margin: 0 12px;

  background-image: url("./images/moon.png");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: center;
  padding: 4px 12px;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          <img src=""/>
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;