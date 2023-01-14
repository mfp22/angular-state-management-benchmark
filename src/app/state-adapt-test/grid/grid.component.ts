import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { trackById } from '../../shared/utils/track-by.util';
import { AdaptStore } from '../rows.repository';
import { tap } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  rows$ = inject(AdaptStore).all$;

  trackByFn = trackById;
}
