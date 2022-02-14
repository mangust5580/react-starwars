import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM_FAVORITE:
      const { [action.payload]: obj, ...rest } = state;
      return {
        ...rest,
      };
    default:
      return state;
  }
};
