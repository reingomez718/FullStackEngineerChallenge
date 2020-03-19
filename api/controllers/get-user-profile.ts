import { Request, Response } from 'express';
import { UserProfile } from '../model/intefaces/user';
import { getUserByUid } from '../model/data/users/get-user-by-uid';

export const getUserProfileController = async (req: Request, res: Response) : Promise<void> => {
  const userUid = req.params.uid;
  let response: GetUserProfileResponse;
  
  const userProfile = await getUserByUid(userUid);

  if (!userProfile) {
    response = { result: 'USER_NOT_EXIST' };
  } else {
    const { password: pwd, ...userInfo} = userProfile;
    response =  { userProfile, result: 'SUCCESS' };
  }
  res.send(response);
}

interface GetUserProfileResponse {
  result: GetUserProfileResult,
  userProfile?: UserProfile,
}

export type GetUserProfileResult = 
  | 'SUCCESS'
  | 'USER_NOT_EXIST';