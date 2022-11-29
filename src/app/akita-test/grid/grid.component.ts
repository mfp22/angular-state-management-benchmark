import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RowsQuery } from './rows.query';
import { Observable } from 'rxjs';
import { Row } from '../../row.model';

@Component({
    selector: 'app-akita-grid',
    templateUrl: './grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AkitaGridComponent implements OnInit {
    rows$: Observable<Row[]>;

    constructor(private todosQuery: RowsQuery) {
    }

    ngOnInit() {
        this.rows$ = this.todosQuery.selectAll();
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
