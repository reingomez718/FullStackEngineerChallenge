

import connPool from '../../../middleware/database';
import { Feedback } from '../../intefaces/feedback';
import { GET_ALL_FEEDBACKS } from './queries/get-all';

export async function getFeedbacksByUid(uid: string, type: FeedBackOwnerType = 'received'): Promise<Array<Feedback>> {
  try {
    const response = await connPool.query(
      `${GET_ALL_FEEDBACKS} ${type === 'received' ? RECEIVED : SENT}`,
      [uid]
    );
    const feedbacks: Feedback[] = JSON.parse(JSON.stringify(response));
    if (!feedbacks || feedbacks.length < 1) return;
    return feedbacks;

  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}

type FeedBackOwnerType = 'received' | 'sent';

const RECEIVED = 'WHERE receiverUid = ?';
const SENT = 'WHERE senderUid = ?';