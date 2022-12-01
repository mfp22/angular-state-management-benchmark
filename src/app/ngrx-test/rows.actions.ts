import { Action } from '@ngrx/store';
import { Row } from '../shared/model/row.model';

export enum ActionTypes {
  Add = 'Add Row',
  Update = 'Update Row',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Row) {}
}

export class Update implements Action {
  readonly type = ActionTypes.Update;

  constructor(
    public payload: { itemIndex: number; property: string; value: any }
  ) {}
}
