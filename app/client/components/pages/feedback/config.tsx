import React from 'react';
import { ContainerConfig } from '../../../../utils/create-container';
import { State } from '../../../redux/store/model';
import { Header } from '../../container/header';

export class Config implements ContainerConfig<State, void> {
  public component = React.Fragment;
  public name = 'MainPage';

  public mapStateToProps(state: State) {
    return {
      children: (
        <>
          <Header />
        </>
      )
    }
  }
}