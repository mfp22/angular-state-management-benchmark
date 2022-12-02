import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RowsStore } from './rows.store';
import { Row, RowUpdate } from '../shared/model/row.model';
import { benchAdd, benchUpdates } from '../shared/utils/benchmark.util';

@Component({
  selector: 'app-akita-test',
  template: `
    <button (click)="start()">START</button>
    <app-akita-grid></app-akita-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AkitaTestComponent {
  constructor(private rowsStore: RowsStore) {}

  start() {
    benchAdd(this.add.bind(this));
    benchUpdates(this.update.bind(this));
  }

  private add(rows: Row[]) {
    rows.forEach((row) => this.rowsStore.add(row));
  }

  private update(updates: RowUpdate[]) {
    updates.forEach((u) =>
      this.rowsStore.update(u.index, {
        [`item${u.column}`]: u.value,
      })
    );
  }
}
