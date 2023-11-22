import { QueryFunctionContext, useQuery } from 'react-query';
import { api } from '@/services/api';
import { MovieById } from '@/interfaces/movieById';

async function getMovieById(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey;
  try {
    const response = await api.get<MovieById>(`movie/${id}&language=pt-BR`);

    return response.data;
  } catch {}
}

export default function useFetchMovieById(id:number | string) {
  return useQuery(['movie-by-id', id], getMovieById);
}
