import React from 'react'
import styled from 'styled-components';

const SignInBtn = styled.button `
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #FF0033;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;

  :hover {
    opacity: 0.75;
  }
`

export const Btn = ({ type }) => {
  return (
    <SignInBtn type={type}>Sign In</SignInBtn>
  )
}

export default Btn;
