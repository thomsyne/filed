import { UserModel } from './../core/models/user.model';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export function addUserReducer(
  state: UserModel = {
    firstName: null,
    lastName: null,
    email: null,
    budget: null,
    phone: null,
  },
  action
) {
  switch (action.type) {
    case ADD_USER:
      return [action.payload];
    default:
      return state;
  }
}
