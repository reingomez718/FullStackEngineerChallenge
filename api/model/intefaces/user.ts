export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  isAdmin?: boolean;
}

export type UserProfile = Omit<User, 'password'>;
