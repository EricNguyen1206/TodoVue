import type { Todo } from '@/declaration';
/**
 * Search engine function
 * @param {Todo[]} todos
 * @param {string} name
 * @return {Todo[]} todo list mapping name key work
 */
export declare function searchTodoByName(todos: Todo[], name: string): Todo[];
