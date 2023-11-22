import { MoviesListModel } from '@/interfaces/movies';
import MovieCard from './MovieCard';
import Spinner from './Spinner';

interface MoviesFieldProps {
  movies?: MoviesListModel;
  isLoading: boolean;
}

const MoviesField: React.FC<MoviesFieldProps> = ({ movies, isLoading }) => {
  return (
    <section
      className={
        isLoading
          ? 'flex w-full items-center justify-center'
          : 'flex w-full flex-wrap gap-8 justify-start px-28 mt-8'
      }
    >
      {movies?.results.map((item) => (
        <MovieCard
          key={item.id}
          background={item.poster_path}
          name={item.title}
          date={item.release_date}
        />
      ))}
      {isLoading && (
        <div className="w-full flex justify-center items-center mt-56">
          {isLoading ? <Spinner color="#5C16C5" size="w-32 h-32" /> : ''}
        </div>
      )}
      {movies?.results.length === 0 && (
        <div className="flex w-full items-center justify-center mt-8">
          <span className="font-semibold">
            Nenhum resultado para este tipo ou combinação de filtros!
          </span>
        </div>
      )}
    </section>
  );
};

export default MoviesField;
