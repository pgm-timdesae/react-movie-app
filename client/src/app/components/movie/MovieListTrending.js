//import { useState, useEffect } from 'react';
//import { useFirestore } from "../../contexts/firebase/firestore.context";
import styled from 'styled-components';
import MovieListItem from './MovieListItem';
import Error from './Error';
import Loading from './Loading';
import { device } from '../../deviceQuerys';
import useFetch from '../../hooks/useFetch';

const Carrousel = styled.div`
  position: relative;
  overflow: hidden;

  @media ${device.laptop}{
    margin: 1rem 2rem;
  }
`

const ListOfMovies = styled.div`
  margin-top: 1rem;
  margin-right: 2rem;
  margin-left: 2rem;
  overflow: hidden;
  overflow-x: scroll;
  line-height: 0;
  white-space: nowrap;
  transform: translateZ(0);
  scroll-snap-type: x mandatory;
`

/* const MoreBtn = styled.button`
  margin-left: 2rem;
  background: none;
  color: #FF0033;
  border: none;
` */

const API = "https://api.themoviedb.org/3/movie/now_playing?api_key=eaac9d6ba629f37e70d4e6177e43fb2a";

const MovieListSoon = () => {
  const [ movie, isLoading, error] = useFetch(API);
  
  return (
    <div>
      {
        error ? <Error>{error}</Error> :
        isLoading || !movie ?
            <Loading /> :

            <Carrousel>
              <ListOfMovies className="movie-list">
                {movie.results.map ((m) => {
                  return <MovieListItem id={m.id} title={m.title} poster_path={m.poster_path} score={m.vote_average}/>
                })}
              </ListOfMovies>
            </Carrousel>
      }
    </div>
  )
}

export default MovieListSoon;