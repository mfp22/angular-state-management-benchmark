import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ng-state/store';
import { Row, RowUpdate } from '../shared/model/row.model';
import { benchAdd, benchUpdates } from '../shared/utils/benchmark.util';

@Component({
  selector: 'app-ng-state-immer-test',
  template: `
    <button (click)="start()">START</button>
    <app-ng-state-grid></app-ng-state-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgStateTestComponent {
  constructor(private store: Store<any>) {}

  start() {
    benchAdd(this.add.bind(this));
    benchUpdates(this.update.bind(this));
  }

  private add(rows: Row[]) {
    this.store.select(['rows']).update((state) => {
      rows.forEach((item) => {
        state.push(item);
      });
    });
  }

  private update(updates: RowUpdate[]) {
    this.store.select(['rows']).update((state) => {
      updates.forEach((u) => {
        state[u.index][`item${u.column}`] = u.value;
      });
    });
  }
}
