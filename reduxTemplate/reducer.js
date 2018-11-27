import { SET_AAA, SET_BBB, TYPES, CCC, DDD } from './constants';
import { createReducer, assignPayloadToKey, assignPayloadToState } from 'redux-friends';

const defaultState = {
	[CCC]: {},
	[DDD]: {},
};

const behaviors = {
	[TYPES[SET_AAA]]: assignPayloadToKey(CCC),
	[TYPES[SET_BBB]]: assignPayloadToKey(DDD),
};

// const behaviors = {
// 	[TYPES[SET_AAA]]: assignPayloadToState,
// };

export default createReducer(behaviors, defaultState);
