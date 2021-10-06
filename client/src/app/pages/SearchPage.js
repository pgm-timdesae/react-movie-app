/* Import layouts */
import { BaseLayout } from '../layouts';
import MovieListSearch from '../components/movie/MovieListSearch';

const SearchPage = () => {
  return (
    <BaseLayout>
      <MovieListSearch/>
    </BaseLayout>
  )
}

export default SearchPage;