import { RouterItem } from '../types/Routes';
import { Home, Login, SignUp, NotFound } from '../pages';

export const routes: RouterItem[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/signUp',
    exact: true,
    component: SignUp,
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
  },
];
