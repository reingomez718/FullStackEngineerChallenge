import connPool from '../../../middleware/database';
import { User } from '../../intefaces/user';
import { GET_ALL_USERS } from './queries/get-all';

export async function getUserByUid(uid: string): Promise<User> {
  try {
    const response = await connPool.query(`${GET_ALL_USERS} ${BY_UID}`, [uid]);
    const users: User[] = JSON.parse(JSON.stringify(response));
    if (!users || users.length < 1) return;
    return users[0];
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}

const BY_UID = ' WHERE userName = ?';