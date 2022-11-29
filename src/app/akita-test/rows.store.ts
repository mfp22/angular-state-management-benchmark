import { Row } from '../row.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface RowsState extends EntityState<Row> {}

const initialState = {};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'rows' })
export class RowsStore extends EntityStore<RowsState, Row> {
  constructor() {
    super(initialState);
  }
}
