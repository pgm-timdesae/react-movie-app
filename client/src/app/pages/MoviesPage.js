import { BaseLayout } from '../layouts';
import MovieListPopular from '../components/movie/MovieListPopular';
import MovieListSoon from '../components/movie/MovieListSoon';
import TopRated from '../components/movie/MovieListTopRated';



const MoviesPage = () => {
  return (
    <BaseLayout>
      <h2>Populair</h2>
      <MovieListPopular/>

      <h2>Coming soon</h2>
      <MovieListSoon/>

      <h2>Top Rated</h2>
      <TopRated/>
    </BaseLayout>
  )
}

export default MoviesPage;