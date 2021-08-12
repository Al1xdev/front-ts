import { AuthState, ActionsAuthType, AuthAction } from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  isLoaded: false,
  error: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case ActionsAuthType.IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case ActionsAuthType.IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
      };
    case ActionsAuthType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
