export const DELETE_USER = `
  DELETE
  FROM users
  WHERE
    uid = ?
`;