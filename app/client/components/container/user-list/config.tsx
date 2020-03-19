import { ContainerConfig } from '../../../../utils/create-container';
import { State } from '../../../redux/store/model';
import { UserList, Props as StateProps } from '../../visual/user-list'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../../../redux/actions';

export class Config implements ContainerConfig<State, StateProps, null> {
  public component = UserList;
  public name = 'UserList';

  public init(dispatch: ThunkDispatch<State, null, Action>, stateProps, state: State) {
    if (!state.ui || !state.ui.displayuserInfo || !state.ui.displayuserInfo.user) {
      //dispatch()
    }
  }

  public mapStateToProps(state: State): StateProps {
    if (!state.ui || !state.ui.displayuserInfo) return;
    const { displayuserInfo: { user } } = state.ui;
    return {
      users,
    }
  }
}