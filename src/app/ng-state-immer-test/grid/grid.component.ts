import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';
import { ComponentState, HasStateActions } from '@ng-state/store';
import { GridStateActions } from './actions/grid.actions';

@ComponentState(GridStateActions)
@Component({
  selector: 'app-ng-state-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgStateGridComponent extends HasStateActions<GridStateActions> {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
