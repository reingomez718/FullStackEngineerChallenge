
export const INSERT_FEEDBACK = `
INSERT INTO feedbacks (
  fid,
  senderUid,
  receiverUid,
  comment,
  ratingCount
) VALUES ( ?, ?, ?, ?, ? )
`;


