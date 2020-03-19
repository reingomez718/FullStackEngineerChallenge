import { Request, Response } from 'express';
import { Feedback } from '../model/intefaces/feedback';

export const sendFeedbackController = async (req: Request, res: Response) : Promise<void> => { // : Promise<LoginResult> => {
  const feedback: Feedback = req.body.feedback;
  
  //const response: SendGiftResponse = await sendGift(userName, wish);
  // TODO check
  // return await (() => );
  // res.send(response);
}