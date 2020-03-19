import connPool from '../../../middleware/database';
import { User } from '../../intefaces/user';
import { DELETE_USER } from './queries/delete';

export async function deleteUser(user: User) {
  if (!user) return;
  try {
    const { uid } = user;

    const response = await connPool.query(
      DELETE_USER,
      [ uid ]
    );
    // TODO
    console.log(response);
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}