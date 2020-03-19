import connPool from '../../../middleware/database';
import { Feedback } from '../../intefaces/feedback';
import { DELETE_FEEDBACK } from './queries/delete';

export async function deleteFeedback(feedback: Feedback) {
  if (!feedback) return;
  try {
    const { fid } = feedback;

    const response = await connPool.query(
      DELETE_FEEDBACK,
      [ fid ]
    );
    // TODO
    console.log(response);
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}