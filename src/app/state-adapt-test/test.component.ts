import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AdaptStore, updateRows } from './rows.repository';
import { benchAdd, benchUpdates } from '../shared/utils/benchmark.util';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="start()">START</button>
    <app-grid></app-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  store = inject(AdaptStore);
  start() {
    benchAdd(this.store.addMany);
    benchUpdates((updates) => updateRows(this.store.updateOne, updates));
  }
}
