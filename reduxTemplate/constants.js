import { createTypes } from 'redux-friends';
// -------------reducer entry key ---------------- //
export const _RK = 'rk';
// ---------------- actions Types  ----------------- //
export const SET_AAA = 'SET_AAA';
export const SET_BBB = 'SET_BBB';
// ------------ reducer keys -------------------- //
export const CCC = 'yolo';
export const DDD = 'yolo2';
// ------------ reducer keys default values -------------------- //
export const DEFAULT_CCC = null;
export const DEFAULT_DDD = null;
// --------- action types -------------- //
export const ACTIONS_TYPES = [SET_AAA, SET_BBB];
// -------------- types ---------------- //
export const TYPES = createTypes(_RK, ACTIONS_TYPES);
