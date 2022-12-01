import { Action } from '@ngrx/store';
import { ActionTypes, Add, Update } from './rows.actions';

export const initialState = { rows: [] };

export function rowsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      return { ...state, rows: [...state.rows, (action as Add).payload] };

    case ActionTypes.Update:
      const payload = (action as Update).payload;
      const rows = [...state.rows];

      rows[payload.itemIndex] = {
        ...state.rows[payload.itemIndex],
        [payload.property]: payload.value,
      };

      return { ...state, rows };

    default:
      return state;
  }
}
