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
        isAuthenticated: action.payload.isAuthenticated,
        isLoaded: true,
        error: null,
      };
    default:
      return state;
  }
};
