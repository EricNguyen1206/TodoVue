import type { Todo } from '@/declaration';
import type { TodoState } from './typings';
export declare const initialState: {
    data: never[];
    fetching: boolean;
    error: boolean;
};
declare const _default: {
    setTodoList: (state: TodoState, payload: Todo[]) => void;
    addTodo: (state: TodoState, payload: Todo) => void;
    toggleTodoCompletion: (state: TodoState, id: number) => void;
    updateTodoById: (state: TodoState, payload: Todo) => void;
    deleteTodoById: (state: TodoState, id: number) => void;
};
export default _default;
