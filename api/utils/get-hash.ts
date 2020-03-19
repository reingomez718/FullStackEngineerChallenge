import crypto from 'crypto';

export function getHash(refData: any) {
  return crypto.createHash('sha1').update(JSON.stringify(refData)).digest('hex');
}
