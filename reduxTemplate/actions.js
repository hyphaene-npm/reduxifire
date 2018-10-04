import { SET_AAA, SET_BBB, TYPES } from './constants';
import { createAction } from 'redux-friends';

export const setAAA = createAction(TYPES[SET_AAA]);
export const setBBB = createAction(TYPES[SET_BBB]);

export const fetchAAA = () => async dispatch => {
	try {
		const data = await someASYNCFn();
		dispatch(setAAA(data));
	} catch (error) {
		console.warn(error);
	}
};
