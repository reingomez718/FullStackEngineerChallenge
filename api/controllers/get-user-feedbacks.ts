import { Request, Response } from 'express';
import { Feedback } from '../model/intefaces/feedback';
import { getFeedbacksByUid } from '../model/data/feedbacks/get-feedbacks-by-uid';

export const getuserFeedbacksController = async (req: Request, res: Response) : Promise<void> => {
  const userUid = req.params.uid;
  let response: GetUserFeedbacksResponse;

  const feedbacksGiven = await getFeedbacksByUid(userUid) || [];
  const feedbacksReceived = await getFeedbacksByUid(userUid, 'sent') || [];

  if (!feedbacksGiven && feedbacksReceived.length < 1) {
    response = { result: 'NO_FEEDBACKS' };
  } else {
    response = { result: 'SUCCESS', feedbacksGiven, feedbacksReceived };
  }

  res.send(response);
}

interface GetUserFeedbacksResponse {
  result: LoginResult,
  feedbacksGiven?: Feedback[],
  feedbacksReceived?: Feedback[],
}

export type LoginResult =
  | 'NO_FEEDBACKS'
  | 'SUCCESS';