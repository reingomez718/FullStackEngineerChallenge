import { MainPage } from './components/pages/main';
import { LoginPage } from './components/pages/login';
import { FeedbackPage } from './components/pages/feedback';
import { UserPage } from './components/pages/user';

export default [
  {
    component: MainPage,
    routes: [
      {
        component: MainPage,
        path: '/',
        exact: true,
      },
      {
        component: LoginPage,
        path: '/login',
      },
      {
        component: FeedbackPage,
        path: '/feedback',
      },
      {
        component: UserPage,
        path: '/user',
      },
    ],
  },
];
