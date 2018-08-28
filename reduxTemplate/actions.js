import MyTypes from './types';
import { MY_ACTION, MY_OTHER_ACTION } from './constants';
import { actionBuilder } from 'redux-friends';

export const setSomeKey = actionBuilder(MyTypes[MY_ACTION]);
export const setSomeOtherKey = actionBuilder(MyTypes[MY_OTHER_ACTION]);
