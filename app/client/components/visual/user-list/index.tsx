
import React from 'react';
import { User } from '../../../redux/store/model';
import { Link } from 'react-router-dom';

export class UserList extends React.Component<Props> {
  public render(): JSX.Element {
    const { users } = this.props;
    if (!users || users.length < 0) return;
    return (
      <>
        {users.map((user) => this.renderUser(user))}
      </>
    );
  }

  private renderUser(user: User) {
    const { firstName, lastName, uid } = user;
    return (
      <div>
        <span>
          <Link to={`userInfo/${uid}`}>{`${lastName}, ${firstName}`}</Link>
        </span>
        {this.renderOperations(user)}
      </div>
    );
  }

  private renderOperations(user: User): JSX.Element {
    const { isAdmin, uid} = user;
    if (!isAdmin) return;
    return (
      <span>
        <Link to={`userEdit/${uid}`}>Edit</Link>
        <Link to={`userDelete/${uid}`}>Delete</Link>
      </span>
    );
  }
}

export interface Props {
  users?: User[];
}

