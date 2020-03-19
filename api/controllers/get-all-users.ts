import { UserProfile } from '../model/intefaces/user';
import { getAllUsers } from '../model/data/users/get-all-users';
import { Request, Response } from 'express';

export const getAllUsersController = async (req: Request, res: Response) : Promise<void> => {
  const userUid = req.params.uid;
  let response: GetUserProfileResponse;

  const users = await getAllUsers();

  if (!users || users.length < 1) {
    response = { result: 'NO_REGISTERED_USERS' };
  } else {
    response =  { users, result: 'SUCCESS' };
  }
  res.send(response);
}

interface GetUserProfileResponse {
  result: GetUserProfileResult,
  users?: UserProfile[],
}

export type GetUserProfileResult =
  | 'SUCCESS'
  | 'NO_REGISTERED_USERS';
