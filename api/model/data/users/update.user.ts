import connPool from '../../../middleware/database';
import { User } from '../../intefaces/user';
import { UPDATE_USER } from './queries/update';

export async function updateUser(user: User) {
  if (!user) return;
  try {
    const { uid, firstName, lastName, userName, password, isAdmin } = user;

    const response = await connPool.query(
      UPDATE_USER,
      [ uid, firstName, lastName, userName, password, isAdmin, uid ]
    );
    // TODO
    console.log(response);
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}