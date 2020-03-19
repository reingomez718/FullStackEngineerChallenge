export interface State {
  ui: {
    loginUser?: User,
    displayuserInfo?: {
      user: User,
      feedbacks?: Feedback[],
    }
  },
  data: {
    userList: User[],
  }
};

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
}

export interface Feedback {
  fid: string;
  sender: User,
  message: string;
  rating?: number;
}