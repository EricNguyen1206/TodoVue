import { Todo } from '@/modules/todo/entities'

/**
 * Search engine function
 * @param {Todo[]} todos
 * @param {string} name
 * @return {Todo[]} todo list mapping name key work
 */
export function searchTodoByName(todos: Todo[], name: string): Todo[] {
  const results: Todo[] = []

  todos.forEach((todo) => {
    const todoName = todo.name.toLowerCase()
    const searchName = name.toLowerCase()

    if (todoName.includes(searchName)) {
      results.push(todo)
    }
  })

  return results
}
