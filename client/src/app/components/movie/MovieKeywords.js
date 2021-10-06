import Error from '../movie/Error';
import Loading from '../movie/Loading';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router";
import Keyword from '../Tags/Movietag';


const MovieKeywords = () => {
  let { id } = useParams();
  
  const api = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=eaac9d6ba629f37e70d4e6177e43fb2a`;
  const [ keywords, isLoading, error] = useFetch(api);

  console.log(keywords)
  

  return (
    <div>
      {
        error ? <Error>{error}</Error> :
        isLoading || !keywords ?
            <Loading /> :

              <div>
                {keywords.keywords.map ((c) => {
                    return (
                      <Keyword type="primary" name={c.name} key={c.name}></Keyword>               
                    )
                  })}
              </div>
      }
    </div>
  )
}

export default MovieKeywords;