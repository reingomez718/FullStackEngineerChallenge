
import connPool from '../../../middleware/database';
import { Feedback } from '../../intefaces/feedback';
import { INSERT_FEEDBACK } from './queries/insert';

export async function insertFeedback(feedback: Feedback) {
  if (!feedback) return;
  try {
    const { fid, senderUid, receiverUid, comment, ratingCount } = feedback;
    const response = await connPool.query(
      INSERT_FEEDBACK,
      [ fid, senderUid, receiverUid, comment, ratingCount ]
    );
    // TODO
    console.log(response);
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}

