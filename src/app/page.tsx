'use client';
import Header from '@/components/global/Header';
import MoviesField from '@/components/searchPage/MoviesField';
import Paginate from '@/components/global/Paginate';
import SubHeader from '@/components/searchPage/SubHeader';
import useFetchMovieList from '@/requests/queries/getMovies';
import { buttonTitles } from '@/utils/objects/buttonTitles';
import useSearchStore from '@/stores/searchStore';
import { useEffect } from 'react';

export default function Home() {
  const { search, setSearch, page, setPage } = useSearchStore();
  const description =
    'Milhões de filmes, séries e pessoas para descobrir. Explore já.';

  const { data: movies, isLoading } = useFetchMovieList([search], page);

  useEffect(() => {
    if (movies?.results.length === 0) {
      setPage(1);
    }
  }, [movies?.results]);

  return (
    <main className="flex flex-col min-h-screen items-start max-w-[1440px] m-auto">
      <Header />
      <SubHeader
        buttonTitles={buttonTitles}
        description={description}
        setSearch={setSearch}
      />
      <MoviesField movies={movies} isLoading={isLoading} />
      {movies && movies?.results.length > 0 && (
        <Paginate data={movies} setPage={setPage} page={page} />
      )}
    </main>
  );
}
