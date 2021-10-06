/* Import layouts */
import { BaseLayout } from '../layouts';
import styled from 'styled-components';

import illustration404 from '../../assets/images/404.png';

const Error = styled.div`
  width: 75%;
  margin: 0 auto;

  img {
    object-fit: cover;
    max-width: 100%;
  }
` 

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <Error>
        <img src={illustration404} alt="Logo" />
        <h1>Ow no... you are totally lost!</h1>
      </Error>
    </BaseLayout>
  )
}

export default NotFoundPage;