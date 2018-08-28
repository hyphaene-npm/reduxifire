import { MY_KEY, MY_OTHER_KEY, MY_RK } from './constants';

export const getMyKey = state => state[MY_RK][MY_KEY];
export const getMyOtherKey = state => state[MY_RK][MY_OTHER_KEY];
