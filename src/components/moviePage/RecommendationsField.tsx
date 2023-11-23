import MovieCard from '../searchPage/MovieCard';
import { DiscoverListModel } from '@/interfaces/discover';

interface RecommendationsProps {
  movies?: DiscoverListModel;
}

const RecommendationsField: React.FC<RecommendationsProps> = ({ movies }) => {
  return (
    <section className="w-full flex flex-col pb-24 pt-4 lg:pt-12 px-4 lg:px-28">
      <span className="font-bold text-theme-dark text-[28px] leading-8">
        Recomendações
      </span>
      <div className="w-full py-8 flex flex-wrap overflow-auto justify-between gap-4 lg:gap-8">
        {movies?.results.slice(0, 6).map((item) => (
          <MovieCard
            key={item.id}
            background={item.poster_path}
            name={item.title}
            date={item.release_date}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendationsField;
