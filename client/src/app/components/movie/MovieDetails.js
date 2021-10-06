import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import styled from 'styled-components';
import { FiStar } from "react-icons/fi";
import { device } from '../../deviceQuerys';
import MovieKeywords from './MovieKeywords';


const Header = styled.div `
  position: relative;
  background-color: ${props => props.theme.primary};

  @media ${device.laptop}{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`

const HeaderImage = styled.div `
  img {
    width: 100%;
  }

  @media ${device.laptop}{
      width: 70%;
    }
`

const HeaderText = styled.div `
  margin: 1rem 2rem;
  padding-bottom: 1rem;

  p {
    display: none;
  }

  span {
    display: inline-block;
    color: #FF0033;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    font-weight: 400;

    svg {
      margin-right: 0.5rem;
    }
  }

  @media ${device.laptop}{
    width: 30%;
    margin: 2rem 4rem;

    p {
      display: block;
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 1rem;
    }
  }
`

const Info = styled.div `
  margin: 1rem 2rem;

  p {
    margin-bottom: 1rem;
  }

  @media ${device.laptop}{
    margin: 2rem 4rem;
    width: 70%;
  }
`

const InfoList = styled.div `
  li {
    display: flex;

    span:first-of-type {
      width: 7rem;
      font-weight: 400;
    }

    span {
      font-weight: 600;
    }
  }

`

const MovieDetails = ({movie}) => {
  return (
    <article>
    <Header>
      <HeaderImage>
        <img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} alt={movie.title}/>
      </HeaderImage>

      <HeaderText>
        <h3>{ movie.title }</h3>
        <p>{ movie.overview }</p>
        <span><FiStar/><span>{movie.vote_average}</span></span>
        <span><VscPreview /><span>{ movie.numReviews }</span></span>
        <span><FiEye /><span>{ movie.numViews }</span></span>

        <MovieKeywords/>
      </HeaderText>
    </Header>

    <Info>
      <div>
        <h4>Storyline</h4>
        <p>{ movie.overview }</p>
      </div>

      <InfoList>
        <li>        
          <span>Released </span> 
          <span>{ movie.release_date }</span>
        </li>
        <li>        
          <span>Language</span> 
          <span>{ movie.original_language }</span>
        </li>
      </InfoList>
    </Info>  
  </article>
  )
}

export default MovieDetails;