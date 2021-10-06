import styled from 'styled-components';

import Error from '../movie/Error';
import Loading from '../movie/Loading';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router";
import { device } from '../../deviceQuerys';

const VideoArticle = styled.article`
  margin-top: 2rem;

  @media ${device.laptop}{
    margin: 1rem 2rem;
    margin-top: 4rem;
  }
`

const Carrousel = styled.div`
  position: relative;
  overflow: hidden;

  h4 {
    padding: 0 2rem;
  }
`

const ListOfVideos = styled.div `
  display: flex;
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right:2rem;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  transform: translateZ(0);
  scroll-snap-type: x mandatory;
`

const VideoContainer = styled.div`

  h5 {
    width: 18rem;
    margin-bottom: 0.5rem;
    letter-spacing: .4px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  iframe {
    height: auto;
    margin-right: 1rem;
    border: none;
  }
`

const VideoDetailPage = () => {
  let { id } = useParams();
  
  const api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=eaac9d6ba629f37e70d4e6177e43fb2a`;
  const [ video, isLoading, error] = useFetch(api);
  

  return (
    <VideoArticle>
      {
        error ? <Error>{error}</Error> :
        isLoading || !video ?
            <Loading /> :

            <Carrousel>

              <h4>Videos</h4>

              <ListOfVideos>
                {video.results.map ((v) => {
                    return (
                      <VideoContainer key={v.name}>
                        <h5>{v.name}</h5>

                        <iframe title={v.name}
                          src={'https://www.youtube.com/embed/' + v.key}>
                        </iframe> 
                      </VideoContainer>
                    )
                  })}
              </ListOfVideos>
            </Carrousel>
      }
    </VideoArticle>
  )
}

export default VideoDetailPage;