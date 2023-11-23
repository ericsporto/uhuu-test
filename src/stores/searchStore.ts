import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  search: string;
  page: number;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
}

const useSearchStore = create(
  persist<StoreState>(
    (set) => ({
      page: 1,
      search: '',
      setPage: (page) => set({ page }),
      setSearch: (search) => set((state) => ({ ...state, search })),
    }),
    {
      name: 'search-storage',
    }
  )
);

export default useSearchStore;
