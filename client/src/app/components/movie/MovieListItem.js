import styled from 'styled-components';
import { FiStar } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { device } from '../../deviceQuerys';


import * as Routes from '../../routes';


const ListItemMovie = styled.div`
  position: relative;
  width: 33.333%;
  display: inline-block;
  padding-right: 8px;
  margin: 0;
  white-space: normal;
  vertical-align: top;
  scroll-snap-align: start;

  @media ${device.laptop}{
    width: 18%;
  }
`
const MovieTitleHeader5 = styled.h5`
  margin-top: 1rem;
  line-height: 1.2;
  
  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
  }
`

const ListItemMovieContent = styled.div`
  display: flex;
  align-itme: center;
  margin-top: 0.5rem;

  svg {
    fill: #FF0033;
    stroke: #FF0033;
  }
`
const Score = styled.span`
  display: inline-block;
  color:#FF0033;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  font-weight: 600;
`

const PosterPic = styled.picture`
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const MovieListItem = ({ title, poster_path, score, id}) => {
  return (
    <ListItemMovie>
      <PosterPic>
        <img src={poster_path !== null ? 'https://image.tmdb.org/t/p/original' + poster_path : 'https://images.pexels.com/photos/4722571/pexels-photo-4722571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt={title}/>
      </PosterPic>

      <MovieTitleHeader5>
        <Link to={Routes.MOVIE_DETAILS.replace(':id', id)}>{title}</Link>
      </MovieTitleHeader5>

      <ListItemMovieContent>
        <Score>{score}</Score>
        <span><FiStar/></span>
      </ListItemMovieContent>
    </ListItemMovie>
  )
};

export default MovieListItem;