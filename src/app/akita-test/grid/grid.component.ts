import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RowsQuery } from './rows.query';
import { Observable } from 'rxjs';
import { Row } from '../../shared/model/row.model';
import { trackById } from '../../shared/utils/track-by.util';

@Component({
  selector: 'app-akita-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AkitaGridComponent implements OnInit {
  rows$: Observable<Row[]>;

  constructor(private todosQuery: RowsQuery) {}

  ngOnInit() {
    this.rows$ = this.todosQuery.selectAll();
  }

  trackByFn = trackById;
}
