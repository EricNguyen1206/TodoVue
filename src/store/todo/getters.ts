import type { TodoState } from './typings'

export default {
  completedTodos: (state: TodoState) => state.data.filter((t) => t.status),
  incompleteTodos: (state: TodoState) => state.data.filter((t) => !t.status),
  todoById: (state: TodoState) => (id: number) => state.data.find((t) => t.id === id)
}
