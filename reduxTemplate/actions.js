import { SET_AAA, SET_BBB, TYPES } from './constants';
import { actionBuilder } from 'redux-friends';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const setAAA = actionBuilder(TYPES[SET_AAA]);
export const setBBB = actionBuilder(TYPES[SET_BBB]);

export const fetchAAA = () => async dispatch => {
	try {
		const data = await someASYNCFn();
		dispatch(setAAA(data));
	} catch (error) {
		console.warn(error);
	}
};
