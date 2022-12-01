import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Row } from '../../row.model';

@Component({
  selector: 'app-ng-state-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgStateGridItemComponent {
  @Input() row: Row;
}
