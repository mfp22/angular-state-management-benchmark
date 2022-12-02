import { createStore } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  addEntities,
  updateEntities,
} from '@ngneat/elf-entities';
import { Row, RowUpdate } from '../shared/model/row.model';

export const store = createStore({ name: 'rows' }, withEntities<Row>());

export const rows$ = store.pipe(selectAllEntities());

export function addRows(rows: Row[]) {
  store.update(addEntities(rows));
}

export function updateRow(id: Row['id'], row: Partial<Row>) {
  store.update(updateEntities(id, row));
}

export function updateRows(updates: RowUpdate[]) {
  updates.forEach((update) => {
    const row = {
      id: update.index,
      [`item${update.column}`]: update.value,
    };
    updateRow(row.id, row);
  });
}
