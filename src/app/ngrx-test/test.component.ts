import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RowUpdate } from '../shared/model/row.model';
import { Store } from '@ngrx/store';
import { Add, Update } from './rows.actions';
import { benchAdd, benchUpdates } from '../shared/utils/benchmark.util';

@Component({
  selector: 'app-ngrx-test',
  template: `
    <button (click)="start()">START</button>
    <app-ngrx-grid></app-ngrx-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRxTestComponent {
  constructor(private store: Store<any>) {}

  start() {
    benchAdd(this.add.bind(this));
    benchUpdates(this.update.bind(this));
  }

  private add(row) {
    return this.store.dispatch(new Add(row));
  }

  private update(update: RowUpdate) {
    this.store.dispatch(
      new Update({
        itemIndex: update.randItemIndex,
        property: `item${update.column}`,
        value: update.value,
      })
    );
  }
}
