import { Response, Request } from 'express';
import { getUserByUserName } from '../model/data/users/get-user-by-user-name';
import { getHash } from '../utils/get-hash';
import { UserProfile, User } from '../model/intefaces/user';

export const loginController = async (req: Request, res: Response) : Promise<void> => {
  const userName = req.body.userName;
  const password = req.body.password;

  const user: User = await getUserByUserName(userName);
  let response: LoginResponse;

  if (!user) {
    response = { result: 'USER_NOT_EXIST' };
  } else if (user.password !== getHash(password)) {
    response = { result: 'LOGIN_FAILED' };
  } else {
    const { password: pwd, ...userProfile } = user;
    response = { userProfile, result: 'LOGIN_SUCCESSFUL' };
  }

  res.send(response);
};

interface LoginResponse {
  result: LoginResult,
  userProfile?: UserProfile,
}

export type LoginResult =
  | 'LOGIN_SUCCESSFUL'
  | 'LOGIN_FAILED'
  | 'USER_NOT_EXIST';
