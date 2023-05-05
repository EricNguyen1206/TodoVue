import type { Todo } from '@/declaration'
import type { TodoState } from './typings'

export const initialState = {
  data: [],
  fetching: false,
  error: false
}

export default {
  setTodoList: (state: TodoState, payload: Todo[]) => {
    state.data = payload
  },
  addTodo: (state: TodoState, payload: Todo) => {
    state.data.push(payload)
  },
  toggleTodoCompletion: (state: TodoState, id: number) => {
    const todo = state.data.find((t) => t.id === id)
    if (todo) {
      todo.status = !todo.status
    }
  },
  updateTodoById: (state: TodoState, payload: Todo) => {
    const index = state.data.findIndex((todo) => todo.id === payload.id)
    if (index !== -1) {
      state.data[index].level = payload.level
      state.data[index].status = payload.status
      state.data[index].name = payload.name
    }
  },
  deleteTodoById: (state: TodoState, id: number) => {
    const index = state.data.findIndex((t) => t.id === id)
    if (index !== -1) {
      state.data.splice(index, 1)
    }
  }
}
