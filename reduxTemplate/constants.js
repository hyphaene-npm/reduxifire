import { getTypes } from 'redux-friends';

export const MY_RK = 'someKey';

export const SET_AAA = 'SET_AAA';
export const SET_BBB = 'SET_BBB';

export const MY_AAA = 'someAAA';
export const MY_BBB = 'someBBB';

export const MyTypesArray = [MY_AAA, MY_BBB];

export const TYPES = getTypes(MY_RK, MyTypesArray);
