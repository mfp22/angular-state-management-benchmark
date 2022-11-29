import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ng-state/store';
import { faker } from '@faker-js/faker';
import { DataService } from '../data.service';
import { Row } from '../row.model';

@Component({
  selector: 'app-ng-state-immer-test',
  template: `
    <button (click)="add()">START</button>
    <app-ng-state-grid></app-ng-state-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgStateTestComponent {
  private rows: Row[] = [];

  constructor(private store: Store<any>, private dataService: DataService) {
    this.rows = dataService.getData();
  }

  add() {
    // console.profile('Adding items');
    console.time('Adding items');
    const portions = this.dataService.rowsCount / 10;
    for (let index = 0; index < portions; index++) {
      this.store.select(['rows']).update((state) => {
        const from = index * 10;
        const to = index * 10 + 10;
        const itemsToAdd = this.rows.slice(from, to);
        itemsToAdd.forEach((item) => {
          state.push(item);
        });
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
      this.store.select(['rows']).update((state) => {
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

          state[randItemIndex][`item${itemToUpdate}`] = newText;
        }
      });

      if (currentItertaion >= this.dataService.iterationsCount) {
        clearInterval(intervalId);
        console.timeEnd('Updating items');
      }

      currentItertaion++;
    });
  }
}
