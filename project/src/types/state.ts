import { AuthStatus } from '../const';
import { RootState } from '../store/root-reducer';

import { CommentGet, Film } from './data';

export type AppData = {
  currentFilm: Film;
  currentComments: CommentGet[];
  allFilms: Film[];
  isDataLoading: boolean;
  isDataPosting: boolean;
};

export type AppProcess = {
  movieInfo: string;
  isFilmInList: boolean | null;
};

export type UserProcess = {
  authStatus: AuthStatus;
  avatarUrl: string;
};

export type State = RootState;
