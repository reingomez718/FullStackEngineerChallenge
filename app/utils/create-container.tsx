import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

export function createContainer<State, StateProps, DispatchProps, OwnProps>(
  config: ContainerConfig<State, StateProps, DispatchProps, OwnProps>
): React.ComponentClass<OwnProps> {
  /** reference to dispatch function */
  let dispatch: Dispatch<Action<string>>;
  /** reference to the state at the moment of creating the component */
  let initialState;

  function mapStateToPropsWrapper(state, ownProps) {
    initialState = state;
    const props = config.mapStateToProps.apply(config, arguments);
    const result = props ? { ...props } : {};
    return result;
  }
  
  function mapDispatchToPropsWrapper() {
    dispatch = arguments[0];
    return (config.mapDispatchToProps && config.mapDispatchToProps.apply(config, arguments)) || {};
  }

  function mergeProps(stateProps, dispatchProps, ownProps) {
    if (config.init && typeof window !== 'undefined' && dispatch) {
      config.init(dispatch, stateProps, initialState, ownProps);
      initialState = null;
      dispatch = null;
    }
    return { ...stateProps, ...dispatchProps };
  }

  const VisualComponent = config.component;

  const component = connect(
    config.mapStateToProps && mapStateToPropsWrapper,
    mapDispatchToPropsWrapper,
    mergeProps,
  )((props) => {
    if (!Object.keys(props).length) return null;
    return <VisualComponent {...props} />;
  });

  if (config.name) component.displayName = config.name;
  return component;
}

export interface ContainerConfig<State, StateProps, DispatchProps = undefined, OwnProps = {}> {
  mapDispatchToProps?: (dispatch: Dispatch<Action<string>>, ownProps?: OwnProps) => DispatchProps;
  mapStateToProps?: (state: State, ownProps?: OwnProps) => StateProps;
  init?: (dispatch: Dispatch<Action<string>>, stateProps?: StateProps, state?: State, ownProps?: OwnProps) => void;
  component: React.ComponentType<{}>;
  name?: string;
}
