import React from 'react'
import styled from 'styled-components';

import Error from '../movie/Error';
import Loading from '../movie/Loading';
import useFetch from '../../hooks/useFetch';


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

const VideoListItem = styled.li`
  list-style: none;
`

export const SelectedVideosHome = ({ id, name}) => {

  const api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=eaac9d6ba629f37e70d4e6177e43fb2a`;
  const [ video, isLoading, error] = useFetch(api);  

  return (
    <VideoListItem key={id}>
      {
        error ? <Error>{error}</Error> :
        isLoading || !video ?
            <Loading /> :

            <div>

              <div>
                {video.results.map ((v) => {
                    
                    return v.name === 'Official Trailer' ? (
                      <VideoContainer>
                        <iframe title={name}
                          src={'https://www.youtube.com/embed/' + v.key}>
                        </iframe> 

                        <h5>{name}</h5>
                      </VideoContainer>
                    ) : ''
                  })}
              </div>
            </div>
      }
    </VideoListItem>
  )
}

export default SelectedVideosHome;