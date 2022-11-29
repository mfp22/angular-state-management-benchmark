import { Injectable } from '@angular/core';
import { RowsState, RowsStore } from '../rows.store';
import { QueryEntity } from '@datorama/akita';
import { Row } from '../../row.model';

@Injectable({
  providedIn: 'root',
})
export class RowsQuery extends QueryEntity<RowsState, Row> {
  constructor(protected store: RowsStore) {
    super(store);
  }
}
