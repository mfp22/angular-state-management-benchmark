import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Row } from '../shared/model/row.model';
import { Store } from '@ng-state/store';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="add()">START</button>
    <app-grid></app-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  private rows: Row[] = [];

  constructor(private store: Store<any>, private dataService: DataService) {
    this.rows = dataService.getData();
  }

  add() {}

  update() {}
}
