import { IRoutes } from './types';
import { Home, Login, SignUp, NotFound } from '../pages';

export const privatRoutes: IRoutes[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export const publicRoutes: IRoutes[] = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '*',
    exact: true,
    component: NotFound,
  },
  {
    path: '/signUp',
    exact: true,
    component: SignUp,
  },
];
