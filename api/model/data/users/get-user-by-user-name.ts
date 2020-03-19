import connPool from '../../../middleware/database';
import { User } from '../../intefaces/user';
import { GET_ALL_USERS } from './queries/get-all';

const BY_USERNAME = 'WHERE userName = ?';

export async function getUserByUserName(userName: string): Promise<User> {
  try {
    const response = await connPool.query(`${GET_ALL_USERS} ${BY_USERNAME}`, [userName]);
    const users: User[] = JSON.parse(JSON.stringify(response));

    if (!users || users.length < 1) return;

    return users[0];

  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}
