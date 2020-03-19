export interface Feedback {
  fid: string;
  comment: string;
  senderUid: string;
  receiverUid: string;
  // Scale of 1 to 5
  ratingCount?: 0 | 1 | 2 | 3 | 4 | 5;
}

