import { createTypes } from 'redux-friends';

export const MY_RK = 'someKey';

export const SET_AAA = 'SET_AAA';
export const SET_BBB = 'SET_BBB';

export const AAA = 'someAAA';
export const BBB = 'someBBB';

export const MyTypesArray = [SET_AAA, SET_BBB];

export const TYPES = createTypes(MY_RK, MyTypesArray);
