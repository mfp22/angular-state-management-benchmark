import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faker } from '@faker-js/faker';
import { DataService } from '../shared/service/data.service';
import { Row } from '../shared/model/row.model';
import { Store } from '@ngrx/store';
import { Add, Update } from './rows.actions';

@Component({
  selector: 'app-ngrx-test',
  template: `
    <button (click)="add()">START</button>
    <app-ngrx-grid></app-ngrx-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRxTestComponent {
  private rows: Row[] = [];

  constructor(private store: Store<any>, private dataService: DataService) {
    this.rows = dataService.getData();
  }

  add() {
    // console.profile('Adding items');
    console.time('Adding items');
    const portions = this.dataService.rowsCount / 10;
    for (let index = 0; index < portions; index++) {
      const from = index * 10;
      const to = index * 10 + 10;
      const itemsToAdd = this.rows.slice(from, to);
      itemsToAdd.forEach((item) => {
        this.store.dispatch(new Add(item));
      });
    }

    // console.profileEnd('Adding items');

    setTimeout(() => {
      console.timeEnd('Adding items');
      this.update();
    });
  }

  update() {
    console.time('Updating items');
    let currentItertaion = 0;

    const intervalId = setInterval(() => {
      for (
        let index = 0;
        index < this.dataService.itemsCountToUpdate;
        index++
      ) {
        const randItemIndex = Math.floor(
          Math.random() * this.dataService.rowsCount
        );
        const itemToUpdate = Math.floor(Math.random() * 10);
        const newText = faker.name.firstName();
        // console.log(`${randItemIndex} - item${itemToUpdate}: ${newText}`);

        this.store.dispatch(
          new Update({
            itemIndex: randItemIndex,
            property: `item${itemToUpdate}`,
            value: newText,
          })
        );
      }

      if (currentItertaion >= this.dataService.iterationsCount) {
        clearInterval(intervalId);
        console.timeEnd('Updating items');
      }

      currentItertaion++;
    });
  }
}
