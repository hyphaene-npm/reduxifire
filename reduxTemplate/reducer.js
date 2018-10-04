import { SET_AAA, SET_BBB, TYPES, AAA, BBB } from './constants';
import { createReducer } from 'redux-friends';

const defaultState = {
	[AAA]: {},
	[BBB]: {},
};

const behaviors = {
	[TYPES[SET_AAA]]: (state, { payload }) => ({ ...state, [AAA]: payload }),
	[TYPES[SET_BBB]]: (state, { payload }) => ({ ...state, [BBB]: payload }),
};

export default createReducer(behaviors, defaultState);
