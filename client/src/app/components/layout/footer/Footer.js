import styled from 'styled-components';
import { device } from '../../../deviceQuerys';

const StyledFooter = styled.footer`
  padding: 1.5rem;
  padding-bottom: 6rem;
  background-color: ${props => props.theme.primary};
  margin-top: 1rem;

  p {
    background: none;
    color: ${props => props.theme.textColor};
    opacity: 0.7;
  }

  @media ${device.laptop}{
    padding: 1rem 4rem 5.5rem 4rem;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2021 Tim De Saeger. All rights reserved. Cookie Policy. Designed and built by me, data provided by TMDb.</p>
    </StyledFooter>
  )
};

export default Footer;