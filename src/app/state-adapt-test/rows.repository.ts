import { Row, RowUpdate } from '../shared/model/row.model';
import {
  createEntityAdapter,
  createEntityState,
} from '@state-adapt/core/adapters';
import { InjectionToken } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { createAdapter, joinAdapters } from '@state-adapt/core';

const rowAdapter = createAdapter<Row>()({
  update: (state, update: RowUpdate) => ({
    ...state,
    [`item${update.column}`]: update.value,
  }),
});
export const adapter = createEntityAdapter<Row>()(rowAdapter);
const initialState = createEntityState<Row>();

export const AdaptStore = new InjectionToken('AdaptStore', {
  providedIn: 'root',
  factory: () => adapt(['adaptStore', initialState], adapter),
});

export function updateRows(
  updateRow: (payload: [number, RowUpdate]) => void,
  updates: RowUpdate[]
) {
  updates.forEach((update) => updateRow([update.index, update]));
}
