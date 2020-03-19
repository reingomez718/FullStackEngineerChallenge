import { v4 } from 'uuid';

export function getUuid(type: 'user' | 'feedback') {
  return `${type}-${v4()}`;
}
