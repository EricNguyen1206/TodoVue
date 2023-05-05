import type { Todo } from '@/declaration'
import type { AppAction, AppContext } from '../typings'
import type { PayloadTypeAddTodo, TodoState } from './typings'
import { getAllTodoData, postNewTodo, putTodo, deleteTodoById } from '@/services/todo'

export default {
  /**
   * commit addTodo mutation to update store after 1s
   */
  async readTodoDataAction(context: AppContext<TodoState>) {
    try {
      const result = await getAllTodoData(context.getters.username)
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
      await postNewTodo(data)
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
      putTodo(payload)
    } catch (e: any) {
      throw new Error(e)
    }
  },
  /**
   * commit deleteTodoById mutation to update store after 1s
   */
  deleteTodoAction(context: AppContext<TodoState>, { payload }: AppAction<number>) {
    try {
      context.commit('deleteTodoById', payload)
      deleteTodoById(payload, context.getters.username)
    } catch (e: any) {
      throw new Error(e)
    }
  }
}
