import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.svg};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 2px 4px;
  margin: 0 12px;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          Switch Theme
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;