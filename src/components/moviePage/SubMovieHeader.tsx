import { MovieById } from '@/interfaces/movieById';
import MovieDetailCard from './MovieDetailCard';
import CircularProgressBar from './ProgressBar';

interface SubHeaderProps {
  movie?: MovieById;
}

const SubMovieHeader: React.FC<SubHeaderProps> = ({ movie }) => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center gap-4 xl:gap-0 lg:items-start lg:h-[600px] bg-theme-primary lg:p-20 text-center">
      <aside className="lg:w-[50%] flex xl:ml-8">
        <div className="w-[186px] lg:w-[383px] h-[279px] lg:h-[574px] mt-10 lg:mt-0">
          <MovieDetailCard background={movie?.poster_path} />
        </div>
      </aside>
      <aside className="w-full flex flex-col text-left mt-10 lg:mt-0 px-4 lg:px-0">
        <span className="text-theme-neutral font-bold text-[32px] leading-[38px]">
          {movie?.title}
        </span>
        <div className="flex flex-col md:flex-row flex-wrap break-all md:items-center gap-4 mt-3 lg:mt-2">
          <span className="text-theme-neutral font-normal text-lg leading-3 lg:leading-6">
            {movie?.release_date}
          </span>
          <span className="text-theme-neutral font-normal text-lg leading-3 lg:leading-6">
            ({movie?.original_language})
          </span>
          <div className="text-theme-neutral font-normal text-lg leading-3 lg:leading-6">
            {movie?.genres.map((item) => (
              <span className="mr-2">{item.name}</span>
            ))}
          </div>
        </div>
        <div className="flex w-full mt-8 lg:mt-2 justify-start items-center">
          <CircularProgressBar
            percentage={movie?.vote_average}
            color="#14FF00"
          />
          <span className="text-theme-neutral font-normal text-lg lg:text-base leading-5 lg:leading-6 w-28 lg:w-24 ml-2">
            Avaliação dos usuários
          </span>
        </div>
        <div className="flex flex-col mt-6 pr-10">
          <span className="text-theme-neutral font-bold text-xl leading-6">
            Sinopse
          </span>
          <span className="text-[#DDDDDD] font-normal text-lg lg:text-base leading-6 mt-6 md:mt-0">
            {movie?.overview}
          </span>
        </div>
        <div className="flex mt-8 lg:mt-6 lg:w-[60%] justify-between pb-16 lg:pb-0">
          <div className="flex flex-col">
            <span className="text-theme-neutral font-bold text-lg lg:text-base leading-6">
              Título original
            </span>
            <span className="text-theme-neutral font-normal text-sm leading-5">
              {movie?.original_title}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-theme-neutral font-bold text-lg lg:text-base leading-6">
              Idioma original
            </span>
            <span className="text-theme-neutral font-normal text-sm leading-5">
              {movie?.original_language}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-theme-neutral font-bold text-lg lg:text-base leading-6">
              Status
            </span>
            <span className="text-theme-neutral font-normal text-sm leading-5">
              {movie?.status}
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default SubMovieHeader;
