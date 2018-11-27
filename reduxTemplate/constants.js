import { createTypes } from 'redux-friends';
// -------------reducer entry key ---------------- //
export const _RK = 'someKey';
// ---------------- actions Types  ----------------- //
export const SET_AAA = 'SET_AAA';
export const SET_BBB = 'SET_BBB';
// ------------ reducer keys -------------------- //
export const CCC = 'someValue';
export const DDD = 'otherVal';
// --------- action types -------------- //
export const ACTIONS_TYPES = [SET_AAA, SET_BBB];
// -------------- types ---------------- //
export const TYPES = createTypes(_RK, ACTIONS_TYPES);
