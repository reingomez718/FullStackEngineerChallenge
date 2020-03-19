export const INSERT_USER = `
  INSERT INTO users (
    uid,
    firstName,
    lastName,
    userName,
    password,
    isAdmin
  ) VALUES ( ?, ?, ?, ?, ?, ? );
`;

