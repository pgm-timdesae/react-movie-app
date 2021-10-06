import styled from 'styled-components';

import Error from '../movie/Error';
import Loading from '../movie/Loading';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router";
import { device } from '../../deviceQuerys';


const Carrousel = styled.div`
  position: relative;
  overflow: hidden;

  h4 {
    padding: 0 2rem;
    margin-top: 2rem;
  }

  @media ${device.laptop}{
    margin: 1rem 2rem;
  }
`

const ListOfCast = styled.div `
  display: flex;
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right:2rem;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  transform: translateZ(0);
  scroll-snap-type: x mandatory;

  h5 {
    width: 90%;
    margin-bottom: 0.5rem;
    letter-spacing: .4px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.8rem;
    margin-bottom: 0;

    &:first-of-type {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`

const PosterPic = styled.picture`
transition: 0.3s ease-in-out;

  img {
      position: relative;
      overflow: hidden;
      width: 33vw;
      margin-right: 1rem;
      object-fit: cover;

      &:hover {
        transform: scale(1.05);
      }

      @media ${device.laptop}{
        width: 15vw;
      }
    }

`


const CastDetailPage = () => {
  let { id } = useParams();
  
  const api = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=eaac9d6ba629f37e70d4e6177e43fb2a`;
  const [ credits, isLoading, error] = useFetch(api);

  console.log(credits)
  

  return (
    <div>
      {
        error ? <Error>{error}</Error> :
        isLoading || !credits ?
            <Loading /> :

            <Carrousel>

              <h4>Cast</h4>

              <ListOfCast>
                {credits.cast.map ((c) => {
                    return (
                      <div key={c.name}>
                        <PosterPic>
                          <img src={c.profile_path !== null ? 'https://image.tmdb.org/t/p/w500' + c.profile_path : 'https://images.pexels.com/photos/4722571/pexels-photo-4722571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt={c.name}/>
                        </PosterPic>
                        <h5>{c.name}</h5>
                        <h5>{c.character}</h5>
                      </div>
                
                    )
                  })}
              </ListOfCast>
            </Carrousel>
      }
    </div>
  )
}

export default CastDetailPage;