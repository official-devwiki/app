import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PageInitialState {
  currentPage: string;
  pageTitle: string;
  setCurrentPage: (page: string) => void;
  setCurrentPageTitle: (title: string) => void;
};


const STORE_KEY = 'devwiki-admin'


const usePageStore = create(
  persist<PageInitialState>((set,get) => ({
      currentPage: '',
      pageTitle: '데브위키',
      setCurrentPage: (payload: string) => { set({currentPage: payload})},
      setCurrentPageTitle: (payload: string) => {set({pageTitle: payload})},
    }),
    {name: STORE_KEY}
  )
);
export default usePageStore;