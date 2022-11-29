import { HasStore, InjectStore } from '@ng-state/store';
import { Map, List } from 'immutable';

@InjectStore('rows')
export class GridStateActions extends HasStore<List<Map<any, any>>> {
  get rows() {
    return this.state;
  }
}
