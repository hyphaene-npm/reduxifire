import { SET_AAA, SET_BBB, TYPES } from './constants';
import { createReducer, PAGES, DATA } from 'redux-friends';

const defaultState = {
	[PAGES]: {},
	[DATA]: {},
};

const behaviors = {
	[TYPES[SET_AAA]]: (state, { payload }) => ({ ...state, [PAGES]: payload }),
	[TYPES[SET_BBB]]: (state, { payload }) => ({ ...state, [DATA]: payload }),
	[TYPES[SET_AAA]]: (state, { payload }) => payload,
};

export default createReducer(behaviors, defaultState);
