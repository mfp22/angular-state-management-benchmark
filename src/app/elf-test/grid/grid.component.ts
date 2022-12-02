import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trackById } from '../../shared/utils/track-by.util';
import { rows$ } from '../rows.repository';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  rows$ = rows$;

  trackByFn = trackById;
}
