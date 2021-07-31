import {
  ActionsAuthType,
  SetIsAuthenticated,
  SetError,
  SetIsLoaded,
  SignUp,
  Login,
  Logout,
} from './types';
import { UserCredential, UserData } from '../../../types/Auth';

export const setIsAuthenticated = (
  isAuthenticated: boolean,
): SetIsAuthenticated => ({
  type: ActionsAuthType.IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

export const setIsLoaded = (isLoaded: boolean): SetIsLoaded => ({
  type: ActionsAuthType.IS_LOADED,
  payload: {
    isLoaded,
  },
});

export const setError = (error: boolean): SetError => ({
  type: ActionsAuthType.SET_ERROR,
  payload: { error },
});

export const signUp = (userData: UserData): SignUp => ({
  type: ActionsAuthType.SIGN_UP,
  payload: { userData },
});

export const login = (userCredential: UserCredential): Login => ({
  type: ActionsAuthType.LOGIN,
  payload: { userCredential },
});

export const logout = (): Logout => ({
  type: ActionsAuthType.LOGOUT,
  payload: null,
});
