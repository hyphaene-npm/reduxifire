import { MY_RK, SET_AAA, SET_BBB } from './constants';

export const getAAA = state => state[MY_RK][SET_AAA];
export const getBBB = state => state[MY_RK][SET_BBB];
