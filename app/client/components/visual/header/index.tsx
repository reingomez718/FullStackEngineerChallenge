
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class Header extends React.Component<Props> {
  public render(): JSX.Element {
    const { firstName, lastName, isLoggedIn } = this.props;
    if (firstName && lastName && isLoggedIn) {
      return <div>Welcome {`${lastName}, ${firstName}`}</div>
    }
    return <div>LOGIN</div>
  }
}

export interface Props {
  firstName?: string;
  lastName?: string;
  isLoggedIn?: boolean;
}
