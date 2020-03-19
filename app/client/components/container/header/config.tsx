import { ContainerConfig } from '../../../../utils/create-container';
import { State } from '../../../redux/store/model';
import { Header, Props as StateProps } from '../../visual/header'

export class Config implements ContainerConfig<State, StateProps> {
  public component = Header;
  public name = 'Header';

  public mapStateToProps(state: State): StateProps {
    if (!state.ui || !state.ui.loginUser) return { isLoggedIn: false };
    const {  loginUser: { firstName, lastName } } = state.ui;
    return {
      firstName,
      lastName,
      isLoggedIn: true,
    }
  }
}