import React from 'react'
import styled from 'styled-components';

const Keyword = styled.span`
  display: inline-block;
  border: 1px solid #FF0033;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #FF0033;
    color: #fff;
  }
`

export const Movietag = ({ type, name }) => {
  return (
      <Keyword type={type}>{name}</Keyword>               
  )
}

export default Movietag;