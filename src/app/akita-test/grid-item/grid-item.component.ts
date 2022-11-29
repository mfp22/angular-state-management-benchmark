import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Row } from '../../row.model';

@Component({
  selector: 'app-akita-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AkitaGridItemComponent {
  row$: Observable<Row>;

  @Input() row: Row;
}
