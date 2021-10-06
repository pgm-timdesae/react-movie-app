import { BaseLayout } from '../layouts';
import { useParams } from "react-router";
import { MovieDetails } from "../components/movie";
import useFetch from '../hooks/useFetch';
import Error from '../components/movie/Error';
import Loading from '../components/movie/Loading';
import VideoDetailPage from '../components/video/VideoDetailPage';
import CastDetailPage from '../components/movie/CastDetailPage';

const MovieDetailPage = () => {
  let { id } = useParams();
  
  const api = `https://api.themoviedb.org/3/movie/${id}?api_key=eaac9d6ba629f37e70d4e6177e43fb2a`;
  const [ movie, isLoading, error] = useFetch(api);
  
  console.log('movie', movie);

  return (
    <BaseLayout>
      <div>
        {
          error ? <Error>{error}</Error> :
          isLoading || !movie ?
              <Loading /> :
              <>
                <MovieDetails movie={movie}/>

                <VideoDetailPage/>

                <CastDetailPage/>
              </>
        }
      </div>
    </BaseLayout>
  )
}

export default MovieDetailPage;