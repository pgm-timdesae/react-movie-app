import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { FiHome } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { device } from '../../../deviceQuerys';
import * as Routes from '../../../routes';
//import { useAuth } from '../../../contexts/firebase/auth.context';


const MainNav = styled.nav` 
  height: 3rem;
  display: flex;
  background-color: ${props => props.theme.primary};
  padding-right: 3rem;
  padding-left: 3rem;
`

const FlexList = styled.ul`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background-color: ${props => props.theme.primary};

  li {
    background-color: ${props => props.theme.primary};
    text-decoration: none;

    a {
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.textColor};
      text-decoration: none;
      font-weight: 600;

      svg {
        font-size: 1.5rem;
        text-align: center
      }

      span {
        display:none;
      }
    }
  }

  .current {
    color: #FF0033;
  }

  @media ${device.tablet} { 
    li {      
      a {

        display:flex;
        align-items: center;
  
        span {
          display:inline-block;
          margin-left: 0.5rem;
        }  
      }
    }
  }
`

export const Navigation = ({ type }) => {
  //const {currentUser, signOut} = useAuth();

  return (
    <MainNav type={type}>
      <FlexList>
        <li>
          <NavLink activeClassName="current" to={Routes.LANDING} exact><FiHome/><span>Home</span></NavLink>
        </li>

        <li>
          <NavLink activeClassName="current" to={Routes.MOVIES} exact><FiFilm/><span>Movies</span></NavLink>
        </li>

        <li>
          <NavLink activeClassName="current" to={Routes.SEARCH} exact><FiSearch/><span>Search</span></NavLink>
        </li>

        <li>
          <NavLink activeClassName="current" to={Routes.ACCOUNT} exact><FiUser/><span>Login</span></NavLink>
        </li>
      </FlexList>
    </MainNav>
  )
};

export default Navigation;