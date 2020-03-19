import { Action } from 'redux';
import { User } from '../../store/model';

export interface SetLoginUser extends Action {
  type: 'setLoginUser';
  user: User;
}

export const setLoginUser = (user: User): SetLoginUser => ({
  user,
  type: 'setLoginUser',
});

export type LoginAction = SetLoginUser;
