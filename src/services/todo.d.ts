import type { Todo } from '@/declaration';
/**
 * get todo list data from firebase
 * @return {Promise<Todo[]>}
 */
export declare const getAllTodoData: (username?: string) => Promise<Todo[]>;
/**
 * add document todo into collection todos in firestore
 * @param {Todo} todo
 */
export declare const postNewTodo: (todo: Todo) => Promise<import("@firebase/firestore").DocumentReference<import("@firebase/firestore").DocumentData>>;
/**
 * find todo by id and update to firestore
 * @param {Todo} todo
 */
export declare const putTodo: (todo: Todo) => Promise<void>;
/**
 * find todo by id and delete document in firestore
 * @param {number} id
 * @param {string} username
 */
export declare const deleteTodoById: (id: number, username: string) => Promise<void>;
