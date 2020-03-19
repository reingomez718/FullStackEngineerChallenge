import { Action } from '../actions';
import { updateState } from '../../../utils/update-state';
import { State } from '../store/model';

export function login(state: State = null, action: Action) {
  switch (action.type) {
    case 'setLoginUser':
      const newState: State = {
        ui: {
          loginUser: action.user,
        }
      };
      return updateState(state, newState);
    default:
      return state;
  }
}
