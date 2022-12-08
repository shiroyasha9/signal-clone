import { createJSONStorage } from 'jotai/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function getStorage<T>() {
  return createJSONStorage<T>(() => AsyncStorage);
}
