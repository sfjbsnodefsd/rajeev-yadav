import { Todo } from '../Entity/Todo';
import { ActionParent } from '../actions/todo.action';
import { TodoActionType } from '../shared/enum/todo-action-types.enum';
const initialState: Todo[] = [{ title: 'Test Todo' }];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case TodoActionType.Add:
      return [...state, action.payload];
    case TodoActionType.Remove:
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
