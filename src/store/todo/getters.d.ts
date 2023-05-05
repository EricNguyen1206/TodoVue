import type { TodoState } from './typings';
declare const _default: {
    completedTodos: (state: TodoState) => import("../../declaration").Todo[];
    incompleteTodos: (state: TodoState) => import("../../declaration").Todo[];
    todoById: (state: TodoState) => (id: number) => import("../../declaration").Todo | undefined;
};
export default _default;
