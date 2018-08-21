import { actionTypes } from '../actions/<%- name %>';
import MyTypes from './types';
import { MY_ACTION, MY_KEY, MY_OTHER_ACTION, MY_OTHER_KEY } from './constants';

const reducer = (
  state = {
    [MY_KEY]: {}
    [MY_OTHER_KEY]: {}
  },
  { type, payload }
) => {
  switch (type) {
    case MyTypes[MY_ACTION]:
      return {
        ...state,
        [MY_KEY]: payload
      };
    case MyTypes[MY_OTHER_ACTION]:
      return {
        ...state,
          [MY_OTHER_KEY]: payload
      };
    default:
      return state;
  }
};

export default reducer;
