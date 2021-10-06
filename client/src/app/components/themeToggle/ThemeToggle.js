import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { device } from '../../deviceQuerys';

const StyledToggle = styled.label`
  display: block;
  width: 100vw;
  background-color: ${props => props.theme.primary};
  padding: 0.5rem 2rem;

  input {
    border: 1px solid red;
    margin-right: 0.5rem;
  }

  @media ${device.laptop}{
    padding: 1rem 4rem;
  }
`

const ThemeToggle = ({onThemeChange}) => {
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    if (typeof onThemeChange === 'function') {
      onThemeChange(isToggled);
    }
  }, [isToggled, onThemeChange]);

  const handleOnChange = (ev) => {
    setIsToggled(ev.target.checked);
  };

  return (
    <StyledToggle>
      <input type="checkbox" value={isToggled} checked={isToggled} onChange={handleOnChange} />
      {
        isToggled ? 'Enable light mode' : 'Enable cinema mode'
      }
    </StyledToggle>
  )
};

export default ThemeToggle;