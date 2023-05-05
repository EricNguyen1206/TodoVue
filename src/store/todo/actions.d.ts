import type { Todo } from '@/declaration';
import type { AppAction, AppContext } from '../typings';
import type { PayloadTypeAddTodo, TodoState } from './typings';
declare const _default: {
    /**
     * commit addTodo mutation to update store after 1s
     */
    readTodoDataAction(context: AppContext<TodoState>): Promise<void>;
    /**
     * commit addTodo mutation to update store after 1s
     */
    createTodoAction(context: AppContext<TodoState>, { payload }: AppAction<PayloadTypeAddTodo>): Promise<void>;
    /**
     * commit updateTodoById mutation to update store after 1s
     */
    updateTodoAction({ commit }: any, { payload }: AppAction<Todo>): void;
    /**
     * commit deleteTodoById mutation to update store after 1s
     */
    deleteTodoAction(context: AppContext<TodoState>, { payload }: AppAction<number>): void;
};
export default _default;
