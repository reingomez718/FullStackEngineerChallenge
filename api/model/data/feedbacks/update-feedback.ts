import connPool from '../../../middleware/database';
import { Feedback } from '../../intefaces/feedback';
import { UPDATE_FEEDBACK } from './queries/update';

export async function updateFeedback(feedback: Feedback) {
  if (!feedback) return;
  try {
    const { fid, senderUid, receiverUid, comment, ratingCount } = feedback;

    const response = await connPool.query(
      UPDATE_FEEDBACK,
      [ fid, senderUid, receiverUid, comment, ratingCount, fid ]
    );
    // TODO
    console.log(response);
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}

