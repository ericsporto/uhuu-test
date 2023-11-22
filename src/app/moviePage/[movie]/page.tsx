'use client';
import Header from '@/components/global/Header';
import CarrouselField from '@/components/moviePage/CarrouselField';
import RecommendationsField from '@/components/moviePage/RecommendationsField';
import SubMovieHeader from '@/components/moviePage/SubMovieHeader';
import VideoField from '@/components/moviePage/VideoField';
import useFetchMovieById from '@/requests/queries/getMoviesById';
import useFetchRecommendations from '@/requests/queries/getRecommendations';

interface MoviePageProps {
  params: {
    movie: string | number;
  };
}

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  const { data: movie } = useFetchMovieById(params.movie);
  const {data: recommendations} = useFetchRecommendations()

  return (
    <main className="flex flex-col min-h-screen items-start max-w-[1440px] m-auto bg-[#F3F3F3]">
      <Header />
      <SubMovieHeader movie={movie} />
      <CarrouselField movie={movie} />
      <VideoField movie={movie} />
      <RecommendationsField movies={recommendations}/>
    </main>
  );
};

export default MoviePage;
