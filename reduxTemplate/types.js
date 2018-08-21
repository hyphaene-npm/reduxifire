import types from 'redux-types';
import { SOME_ACTION, SOME_OTHER_ACTION, myReducerKey } from './constants';

const typesArray = [SOME_ACTION, SOME_OTHER_ACTION];

const myTypes = types(myReducerKey, typesArray);

export default myTypes;
