import MyTypes from './types';
import { MY_ACTION, MY_OTHER_ACTION } from './constants';

export const setSomeKey = payload => ({
  payload,
  type: MyTypes[MY_ACTION]
});
export const setSomeOtherKey = payload => ({
  payload,
  type: MyTypes[MY_OTHER_ACTION]
});
