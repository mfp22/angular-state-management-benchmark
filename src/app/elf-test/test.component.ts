import { ChangeDetectionStrategy, Component } from '@angular/core';
import { addRows, updateRows } from './rows.repository';
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
  start() {
    benchAdd(addRows);
    benchUpdates(updateRows);
  }
}
