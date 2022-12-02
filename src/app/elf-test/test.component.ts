import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Row } from '../shared/model/row.model';
import { DataService } from '../shared/service/data.service';
import { faker } from '@faker-js/faker';
import { addRows, updateRow } from './rows.repository';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="add()">START</button>
    <app-grid></app-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  private rows: Row[] = [];

  constructor(private dataService: DataService) {
    this.rows = dataService.getData();
  }

  add() {
    console.time('Adding items');
    const portions = this.dataService.rowsCount / 10;
    for (let index = 0; index < portions; index++) {
      const from = index * 10;
      const to = index * 10 + 10;
      const itemsToAdd = this.rows.slice(from, to);
      addRows(itemsToAdd);
    }

    setTimeout(() => {
      console.timeEnd('Adding items');
      this.update();
    });
  }

  update() {
    console.time('Updating items');
    let currentIteration = 0;

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

        updateRow(randItemIndex, {
          [`item${itemToUpdate}`]: newText,
        });
      }

      if (currentIteration >= this.dataService.iterationsCount) {
        clearInterval(intervalId);
        console.timeEnd('Updating items');
      }

      currentIteration++;
    }, 100);
  }
}
