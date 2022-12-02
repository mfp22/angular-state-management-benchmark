import { createStore } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  addEntities,
  updateEntities,
} from '@ngneat/elf-entities';
import { Row } from '../shared/model/row.model';

export const store = createStore({ name: 'rows' }, withEntities<Row>());

export const rows$ = store.pipe(selectAllEntities());

export function addRows(rows: Row[]) {
  store.update(addEntities(rows));
}

export function updateRow(id: Row['id'], row: Partial<Row>) {
  store.update(updateEntities(id, row));
}
