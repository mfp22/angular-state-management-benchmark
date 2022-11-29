import { Action } from '@ngrx/store';
import { ActionTypes, Add, Update } from './rows.actions';

export const initialState = { rows: [] };

export function rowsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      state.rows = [...state.rows];
      state.rows.push((action as Add).payload);
      return state;

    case ActionTypes.Update:
      const payload = (action as Update).payload;

      state.rows = [...state.rows];
      state.rows[payload.itemIndex] = {
        ...state.rows[payload.itemIndex],
        [payload.property]: payload.value,
      };

      return state;

    default:
      return state;
  }
}
