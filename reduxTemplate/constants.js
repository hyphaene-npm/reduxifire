import { createTypes } from 'redux-friends';
// -------------reducer entry key ---------------- //
export const MY_RK = 'someKey';
// ---------------- actions Types  ----------------- //
export const SET_AAA = 'SET_AAA';
export const SET_BBB = 'SET_BBB';
// ------------ reducer keys -------------------- //
export const AAA = 'someAAA';
export const BBB = 'someBBB';
// --------- types Array -------------- //

export const MyTypesArray = [SET_AAA, SET_BBB];
// -------------- types ---------------- //
export const TYPES = createTypes(MY_RK, MyTypesArray);
