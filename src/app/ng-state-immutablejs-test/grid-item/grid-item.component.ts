import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-ng-state-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgStateGridItemComponent {
  @Input() row: Map<any, any>;
}
