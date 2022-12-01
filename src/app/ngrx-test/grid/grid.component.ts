import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Row } from 'src/app/shared/model/row.model';

@Component({
  selector: 'app-ngrx-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRxGridComponent {
  rows$: Observable<any>;

  constructor(private store: Store<{ rows: Row[] }>) {
    this.rows$ = this.store.pipe(select((state) => state.rows));
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
