import { MY_KEY, MY_OTHER_KEY, myReducerKey } from './constants';

export const getMyKey = state => state[myReducerKey][MY_KEY];
export const getMyOtherKey = state => state[myReducerKey][MY_OTHER_KEY];
