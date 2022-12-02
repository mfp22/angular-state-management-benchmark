import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ng-state/store';
import { fromJS } from 'immutable';
import { Row, RowUpdate } from '../shared/model/row.model';
import { benchAdd, benchUpdates } from "../shared/utils/benchmark.util";

@Component({
  selector: 'app-ng-state-immutablejs-test',
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
        state.update((list) => list.push(fromJS(item)));
      });
    },
      {},
      { withMutations: true }
    );
  }

  private update(updates: RowUpdate[]) {
    updates.forEach((u) => {
      this.store.select(['rows']).update(
        (state) => {
          state.update((list) => {
            list.getIn([u.index, `item${u.column}`]);
            list.setIn([u.index, `item${u.column}`], u.value);
          });
        },
        {},
        { withMutations: true }
      );
    });
  }
}
