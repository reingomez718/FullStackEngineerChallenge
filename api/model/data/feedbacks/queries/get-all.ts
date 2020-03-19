export const GET_ALL_FEEDBACKS: string = `
  SELECT 
    fid, 
    senderUid, 
    receiverUid, 
    comment, 
    ratingCount 
  FROM
    feedbacks
`;
