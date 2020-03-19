export const GET_ALL_USERS: string = `
  SELECT 
    uid,
    firstName, 
    lastName, 
    userName,
    password,
    isAdmin
  FROM
    users
`;

