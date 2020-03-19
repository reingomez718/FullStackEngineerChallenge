/* eslint-disable no-console */
import mysql, { Pool } from 'mysql';
import './env';
import { promisify } from 'util';

const databaseConnPool: Pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT),
  insecureAuth: true,
});

databaseConnPool.getConnection((err, connection) => {
  if (err) console.log(err.code);
  if (connection) {
    console.log('Connected to DB');
    connection.release();
  }
});

databaseConnPool.query = promisify(databaseConnPool.query).bind(databaseConnPool);

export default databaseConnPool;
