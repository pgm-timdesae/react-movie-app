import Error from '../movie/Error';
import Loading from '../movie/Loading';
import useFetch from '../../hooks/useFetch';
import { device } from '../../deviceQuerys';
import SelectedVideo from './SelectedVideosHome';
import styled from 'styled-components';

const VideoSection = styled.section`
  margin: 0 2rem;
`

const VideoList = styled.ul`
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  overflow-x: scroll;
  white-space: nowrap;
  transform: translateZ(0);
  scroll-snap-type: x mandatory;

  @media ${device.laptop}{
    margin: 1rem 2rem;
  }
`

// First fetch the popular movies and then send the id with the selectedVideo component
const API = "https://api.themoviedb.org/3/movie/popular?api_key=eaac9d6ba629f37e70d4e6177e43fb2a";

const VideoHomePage = () => {

  const [ movie, isLoading, error] = useFetch(API);
  
  return (
    <VideoSection>
      {
        error ? <Error>{error}</Error> :
        isLoading || !movie ?
        <Loading /> :

        <VideoList>
          {movie.results.map ((m) => {
            return (
              <SelectedVideo id={m.id} name={m.title}/>
            )
          })}
        </VideoList>
      }
    </VideoSection>
  )
}

export default VideoHomePage;