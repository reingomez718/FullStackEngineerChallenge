import connPool from '../../../middleware/database';
import { User } from '../../intefaces/user';
import { INSERT_USER } from './queries/insert';

export async function insertUser(user: User) {
  if (!user) return;
  try {
    const { uid, firstName, lastName, userName, password, isAdmin } = user;

    const response = await connPool.query(
      INSERT_USER,
      [ uid, firstName, lastName, userName, password, isAdmin ]
    );
    // TODO
    console.log(response);
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}