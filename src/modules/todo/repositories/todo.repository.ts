import { AppAction, AppContext } from '@/modules/core/typings'
import { TodoState } from '../dtos'
import { Todo } from '../entities'
import { PayloadTypeAddTodo } from '../dtos/todo'
import { todoServices } from '../services'

export const initialState: TodoState = {
  data: [],
  loading: false,
  error: false
}

export const mutations = {
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

const actions = {
  /**
   * commit addTodo mutation to update store after 1s
   */
  async readTodoDataAction(context: AppContext<TodoState>) {
    try {
      const result = await todoServices.getAllTodoData(context.getters.username)
      await context.commit('setTodoList', result)
    } catch (e: any) {
      throw new Error(e)
    }
  },
  /**
   * commit addTodo mutation to update store after 1s
   */
  async createTodoAction(
    context: AppContext<TodoState>,
    { payload }: AppAction<PayloadTypeAddTodo>
  ) {
    try {
      // const id = new Date().getUTCMilliseconds()
      const data: Todo = {
        id: context.getters.index + 1,
        status: false,
        user: context.getters.username,
        name: payload.name,
        level: payload.level
      }
      context.commit('addTodo', data)
      context.dispatch('incrementIndexAction')
      await todoServices.postNewTodo(data)
    } catch (e: any) {
      throw new Error(e)
    }
  },
  /**
   * commit updateTodoById mutation to update store after 1s
   */
  updateTodoAction({ commit }: any, { payload }: AppAction<Todo>) {
    try {
      commit('updateTodoById', payload)
      todoServices.putTodo(payload)
    } catch (e: any) {
      throw new Error(e)
    }
  },
  /**
   * commit deleteTodoById mutation to update store after 1s
   */
  deleteTodoAction(
    context: AppContext<TodoState>,
    { payload }: AppAction<number>
  ) {
    try {
      context.commit('deleteTodoById', payload)
      todoServices.deleteTodoById(payload, context.getters.username)
    } catch (e: any) {
      throw new Error(e)
    }
  }
}

const getters = {
  completedTodos: (state: TodoState) => state.data.filter((t) => t.status),
  incompleteTodos: (state: TodoState) => state.data.filter((t) => !t.status),
  todoById: (state: TodoState) => (id: number) =>
    state.data.find((t) => t.id === id)
}

const todoRepository = {
  state: initialState,
  mutations,
  actions,
  getters
}

export default todoRepository
