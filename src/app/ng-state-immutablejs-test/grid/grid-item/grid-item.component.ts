import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  @Input() row: Map<string, any>;
}
