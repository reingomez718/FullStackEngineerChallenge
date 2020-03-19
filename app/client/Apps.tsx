import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/container/header';

export class Apps extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    route: PropTypes.objectOf(PropTypes.any),
  };

  public render(): JSX.Element {
    const { route } = this.props;
    return (
      <>
        <Header />
      </>
    );
  }
}

export interface Props {
  route: any;
}
