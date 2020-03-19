import connPool from '../../../middleware/database';
import { User } from '../../intefaces/user';
import { GET_ALL_USERS } from './queries/get-all';

export async function getAllUsers(): Promise<Array<User>> {
  try {
    const response = await connPool.query(GET_ALL_USERS);
    const users: User[] = JSON.parse(JSON.stringify(response));
    if (!users || users.length < 1) return;
    return users;
  } catch(e) {
    console.log(`[${e.code}] ${e.sqlMessage}`);
    return;
  }
}



