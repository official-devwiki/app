import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface PageInitialState extends Action{
  currentPage: string;
  pageTitle: string;
  setCurrentPage: (payload: string) => void;
  setCurrentPageTitle: (payload: string) => void;
}

interface Action {
  setCurrentPage: (payload: string) => void;
  setCurrentPageTitle: (payload: string) => void;
}

interface State {
  currentPage: string;
  pageTitle: string;
}
const initialState: State = {
  currentPage: '',
  pageTitle: '데브위키',
}

const STORE_KEY = 'devwiki-admin';

const usePageStore = create(
  persist<PageInitialState>((set,get) => ({
      ...initialState,
      setCurrentPage: (payload: string) => set({currentPage: payload}),
      setCurrentPageTitle: (payload: string) => set({pageTitle: payload}),
    }),
    {name: STORE_KEY}
  )
);
//const middleware = <T>(f: any) => devtools(persist<T>(f, {name: STORE_KEY}));
// const usePageStore = create<PageInitialState>()(
//   middleware<PageInitialState>((set: any) => ({
//     ...initialState,
//     actions: {
//       setCurrentPage: (payload: string) => { set({currentPage: payload})},
//       setCurrentPageTitle: (payload: string) => {set({pageTitle: payload})},
//     }
//   }))
// )

export default usePageStore;
