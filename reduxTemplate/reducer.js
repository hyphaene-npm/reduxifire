import MyTypes from './types';
import { MY_ACTION, MY_KEY, MY_OTHER_ACTION, MY_OTHER_KEY } from './constants';
import { reducerBuilder } from 'redux-friends';

const defaultState = {
  [MY_KEY]: {},
  [MY_OTHER_KEY]: {}
};

const behaviors = {
  [MyTypes[MY_ACTION]]: (state, { payload }) => ({
    ...state,
    [MY_KEY]: payload
  }),
  [MyTypes[MY_OTHER_KEY]]: (state, { payload }) => ({
    ...state,
    [MY_KEY]: payload
  })
};

export default reducerBuilder(behaviors, defaultState);
