import { useQuery } from 'react-query';
import { api } from '@/services/api';
import { DiscoverListModel } from '@/interfaces/discover';

async function getRecommendations() {
  try {
    const response = await api.get<DiscoverListModel>(
      `discover/movie?&language=pt-BR`
    );

    return response.data;
  } catch {}
}

export default function useFetchRecommendations() {
  return useQuery(['recommendations'], getRecommendations);
}
