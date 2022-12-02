import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trackById } from '../../shared/utils/track-by.util';
import { Observable } from 'rxjs';
import { Row } from '../../shared/model/row.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  rows$: Observable<any>;

  constructor() {
    this.rows$ = new Observable<Row>();
  }

  trackByFn = trackById;
}
