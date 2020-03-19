export const UPDATE_USER = `
  UPDATE users
  SET
    uid = ?
    firstName = ?
    lastName = ?
    userName = ?
    password = ?
    isAdmin = ?
  WHERE
    uid = ?
`;
