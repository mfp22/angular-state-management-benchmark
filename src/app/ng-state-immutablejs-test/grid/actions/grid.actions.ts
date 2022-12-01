import { HasStore, InjectStore } from '@ng-state/store';
import { List } from 'immutable';

@InjectStore('rows')
export class GridStateActions extends HasStore<List<Map<string, any>>> {
  get rows() {
    return this.store.map((state) => state);
  }
}
