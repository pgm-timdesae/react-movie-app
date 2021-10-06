import styled from 'styled-components';
import MovieListItem from './MovieListItem';
import { device } from '../../deviceQuerys';
import { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";

const Carrousel = styled.div`
  position: relative;
  overflow: hidden;
`

const ListOfMovies = styled.div`
  margin-top: 1rem;
  margin-right: 2rem;
  margin-left: 2rem;
  overflow: hidden;
  overflow-x: hidden;
  overflow-x: scroll;
  line-height: 0;
  white-space: nowrap;
  transform: translateZ(0);
  scroll-snap-type: x mandatory;

  @media ${device.laptop}{
    margin: 2rem 4rem;
  }

`

const Form = styled.form`
  margin: 2rem;
  color: white;
  position: relative;

  @media ${device.laptop}{
    margin: 2rem 4rem;
  }
`

const SearchLabel = styled.label`
  input {
    width: 100%;
    background-color: ${props => props.theme.primary};
    border: 1px solid #181818;
    border-radius: 0.5rem;
    padding: 1rem 3rem;
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    outline: 0;

    &:focus {
      border: 1px solid #FF0033;
    }
  }

  svg {
    color: ${props => props.theme.textColor};
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.3rem;
  }
`

const ResultHeader = styled.h3 `
  margin-top: 2rem;
  color: ${props => props.theme.textColor};
`


const MovieListSearch = () => {
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eaac9d6ba629f37e70d4e6177e43fb2a&language=en-US&query=';
  const API = "https://api.themoviedb.org/3/trending/movie/day?api_key=eaac9d6ba629f37e70d4e6177e43fb2a";
  
  const [ movies, setMovies] = useState([]);
  const [ searchTerm, setSearchTerm] = useState(' ');
  console.log(searchTerm)

  useEffect(() => {
    getMovies(API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (setSearchTerm){
      getMovies(SEARCH_API + searchTerm);
    }
  };
  
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      {
            <> 
              <Form onSubmit={handleOnSubmit}>
                <SearchLabel>
                  <input 
                    type="text" 
                    placeholder="Search for a movie" 
                    onChange={handleOnChange} 
                    value={searchTerm}/>
                    <FiSearch/>
                </SearchLabel>
                <ResultHeader>Results for: {searchTerm}</ResultHeader>    
              </Form>

              <Carrousel>
                <ListOfMovies className="movie-list">
                  {movies.map ((m) => {
                    return <MovieListItem id={m.id} title={m.title} poster_path={m.poster_path} score={m.vote_average}/>
                  })}
                </ListOfMovies>
              </Carrousel>
            </>
      }
    </div>
  )
}

export default MovieListSearch;