import { User } from 'firebase/auth';
import { atomWithStorage } from 'jotai/utils';

import { getStorage } from './base';

export const userAtom = atomWithStorage<User | null>(
  'user',
  null,
  getStorage<User | null>(),
);
