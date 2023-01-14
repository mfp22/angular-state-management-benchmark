import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Row } from 'src/app/shared/model/row.model';
import { trackById } from '../../shared/utils/track-by.util';

@Component({
  selector: 'app-ngrx-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRxGridComponent {
  rows$: Observable<Row[]>;
  n = 0;
  constructor(
    private store: Store<{
      state: {
        rows: Row[];
      };
    }>
  ) {
    this.rows$ = this.store.pipe(select((store) => store.state.rows));
  }

  trackByFn = trackById;
}
