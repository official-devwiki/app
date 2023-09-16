import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action, AnyAction, CombinedState, Reducer,
} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import logger from 'redux-logger';
import {UtilSlice, UtilState} from '@store/slice/utilSlice';
import {AuthSlice, AuthState} from '@store/slice/authSlice';
import {QuizSlice, QuizState} from '@store/slice/quizSlice';

// import {isProduction} from '@utils/common';

export interface RootState {
  utils: UtilState;
  auth: AuthState;
  quiz: QuizState;
}

const RootReducer = (state: RootState, action: AnyAction): CombinedState<RootState> => {
  if (action.type === HYDRATE) return {...state, ...action.payload};
  const combinedReducer = combineReducers({
    [UtilSlice.name]: UtilSlice.reducer,
    [AuthSlice.name]: AuthSlice.reducer,
    [QuizSlice.name]: QuizSlice.reducer,
  });
  return combinedReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),


  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action>;
