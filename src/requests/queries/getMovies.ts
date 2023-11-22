import { QueryFunctionContext, useQuery } from 'react-query';
import { api } from '@/services/api';
import { MoviesListModel } from '@/interfaces/movies';

async function getMovieList(ctx: QueryFunctionContext) {
  const [, search, page] = ctx.queryKey;
  try {
    const response = await api.get<MoviesListModel>(`search/movie?query=${search}&page=${page}`);

    return response.data;
  } catch {}
}

export default function useFetchMovieList(search: string[], page:number) {
  return useQuery(['movies', search, page], getMovieList, {
    refetchOnWindowFocus: false,
  });
}
