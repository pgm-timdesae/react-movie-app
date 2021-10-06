import Navigation from '../navigation/Navigation';
import styled from 'styled-components';

const DarkHeader = styled.header`
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 1rem;
  margin-top: 1rem;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 `

const Header = () => {
  return (
    <DarkHeader>
      <Navigation type="main"/>
    </DarkHeader>
  )
};

export default Header;