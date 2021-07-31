import { UserCredential, UserData } from '../../../types/Auth';

export interface AuthState {
  isAuthenticated: boolean;
  isLoaded: boolean;
  error: string | null;
}

export enum ActionsAuthType {
  IS_AUTHENTICATED = 'IS_AUTHENTICATED',
  IS_LOADED = 'IS_LOADED',
  SET_ERROR = 'SET_ERROR',
  SIGN_UP = 'SIGN_UP',
  LOGOUT = 'LOGOUT',
  LOGIN = 'LOGIN',
}

export interface SetIsAuthenticated {
  type: ActionsAuthType.IS_AUTHENTICATED;
  payload: {
    isAuthenticated: boolean;
  };
}

export interface SetIsLoaded {
  type: ActionsAuthType.IS_LOADED;
  payload: {
    isLoaded: boolean;
  };
}

export interface SetError {
  type: ActionsAuthType.SET_ERROR;
  payload: {
    error: boolean;
  };
}

export interface SignUp {
  type: ActionsAuthType.SIGN_UP;
  payload: {
    userData: UserData;
  };
}

export interface Logout {
  type: ActionsAuthType.LOGOUT;
  payload: null;
}

export interface Login {
  type: ActionsAuthType.LOGIN;
  payload: {
    userCredential: UserCredential;
  };
}

export type AuthAction =
  | SetIsAuthenticated
  | SetIsLoaded
  | SetError
  | Login
  | SignUp
  | Logout;
