import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Row } from 'src/app/row.model';

@Component({
    selector: 'app-ngrx-grid',
    templateUrl: './grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgRxGridComponent {
    rows$: Observable<any>;

    constructor(private store: Store<{ rows: Row[] }>) {
        this.rows$ = this.store.pipe(select('state', 'rows'));
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
