import { Todo } from '../Entity/Todo';
import { ActionParent } from '../actions/todo.action';
const initialState: Todo[] = [{ title: 'Dummy title1' }];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    default:
      return state;
  }
}
