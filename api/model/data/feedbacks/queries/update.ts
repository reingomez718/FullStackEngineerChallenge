
export const UPDATE_FEEDBACK = `
UPDATE feedbacks
SET
  fid = ?
  senderUid = ?
  receiverUid = ?
  comment = ?
  ratingCount = ?
WHERE
  fid = ?
`;
