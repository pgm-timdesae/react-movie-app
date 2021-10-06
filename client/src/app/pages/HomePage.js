/* Import layouts */
import { BaseLayout } from '../layouts';
import styled from 'styled-components';

import MovieListTrending from '../components/movie/MovieListTrending';
import MovieListPopular from '../components/movie/MovieListPopular';
import VideoHomePage from '../components/video/VideoHomePage';


const ContentContainer = styled.div `
  flex: 1 0 auto
`


const HomePage = () => {
  return (
    <BaseLayout>
      <ContentContainer>
        
        <h2>Popular</h2>
        <MovieListPopular/>

        <h2>New Trailers</h2>
        <VideoHomePage/>

        <h2>Trending</h2>
        <MovieListTrending/>

      </ContentContainer>
    </BaseLayout>
  )
}

export default HomePage;